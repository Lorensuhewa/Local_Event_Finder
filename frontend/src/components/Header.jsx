import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';

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
      <div>
        <ul className='flex gap-10 '>

          <Link to='/' className='hover:text-red-500'>
            <li>
              <Typography variant="h6"  >
                  Home
              </Typography>
            </li>
          </Link>
          <Link to='/sign-in' className='hover:text-red-500'>
          <li>
              <Typography variant="h6"  >
                  Sign In
              </Typography>
            </li>
          </Link>
          <Link to='/sign-up' className='hover:text-red-500'>
          <li>
              <Typography variant="h6"  >
                  Sign Up
              </Typography>
            </li>
          </Link>
        </ul>
      </div>

      </div>
    </div>
  );
}