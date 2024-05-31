"use client"
import { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [userBlogs, setUserBlogs] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:5000/user');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchUserBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs');
                const data = await response.json();
                setUserBlogs(data);
            } catch (error) {
                console.error('Error fetching user blogs:', error);
            }
        };

        fetchUserData();
        fetchUserBlogs();
    }, []);



    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12">
                <h1 className="text-3xl font-bold mb-6 text-center">User Profile Page</h1>
                <div className="mb-4">
                    {/* <img src={userData?.image} alt={userData.name} className="rounded-full w-32 h-32 mx-auto mb-4" /> */}
                    <h2 className="text-2xl font-bold mb-2 text-center">{'userData?.name'}</h2>
                    <p className="text-center text-gray-700 mb-1">Phone: {'userData?.phoneNumber'}</p>
                    <p className="text-center text-gray-700 mb-4">Email: {'userData?.email'}</p>
                </div>
                <div >
                    <h3 className="text-xl font-bold mb-4">User Blogs</h3>
                    <div className='grid grid-cols-3 gap-10'>
                        {userBlogs?.length > 0 ? (
                            <ul className="list-disc list-inside border p-4">
                                {userBlogs.map((blog) => (
                                    <li key={blog?.id} className="mb-2">
                                        <h4 className="text-lg font-semibold">{blog?.title}</h4>
                                        <p className="text-gray-700">{blog?.content}</p>
                                        <p className="text-sm text-gray-500">Published on: {new Date(blog?.publicationDate).toLocaleDateString()}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-700">No blogs found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
