// 'use client'
// import React from 'react'
// import { useState, useRef } from 'react'

// export function usemultistep() {

//     const [step, setstep] = useState(1)


//     function next() {
//         setstep(step + 1);
//         console.log(step)
//     }
//     return {
//         step,
//         next
//     }
// }

'use client';
import { useState } from 'react';

// Define the custom hook to manage step logic
export function usemultistep() {
    const [step, setStep] = useState<number>(1);

    // Function to increment the step
    function next(): void {
        setStep((prevStep) => prevStep + 1); // Increment the step
        console.log(step); // You can remove this line in production
    }

    return {
        step,
        next,
    };
}

