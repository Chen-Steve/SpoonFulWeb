import { buttonVariants } from "@/components/ui/button";
import User from "@/components/user";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from 'react';

export default async function Home() {
  const session = await getServerSession(authOptions);

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 10, 
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-white font-sans">

      <div style={contentStyle}>

        <div className="flex items-center justify-center w-full">
          <Image
            src="/SpoonFul.png"
            alt="Spoonful Logo"
            width={700}
            height={700}
            className="rounded-full"
          />
        </div>

        <Link className={buttonVariants()} href='/admin'>
          Open My Home
        </Link>

        {/* <h2 className='mt-4'>Client Session</h2>
        <User />
        <h2 className='mt-4'>Server Session</h2>

        <pre className='bg-gray-100 rounded p-4 mt-4'>
          {JSON.stringify(session, null, 2)}
        </pre> */}
      </div>
    </div>
  );
}
