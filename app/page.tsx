// 'use client';
// import React, { useEffect } from 'react';
// import { usemultistep } from './usemultistep';
// import UserForm from './UserForm';
// import Emailform from './Emailform';
// import Templateform from './template1';

// const Page = () => {
//   const { step } = usemultistep();

//   return (
//     <>
//       {step == 1 && <UserForm />}
//       {step == 2 && <Emailform />}
//       {step == 3 && <Templateform />}
//     </>
//   );
// };

// export default Page;

'use client';
import React from 'react';
import { usemultistep } from './usemultistep';
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
