'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Temp1 from '../components/temp1.png';
import Temp2 from '../components/temp2.png';
import Eye from '../components/eye.svg';
import Person from '../components/person.svg';
import Building from '../components/building.svg';
import Link from '../components/link.svg';
import Link2 from '../components/link2.svg';
import Scenery from '../components/scenery.svg';
import Scenery2 from '../components/scenery2.svg';
import Msg from '../components/message.svg';

// Define the section type
interface Section {
    src: string;
    about: string;
    color: string;
}

// Define the template info type
interface TemplateInfo {
    photo: StaticImageData;
    sections: Section[];
}

const selected = () => {
    console.log("templete selected");
};

const Template1: React.FC = () => {

    const info: TemplateInfo[] = [
        {
            photo: Temp1,
            sections: [
                {
                    src: Person,
                    about: 'about you',
                    color: "#2C7BDE"
                },
                {
                    src: Msg,
                    about: 'Contact section',
                    color: "#2C7BDE"
                },
                {
                    src: Building,
                    about: 'About current company',
                    color: "#2C7BDE"
                },
                {
                    src: Link,
                    about: 'Content - Links & files',
                    color: "#2C7BDE"
                },
                {
                    src: Scenery,
                    about: 'Gallery - Video, image & gif',
                    color: "#2C7BDE"
                },
            ],
        },
        {
            photo: Temp2,
            sections: [
                {
                    src: Person,
                    about: 'about you',
                    color: "#2C7BDE"
                },
                {
                    src: Msg,
                    about: 'Contact section',
                    color: "#2C7BDE"
                },
                {
                    src: Building,
                    about: 'About current company',
                    color: "#2C7BDE"
                },
                {
                    src: Link2,
                    about: 'Content - Links & files',
                    color: "#000000"
                },
                {
                    src: Scenery2,
                    about: 'Gallery - Video, image & gif',
                    color: "#000000"
                },
            ],
        },
    ];

    return (
        <div className='w-[1280px] h-[760px] shadow-xl flex flex-col bg-white gap-10 p-4'>
            <div>
                <div className='bg-black h-[30px] w-[30px] p-[12px]'></div>
            </div>
            <div className='text-[24px] font-[600] mx-auto'>Choose a template</div>

            <div className='flex items-center justify-center gap-[60px]'>
                {info.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-6'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <div className='text-[14px] font-[500]'>Full Story</div>
                            <div className='text-[10px] font-[400]'>Template {index + 1} of {info.length}</div>
                        </div>

                        <Image
                            src={item.photo}
                            alt={`Template ${index + 1}`}
                            width={290}
                            className='rounded-[20px] border border-[#D4D4D8] shadow-xs'
                        />

                        <div className='flex gap-[16px]'>
                            <button className='h-[32px] bg-black text-white rounded-[40px] text-[12px] font-[400] py-[6px] px-[12px] cursor-pointer'
                                onClick={selected}
                            >
                                use template
                            </button>
                            <button className='flex gap-[8px] h-[32px] border border-black rounded-[40px] text-[12px] font-[400] py-[6px] px-[12px] cursor-pointer'>
                                <div>Preview</div>
                                <Image src={Eye} alt="Preview" width={14} />
                            </button>
                        </div>
                        <div>
                            {item.sections.map((section, index1) => (
                                <div key={index1} className='relative flex flex-col gap-[11px] text-[14px] font-[400]'>
                                    <div className='flex gap-[8px]'>
                                        <Image src={section.src} alt={section.about} width={10} />
                                        <div className={`text-[${section.color}]`}>{section.about}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Template1;


// 'use client'
// import React from 'react'
// import { useState } from 'react'
// import Image from 'next/image'
// import Temp1 from '../components/temp1.png'
// import Temp2 from '../components/temp2.png'
// import Eye from '../components/eye.svg'
// import Person from '../components/person.svg'
// import Building from '../components/building.svg'
// import Link from '../components/link.svg'
// import Scenery from '../components/scenery.svg'
// import Msg from '../components/message.svg'
// import { usemultistep } from './usemultistep'



// const template = () => {

//     const { step, next } = usemultistep();

//     const info = [
//         {
//             photo: Temp1,
//             sections: [
//                 {
//                     src: Person,
//                     about: "about you",
//                 },
//                 {
//                     src: Msg,
//                     about: "Contact section",
//                 },
//                 {
//                     src: Building,
//                     about: "About current company",
//                 },
//                 {
//                     src: Link,
//                     about: "Content - Links & files",
//                 },
//                 {
//                     src: Scenery,
//                     about: "Gallery - Video, image & gif"
//                 },
//             ]
//         },
//         {
//             photo: Temp2,
//             sections: [
//                 {
//                     src: Person,
//                     about: "about you",
//                 },
//                 {
//                     src: Msg,
//                     about: "Contact section",
//                 },
//                 {
//                     src: Building,
//                     about: "About current company",
//                 },
//                 {
//                     src: Link,
//                     about: "Content - Links & files",
//                 },
//                 {
//                     src: Scenery,
//                     about: "Gallery - Video, image & gif"
//                 },
//             ]
//         },
//     ];

//     return (
//         <div className='w-[1280px] h-[760px] shadow-xl flex flex-col bg-white gap-10  p-4'>
//             <div>
//                 <div className='bg-black h-[30px] w-[30px] p-[12px]'></div>
//             </div>
//             <div className='text-[24px] font-[600] mx-auto'>
//                 Choose a template
//             </div>

//             <div className='flex items-center justify-center gap-[60px]'>
//                 {
//                     info.map((item, index) => {
//                         return <div key={index} className='flex flex-col items-center justify-center gap-6'>
//                             <div className='flex flex-col items-center justify-center gap-2'>
//                                 <div className='text-[14px] font-[500]'>Full Story</div>
//                                 <div className='text-[10px] font-[400]'>Template {index + 1} of 5</div>
//                             </div>

//                             <Image src={item.photo} alt="" width={290} className='rounded-[20px] border border-[#D4D4D8] shadow-xs' />

//                             <div className='flex gap-[16px]'>
//                                 <button className='h-[32px] bg-black text-white rounded-[40px] text-[12px] font-[400] py-[6px] px-[12px] cursor-pointer'>use template</button>
//                                 <button className='flex gap-[8px] h-[32px] border border-black rounded-[40px] text-[12px] font-[400] py-[6px] px-[12px] cursor-pointer'>
//                                     <div>Preview</div>
//                                     <Image src={Eye} alt="" width={14} />
//                                 </button>
//                             </div>
//                             <div>
//                                 {
//                                     item.sections.map((item, index1) => {
//                                         return <div key={index1} className='relative flex flex-col gap-[11px] text-[14px] font-[400]'>
//                                             <div className='flex gap-[8px]'>
//                                                 <Image className='fill-[#2C7BDE]' src={item.src} alt="" width={10} />
//                                                 <div className=''>{item.about}</div>
//                                             </div>
//                                         </div>
//                                     })}
//                             </div>

//                         </div>
//                     })}
//             </div>

//         </div>
//     )
// }

// export default template