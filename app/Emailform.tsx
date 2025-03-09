'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Right from '@/components/chevron_right.svg';
import Info from '../components/info.png';

// Define the form data interface
interface FormData {
    Email: string;
    Phone_Number: string;
}

type EmailFormProps = {
    next: () => void;
};

const Emailform: React.FC<EmailFormProps> = ({ next }) => {

    // Use the FormData type for form state
    const [form, setForm] = useState<FormData>({ Email: '', Phone_Number: '' });

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    // Form submission handler
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        next();
    };

    return (
        <div className='w-[1280px] h-[760px] shadow-xl flex bg-transparent'>
            <div className='w-[50%] h-full bg-white flex flex-col gap-10 rounded-r-[50px] p-4'>

                //logo
                <div>
                    <div className='bg-black h-[30px] w-[30px] p-[12px]'></div>
                </div>

                // multi loader
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
                        <div className='h-[20px] aspect-square rounded-full bg-[#00C5FF] text-center text-sm text-white'>
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

                // form
                <form onSubmit={onSubmit} className='flex items-center justify-center'>
                    <div className='flex flex-col gap-[24px]'>
                        <div>
                            <div className='text-[24px] font-[600]'>How can your audience connect with you?</div>
                            <div className='text-[14px]'>You can customize the details later.</div>
                        </div>

                        <div>
                            <div className='text-[14px] font-[500] flex'>Email</div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[360px] h-[44px]'
                                placeholder='name@domain.com'
                                type="email"
                                name="Email"
                                value={form.Email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <div className='text-[14px] font-[500] flex'>Phone Number</div>
                            <input
                                className='bg-[#FAFAFA] text-[14px] border border-[#A1A1AA] rounded-[8px] p-[10px] w-[360px] h-[44px]'
                                placeholder='(+XX)99999999'
                                type="number"
                                name="Phone_Number"
                                value={form.Phone_Number}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            className={`col-span-2 rounded-[40px] w-[360px] h-[44px] text-center ${form.Email.includes('@') && form.Phone_Number.length > 0
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

export default Emailform;
