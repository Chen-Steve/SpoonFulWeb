import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicSplineModel = dynamic(() => import('@/components/SplineModel'), {
    ssr: false,
});

const Page = async () => {
    const session = await getServerSession(authOptions);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                {session?.user ? (
                    <div className="absolute top-20 z-20">
                        <h2 className='text-4xl' style={{ color: 'var(--text-color-custom)' }}>
                            Welcome Back {session.user.username || session.user.name}!
                        </h2>
                    </div>
                ) : (
                    <h2 className='text-2xl'>Please login to see your Home Page</h2>
                )}

                {/* Spline Model Container */}
                <div className="w-full h-full absolute top-0 left-0">
                    <DynamicSplineModel splineUrl="https://prod.spline.design/OqK2doJh4vPsqbHT/scene.splinecode" />
                </div>

                <div className="absolute top-30 right-20 flex flex-col items-end z-20 space-y-10">
                    <button className="bg-primary text-white text-2xl px-3 py-2 rounded">Pickup request</button>
                    <button className="bg-primary text-white text-2xl px-3 py-2 rounded">Personal data</button>
                    <button className="bg-primary text-white text-2xl px-3 py-2 rounded">Personal insights</button>
                    <button className="bg-primary text-white text-2xl px-3 py-2 rounded">Awesome links</button>
                </div>
            </div>
        </>
    );
}

export default Page;
