import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className='flex h-screen'>
      {/* Left side: Logo and Login Form */}
      <div className='flex-1 flex flex-col items-center justify-center p-6'>
        {/* Logo in the top left corner */}
        <div className='absolute top-6 left-6'>
        <Link to='/'>
            <img src="/logo2.png" alt="Logo" className='h-16 mr-4' />
          </Link>
        </div>
        {/* Login Form */}
        <div className='max-w-md w-full'>
          <h1 className='text-6xl text-center font-semibold mb-7'>Log in</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='bg-slate-100 p-3 rounded-lg'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              id='password'
              className='bg-slate-100 p-3 rounded-lg'
              onChange={handleChange}
            />
            <button  disabled={loading} className='bg-[#f87171]  text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-90'>
            {loading ? 'Loading...' : 'Log In'}
              
            </button>
            <OAuth/>
          </form>
          <div className='flex gap-2 mt-5 justify-center'>
            <p>Don&#39;t have an account?</p>
            <Link to='/sign-up'>
              <span className='text-blue-500'>Sign Up</span>
            </Link>
          </div>
          
        </div>
        <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
          </p>
      </div>


      {/* Right side: Login Image */}
      <div className='hidden lg:flex flex-1'>
        <img src="/login.jpeg" alt="Login" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
