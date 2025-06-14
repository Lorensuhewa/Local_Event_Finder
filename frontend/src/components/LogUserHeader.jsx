import { Link } from 'react-router-dom';

export default function UserHeader() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-2 bg-slate-200">
      {/* Left side: Logo and text */}
      <div className="flex items-center">
        <Link to='/'>
          <img src="/logo2.png" alt="Logo" className='h-16 mr-4' />
        </Link>
      </div>


       {/* Right side: Navigation menu */}
       <ul className='flex gap-8 font-semibold text-lg text-black'>
        <Link to='/userPage' className='hover:text-red-500'>
          <li>Home</li>
        </Link>
        <Link to='/profile' className='hover:text-red-500'>
          <li>Profile Settings</li>
        </Link>
        <Link to='/favorites' className='hover:text-red-500'>
          <li>Favorites</li>
        </Link>
        <Link to='/events' className='hover:text-red-500'>
          <li>All Events</li>
        </Link>
        <Link to='/calender' className='hover:text-red-500'>
          <li>Event Calendar</li>
        </Link>
        <Link to='/map' className='hover:text-red-500'>
          <li>Map</li>
        </Link>
        <Link to='/' className='hover:text-red-500'>
          <li>Log Out</li>
        </Link>
      </ul>
    </div>
  );
}