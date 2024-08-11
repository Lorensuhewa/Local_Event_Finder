import { Link } from 'react-router-dom';


export default function SignIn() {
  return (
    <div className='flex h-screen'>
      {/* Left side: Logo and Login Form */}
      <div className='flex-1 flex flex-col items-center justify-center p-6'>
        {/* Logo in the top left corner */}
        <div className='absolute top-6 left-6'>
          <img src="/logo2.png" alt="Logo" className='h-12' />
        </div>
        {/* Login Form */}
        <div className='max-w-md w-full'>
          <h1 className='text-6xl text-center font-semibold mb-7'>Log in</h1>
          <form className='flex flex-col gap-4'>
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
            <button className='bg-[#f87171]  text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-90'>
              Log in
            </button>
          </form>
          <div className='flex gap-2 mt-5 justify-center'>
            <p>Don&#39;t have an account?</p>
            <Link to='/sign-up'>
              <span className='text-blue-500'>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Login Image */}
      <div className='hidden lg:flex flex-1'>
        <img src="/login.jpeg" alt="Login" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
