'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Select, Input, Space, ConfigProvider } from 'antd';
import HeroBG from '../../../../public/images/HeaderBG.jpg';

enum PropertyMode {
    SellMode= 'SellMode',
    BuyMode = 'BuyMode',
    RentMode = 'RentMode'
}

interface IPropertyMode {
    value: string,
    id: string
}

const theme = {
    token: {
        // Seed Token
        colorBorder: '#0D9488',
        borderRadius: 10,
        optionActiveBg: '#DB2777',
        optionPadding: 50,
        optionFontSize: '50px'

        // Alias Token
        // colorBgContainer: '#f6ffed',
    },
}
const inputTheme = {
    token: {
        paddingInline: 20,
        colorBorder: '#0D9488',
    },
}

function Hero() {
    const PropertyModeButtons = [
        {
            title: 'Buy',
            value: PropertyMode.BuyMode,
            id: crypto.randomUUID()
        },
        {
            title: 'Sell',
            value: PropertyMode.SellMode,
            id: crypto.randomUUID()
        },
        {
            title: 'Rent',
            value: PropertyMode.RentMode,
            id: crypto.randomUUID()
        },
    ];
    const [selectedPropertyMode, setPropertyMode] = useState<IPropertyMode>({ id: PropertyModeButtons[0].id, value: PropertyModeButtons[0].value });

    console.log('selectedPropertyMode', selectedPropertyMode);
    const handleChangePropertyMode = (modetype: IPropertyMode): void => {
        setPropertyMode(modetype);
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
        return (
            <header className='w-full h-[200px] md:h-[500px] lg:h-[700px] border border-red-700 relative'>
                <div className='z-20 h-full relative top-0 w-full'>
                    <Image
                        src={HeroBG}
                        alt='Hero Background'
                        className='w-full h-full object-cover'
                    />
                    {/* overlay */}
                    <div className='w-full h-full bg-black absolute top-0 left-0 opacity-40'></div>
                    <div className=' text-white  h-[80px] absolute top-[40%] left-[30%]  flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center flex-col border border-teal-700'>
                            <h1 className='text-[57px]'>Find Your Dream Home</h1>
                            <h1 className='text-center text-[25px]'>From as low as $10 per day with limited time offer discounts.</h1>
                        </div>
                        <div className='flex gap-x-4'>
                            {
                                PropertyModeButtons.map((currentButton: any) => (
                                    <div className={` ${selectedPropertyMode.value === currentButton.value ? 'bg-teal-600 border border-teal-500 text-white' : 'bg-white text-teal-600'}   py-2 px-6 text-lg rounded-sm hover:bg-teal-700 duration-150 hover:text-white transition-all tracking-wide cursor-pointer`} key={currentButton.id} onClick={()=> handleChangePropertyMode({id: currentButton.id, value: currentButton.value})}>{ currentButton.title }</div>
                                ))
                            }

                        </div>
                        <div className='w-full border border-gray-200 bg-white/80 rounded my-5 text-gray-700 flex justify-between items-center gap-x-4 p-4'>
                            <div className=''>
                                {/*<input type="text" placeholder='Enter Keyword'  className='outline-none border rounded-xl p-3 focus:border-teal-600 border-teal-500' />*/}
                                <ConfigProvider theme={inputTheme}>
                                    <Input placeholder='Enter Keywords' size='large' />
                                </ConfigProvider>
                            </div>

                                <div className=''>
                                    <ConfigProvider theme={theme}>
                                        <Select
                                            dropdownStyle={{ padding: '15px', border:"none" }}
                                            defaultValue="house"
                                            style={{ width: '200px' }}
                                            onChange={handleChange}
                                            options={[
                                                { value: 'house', label: 'House' },
                                                { value: 'villas', label: 'Villas' },
                                                { value: 'office', label: 'Office' },
                                            ]}
                                            size='large'
                                        />
                                    </ConfigProvider>
                                </div>

                            <div className=''>
                                <ConfigProvider theme={theme}>
                                    <Select
                                        showSearch
                                        placeholder="Select Location"
                                        dropdownStyle={{ padding: '15px', border:"none" }}
                                        // defaultValue="Location"
                                        style={{ width: '200px' }}
                                        onChange={handleChange}
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={[
                                            { value: 'lahore', label: 'Lahore' },
                                            { value: 'islamabad', label: 'Islamabad' },
                                            { value: 'multan', label: 'Multan' },
                                            { value: 'rawalpindi', label: 'Rawalpindi' },
                                        ]}
                                        size='large'
                                    />
                                </ConfigProvider>
                            </div>
                            <div>
                                Price
                            </div>
                            <div>
                                Search
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        );

}

export default Hero;