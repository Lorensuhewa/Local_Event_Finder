import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='flex h-screen'>
      {/* Left side: Logo and Sign-Up Form */}
      <div className='flex-1 flex flex-col items-center justify-center p-6'>
        {/* Logo in the top left corner */}
        <div className='absolute top-6 left-6'>
          <img src="/logo2.png" alt="Logo" className='h-12' />
        </div>
        {/* Sign-Up Form */}
        <div className='max-w-md w-full'>
          <h1 className='text-7xl text-center font-semibold mb-7'>Create an account</h1>
          <form className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Username'
              id='username'
              className='bg-slate-100 p-3 rounded-lg'
              // onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='bg-slate-100 p-3 rounded-lg'
              // onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              id='password'
              className='bg-slate-100 p-3 rounded-lg'
              // onChange={handleChange}
            />
            <button className='bg-[#f87171] text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-90'>
              Sign Up
            </button>
          </form>
          <div className='flex gap-2 mt-5 justify-center'>
            <p>Have an account?</p>
            <Link to='/sign-in'>
              <span className='text-blue-500'>Log in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Sign-Up Image */}
      <div className='hidden lg:flex flex-1'>
        <img src="/signup.jpeg" alt="Sign Up" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
