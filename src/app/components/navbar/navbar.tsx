'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import { CiMenuBurger, CiUser, CiSearch, CiLogin } from 'react-icons/ci';
import { ImEnter } from 'react-icons/im';
import Logo from '../../../../public/images/Logo.png';
import LoginContextMenu from "@/app/components/navbar/LoginContextMenu";
function Navbar() {
    const [isContextMenuOpen, setContextMenu] = useState<boolean>(false);
    const handleContextMenu = () => {
        setContextMenu(!isContextMenuOpen);
    }
    return (
        <header className='w-full border-[1px] border-b-teal-500 px-20 py-1 z-50'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center cursor-pointer'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={80}
                    />
                    <h1 className='text-lg font-semibold text-teal-600 '>Rise Real Estate</h1>
                </div>
                <div className='flex gap-x-4'>
                    {/* Search bar */}
                    <div className='flex relative'>
                        <input className='border border-gray-400 focus:border-teal-600 min-w-[300px] rounded-full py-2 focus:outline-0 px-5 focus:shadow-2xl placeholder-sm text-gray-600' placeholder='Search House, Villas, Rooms...' />
                        <CiSearch className='absolute right-5 top-[10px]' size={20} />
                    </div>
                    <div className='relative'>
                        <div className={`border border-gray-400 rounded-full text-gray-800 p-2 flex justify-between items-center gap-x-2 cursor-pointer shadow-md hover:shadow-lg duration-150 hover:text-teal-600 hover:border-teal-600 ${isContextMenuOpen && 'border-teal-500'}`} onClick={handleContextMenu}>
                            <CiMenuBurger  />
                            <CiUser size={20}  />
                        </div>
                        {
                            isContextMenuOpen && (
                                <LoginContextMenu />
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;