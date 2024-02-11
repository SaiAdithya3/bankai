import React from 'react';
import userjson from '../utils/user.json';

const Profile = () => {
    const { user } = userjson;
    return (
        <>
            <div className="flex flex-row items-center justify-around  p-10">
                <div className="flex flex-col ">

                    <h1 className="text-2xl font-bold p-2">
                        Name:    {user.name}
                    </h1>
                    <h1 className="text-2xl font-semibold p-2">
                        Email:  {user.email}
                    </h1>
                    <h1 className="text-2xl font-light p-2">
                        Age:  {user.age}
                    </h1>
                </div>
                <div className="flex py-4 px-7 justify-center  rounded-full bg-pink-600 items-center text-6xl text-white">A</div>


            </div>
            <h1 className="text-7xl px-32 text-center">
                
            </h1>
        </>
    )
}

export default Profile