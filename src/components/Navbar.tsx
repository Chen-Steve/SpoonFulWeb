//import { Sprout } from 'lucide-react';

import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';

const styles = {
  navbar: {
    height: '80px',
    backgroundColor: 'white',
    borderBottom: '1px solid #ececec',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
    top: '0',
  },
  logoContainer: {
    zIndex: 1,
    height: '80%',
  },
  logo: {
    margin: '0px -50px', 
    maxHeight: '100%', 
    maxWidth: '100%',
    height: '150px',
    width: '256px',
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    gap: '1rem',
  },
};

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='bg-white py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0' style={{ height: '80px' }}>
      <div className='container flex items-center justify-between' style={{ height: '100%' }}>
        <div className="relative" style={{ zIndex: 1, height: '100%' }}>
          <Link href='/'>
            {/* Adjust the image container for better positioning and scalability */}
            <img src='/SpoonFulNew256-9.png' alt='SpoonFul Icon' style={{ margin: '-63px', maxHeight: '350%', maxWidth: '200%', height: 'auto' }}/> 
          </Link>
        </div>
        <div className='flex-grow space-x-4 flex justify-end mr-4'>
          <Link className={buttonVariants()} href='/'>
            About
          </Link>
          <Link className={buttonVariants()} href='/'>
            Team
          </Link>
        </div>
        {session?.user ? (
          <UserAccountNav/>
        ) : (
          <Link className={buttonVariants()} href='/sign-in'>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;