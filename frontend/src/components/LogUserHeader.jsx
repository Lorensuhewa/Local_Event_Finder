import { Link } from 'react-router-dom';

export default function UserHeader() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-2 bg-gradient-to-r  from-purple-800 via-purple-500 to-blue-800  text-white">
      {/* Left side: Logo and text */}
      <div className="flex items-center">
        <Link to='/'>
          <img src="/logo2.png" alt="Logo" className='h-16 mr-4' />
        </Link>
      </div>


      {/* Right side: Navigation menu */}
      <ul className='flex gap-10 font-bold text-2xl text-black'>

        <Link to='/userPage' className='hover:text-red-800 border-r-2 pr-4  border-orange-400 '>
          <li>Home</li>
        </Link>
        <Link to='/profile' className='hover:text-red-800 border-r-2 pr-4 -ml-5 border-orange-400 '>
          <li>Profile Settings</li>
        </Link>
        <Link to='/favorites' className='hover:text-red-800 border-r-2 pr-4 -ml-5 border-orange-400 '>
          <li>Favorites</li>
        </Link>
        <Link to='/events' className='hover:text-red-800 border-r-2 pr-4 -ml-5 border-orange-400 '>
          <li>All Events</li>
        </Link>
        <Link to='/calender' className='hover:text-red-800 border-r-2 pr-4 -ml-5 border-orange-400 '>
          <li>Event Calender</li>
        </Link>
        <Link to='/map' className='hover:text-red-800 border-r-2 pr-4 -ml-5 border-orange-400 '>
          <li>Map</li>
        </Link>
        <Link to='/' className='hover:text-red-800 -ml-5  '>
          <li>Log Out</li>
        </Link>
      </ul>

    </div>

  );
}