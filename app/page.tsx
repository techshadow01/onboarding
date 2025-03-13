'use client';
import React from 'react';
import { usemultistep } from './Usemultistep';
import UserForm from './UserForm';
import Emailform from './Emailform';
import Templateform from './template1';

const Page: React.FC = () => {
  const { step, next } = usemultistep();

  return (
    <>
      {step === 1 && <UserForm next={next} />}
      {step === 2 && <Emailform next={next} />}
      {step === 3 && <Templateform />}
    </>
  );
};

export default Page;
