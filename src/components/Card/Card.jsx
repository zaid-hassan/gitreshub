import React from 'react'

function Card({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return <p className='text-gray-500 text-lg p-11 text-center'>No data available. Please search for a GitHub user.</p>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-start items-center space-x-4">
                <img src={data.avatar_url} alt="GitHub Avatar" className='w-24 rounded-full' />
                <div className="">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p>Bio: {data.bio}</p>
                    <div className="flex space-x-4">
                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p>
                    </div>
                </div>
            </div>
            <p>Username: {data.login}</p>
            <p>Location: {data.location}</p>
            <a href={data.html_url} target='_blank' className="text-blue-500">View GitHub Profile</a>
        </div>
    );
}

export default Card