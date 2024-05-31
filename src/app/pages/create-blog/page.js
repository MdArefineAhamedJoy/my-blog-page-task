"use client"

import React, { useState } from 'react';


const CreateBlogPage = () => {


    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        publicationDate: '',
        writer: '',
        email: ''
    });

    const handleChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
        });

        if (response.ok) {
            console.log('Blog published successfully');
        } else {
            console.error('Failed to publish blog');
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/5">
                <h1 className="text-3xl font-bold mb-6 text-center">Create Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={blogData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Blog Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={blogData.title}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="writer" className="block text-gray-700 text-sm font-bold mb-2">Writer Name:</label>
                            <input
                                type="text"
                                id="writer"
                                name="writer"
                                value={blogData.writer}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Blog Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            value={blogData.content}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="publicationDate" className="block text-gray-700 text-sm font-bold mb-2">Publication Date:</label>
                        <input
                            type="date"
                            id="publicationDate"
                            name="publicationDate"
                            value={blogData.publicationDate}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>


                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Publish Blog</button>
                </form>
            </div>
        </div>
    );
};

export default CreateBlogPage;
