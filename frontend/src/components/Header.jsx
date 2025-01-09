import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className="flex justify-between items-center max-w-8xl mx-auto p-3">
        {/* Left side: Logo and text */}
        <div className="flex items-center">
          <Link to='/'>
            <img src="/logo2.png" alt="Logo" className='h-16 mr-4' />
          </Link>
          
        </div>
        

        {/* Right side: Navigation menu */}
        <ul className='flex gap-4'>
        
          <Link to='/' className='hover:text-blue-500'>
            <li>Home</li>
          </Link>
          <Link to='/sign-in' className='hover:text-blue-500'>
            <li>Sign In</li>
          </Link>
          <Link to='/sign-up' className='hover:text-blue-500'>
            <li>Sign Up</li>
          </Link>
        </ul>
        
      </div>
    </div>
  );
}