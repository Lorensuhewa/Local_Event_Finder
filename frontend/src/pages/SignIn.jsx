import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

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
            {loading ? 'Loading...' : 'Sign In'}
              Log in
            </button>
          </form>
          <div className='flex gap-2 mt-5 justify-center'>
            <p>Don&#39;t have an account?</p>
            <Link to='/sign-up'>
              <span className='text-blue-500'>Sign Up</span>
            </Link>
          </div>
          <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
        </div>
      </div>

      {/* Right side: Login Image */}
      <div className='hidden lg:flex flex-1'>
        <img src="/login.jpeg" alt="Login" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
