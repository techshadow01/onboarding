
'use client';
import { useState } from 'react';

//  manage step logic
export function usemultistep() {
    const [step, setStep] = useState<number>(1);

    // Function to increment the step
    function next(): void {
        setStep((prevStep) => prevStep + 1); // Increment the step
    }

    return {
        step,
        next,
    };
}

