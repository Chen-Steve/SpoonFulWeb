//import { Sprout } from 'lucide-react';

import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='bg-white py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0' style={{ height: '80px' }}>
      <div className='container' style={styles.container}>
        <div className="relative flex items-center" style={styles.logoContainer}>
          <Link href='/'>
            {/* Adjust logo size for mobile */}
            <img src='/SpoonFulNew256-9.png' alt='SpoonFul Icon' style={styles.logo}/> 
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