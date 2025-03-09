'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Right from '@/components/chevron_right.svg';
import Info from '../components/info.png';
import Search from '../components/search.svg';

// Define the form data interface
interface FormData {
    First_name: string;
    Last_name: string;
    Location: string;
    Title: string;
    Company: string;
}

type UserFormProps = {
    next: () => void;
};

const UserForm: React.FC<UserFormProps> = ({ next }) => {

    // Use the FormData type for form state
    const [form, setForm] = useState<FormData>({
        First_name: '',
        Last_name: '',
        Location: '',
        Title: '',
        Company: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        next();
    };

    return (
        <div className='w-[1280px] h-[760px] shadow-xl flex bg-transparent'>
            <div className='w-[50%] h-full bg-white flex flex-col gap-10 rounded-r-[50px] p-4'>
                <div>
                    <div className='bg-black h-[30px] w-[30px] p-[12px]'></div>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='w-[90px] h-[49px] flex flex-col gap-[10px] items-center justify-center'>
                        <div className='h-[20px] aspect-square rounded-full bg-[#00C5FF] text-center text-sm text-white'>
                            1
                        </div>
                        <div className='text-center text-[12px] text-[#52525B]'>About</div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image src={Right} alt="" width={20} />
                    </div>

                    <div className='w-[90px] h-[49px] flex flex-col gap-[10px] items-center justify-center'>
                        <div className='h-[20px] aspect-square rounded-full bg-[#D4D4D8] text-center text-sm text-[#52525B]'>
                            2
                        </div>
                        <div className='text-center text-[12px] text-[#52525B]'>Contact info</div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image src={Right} alt="" width={20} />
                    </div>

                    <div className='w-[90px] h-[49px] flex flex-col gap-[10px] items-center justify-center'>
                        <div className='h-[20px] aspect-square rounded-full bg-[#D4D4D8] text-center text-sm text-[#52525B]'>
                            3
                        </div>
                        <div className='flex gap-1 text-center text-[12px] text-[#52525B]'>
                            <div>Template + </div>
                            <div className='bg-gradient-to-b from-blue-500 to-red-500 inline-block text-transparent bg-clip-text'>
                                AI
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-[24px]'>
                    <div className='w-[360px]'>
                        <div className='text-[24px] font-[600]'>Tell us a bit about yourself</div>
                        <div className='text-[14px]'>We’ll use this info to build your page.</div>
                    </div>

                    <div className='grid grid-cols-2 grid-rows-4 gap-4'>
                        <div>
                            <div className='text-[14px] font-[500] flex'>
                                <div>First Name</div>
                                <div className='text-red-600'>*</div>
                            </div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[172px] h-[44px]'
                                placeholder='First Name'
                                type="text"
                                name="First_name"
                                value={form.First_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <div className='text-[14px] font-[500] flex'>
                                <div>Last Name</div>
                                <div className='text-red-600'>*</div>
                            </div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[172px] h-[44px]'
                                placeholder='Last Name'
                                type="text"
                                name="Last_name"
                                value={form.Last_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='col-span-2'>
                            <div className='text-[14px] font-[500] flex'>Location</div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[360px] h-[44px]'
                                placeholder='Place , city , country'
                                type="text"
                                name="Location"
                                value={form.Location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='col-span-2'>
                            <div className='text-[14px] font-[500] flex'>Title</div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[360px] h-[44px]'
                                placeholder='Marketing Lead'
                                type="text"
                                name="Title"
                                value={form.Title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='col-span-2'>
                            <div className='text-[14px] font-[500] flex'>Company</div>
                            <div className='relative'>
                                <input
                                    className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[360px] h-[44px]'
                                    placeholder='Acme'
                                    type="text"
                                    name="Company"
                                    value={form.Company}
                                    onChange={handleChange}
                                />
                                <Image className='absolute right-4 top-3.5' src={Search} alt="" width={17} />
                            </div>
                        </div>

                        <button
                            className={`col-span-2 rounded-[40px] w-[360px] h-[44px] text-center ${form.First_name.length > 0 && form.Last_name.length > 0
                                ? 'bg-[#2C7BDE] text-white cursor-pointer'
                                : 'bg-[#D4D4D8] text-gray-500 cursor-not-allowed'}`}
                            type='submit'
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>

            <div className='w-[50%] h-full flex items-center justify-center'>
                <Image className='' src={Info} alt="" width={466} height={623} />
            </div>
        </div>
    );
};

export default UserForm;
