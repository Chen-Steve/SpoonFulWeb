import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <span className="text-2xl font-bold">Spoonful.</span>
        </Link>
        <div className='flex-grow space-x-4 flex justify-end mr-4'>
          <Link className={buttonVariants()} href='/About'>
            About
          </Link>
          <Link className={buttonVariants()} href='/TeamPage'>
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