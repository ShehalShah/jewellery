import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow w-full flex'>
        {/* Left Section */}
        <div className='w-full sm:w-1/2 h-full flex items-center justify-center border-r border-teal-300'>
          <div className='sm:w-full items-center flex flex-col gap-4 mb-20'>
            
            <div className='mt-4 flex flex-col gap-5' >
            <div className='w-full'>
              <div className='text-3xl'>
                Sign In
              </div>
              <div className='text-lg'>
                Please sign in to your Account.
              </div>
            </div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='email'
                  placeholder='Email'
                  className='w-full sm:w-[25rem] border-b-2 border-black focus:outline-none focus:border-teal-500 py-1'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  className='w-full sm:w-[25rem] border-b-2 border-black focus:outline-none focus:border-teal-500 py-1'
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <button className='w-full sm:w-[25rem] h-12 bg-black text-white hover:border border-black hover:bg-teal-300 hover:text-black'>
              SIGN IN
            </button>
          </div>
        </div>
        
        <div className='hidden sm:w-1/2 sm:flex'>
          <div className='flex items-center justify-center w-full'>
            <div className='w-2/3 mb-40 flex flex-col gap-10'>
              <div className='text-3xl'>
                Create an Account
              </div>
              <div>Save time during checkout, view your shopping bag and saved items from any device and access your order history.</div>
              <button className='w-full sm:w-[25rem] h-12 bg-black text-white hover:border border-black hover:bg-teal-300 hover:text-black'>
              REGISTER
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full border-t-8 border-teal-300 py-3 flex flex-col sm:flex-row justify-between'>
        <div className='w-full md:w-1/2 flex justify-between sm:px-10 font-bold'>
          <div>
            Contact Us
          </div>
          <div>
            Customer Care
          </div>
          <div>
            Related Stores
          </div>
        </div>
        <div className='w-full sm:w-1/2 flex justify-center items-center'>
          Latest Collection from Our Stores!
        </div>
      </div>
    </div>
  );
}

export default Login;
