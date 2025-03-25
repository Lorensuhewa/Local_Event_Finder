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
        <ul className='flex gap-10'>
        
          <Link to='/profile' className='hover:text-red-500'>
            <li>Profile Settings</li>
          </Link>
          <Link to='/favorites' className='hover:text-red-500'>
            <li>Favorites</li>
          </Link>
          <Link to='/events' className='hover:text-red-500'>
            <li>All Events</li>
          </Link>
          <Link to='/map' className='hover:text-red-500'>
            <li>Map</li>
          </Link>
          <Link to='/' className='hover:text-red-500'>
            <li>Log Out</li>
          </Link>
        </ul>
        
      </div>
    </div>
  );
}