import React from 'react';
import {ImEnter} from "react-icons/im";
import {CiLogin} from "react-icons/ci";

function LoginContextMenu() {
    return (
        <>
            <div className={`absolute right-10 top-10 bg-white border border-teal-500 min-w-[150px] rounded-lg z-50 shadow-md shadow-teal-500/50 z-50`}>
                <div className='flex items-center justify-center  gap-x-2 w-full hover:bg-gray-300/30 px-4 py-2 rounded-lg cursor-pointer'>
                    <div className='w-[100px] flex justify-start items-center'>
                        <ImEnter size={20} className='mr-2' />
                        <h1>Register</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-x-2 w-full hover:bg-gray-300/30 px-4 py-2 rounded-lg cursor-pointer'>
                    <div className='w-[100px] flex justify-start items-center'>
                        <CiLogin size={20} className='mr-2' />
                        <h1>Login</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginContextMenu;