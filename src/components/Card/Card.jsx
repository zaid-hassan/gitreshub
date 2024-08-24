import React from 'react'

function Card({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return <p className='text-gray-500 text-lg p-11 text-center'>No data available. Please search for a GitHub user.</p>;
    }
    return (
        <div className="w-fit bg-white space-y-4 shadow-lg rounded-lg p-4 md:p-6">
            <div className="flex flex-col justify-start space-y-4  items-center md:space-x-4 md:flex-row">
                <img src={data.avatar_url} alt="GitHub Avatar" className='w-full rounded-t-lg md:rounded-full md:w-24' />
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p>Bio: {data.bio}</p>
                    <div className="flex space-x-4 font-bold">
                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p>
                    </div>
                </div>
            </div>
            <div className="">
                <p>Active since: {data.created_at.substring(0, 10)}</p>
                <p>Hireable: {(data.hireable) ? data.hireable : 'Not mentioned'}</p>
                <p>Location: {(data.location) ? data.location : 'Not mentioned'}</p>
                <a href={data.html_url} target='_blank' className="text-blue-500">View GitHub Profile</a>
            </div>
        </div>
    );
}

export default Card