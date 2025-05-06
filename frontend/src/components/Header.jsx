import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-2 bg-gradient-to-r  from-purple-800 via-purple-500 to-blue-800  text-white">

      {/* Left side: Logo and text */}
      <div className="flex items-center">
        <Link to='/'>
          <img src="/logo2.png" alt="Logo" className='h-16 mr-4' />
        </Link>

      </div>

      {/* Right side: Navigation menu */}
      <div>
        <ul className='flex gap-10  text-white '>

          <Link to='/' className='hover:text-red-500'>
            <li>
              <Typography variant="h5" sx={{fontFamily:"cursive"}} >
                  Home
              </Typography>
            </li>
          </Link>
          <Link to='/sign-in' className='hover:text-red-500'>
          <li>
              <Typography variant="h5" sx={{fontFamily:"cursive"}} >
                  Sign In
              </Typography>
            </li>
          </Link>
          <Link to='/sign-up' className='hover:text-red-500'>
          <li>
              <Typography variant="h5" sx={{fontFamily:"cursive"}} >
                  Sign Up
              </Typography>
            </li>
          </Link>
        </ul>
      </div>

    </div>
  );
}