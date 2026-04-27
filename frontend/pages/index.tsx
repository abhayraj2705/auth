import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { FEATURES } from '@/config/features';
import { authService } from '@/templates/auth/services/auth.service';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (FEATURES.auth) {
      const token = authService.getToken();
      if (token) {
        router.push('/dashboard');
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <div className="space-x-4">
          <Link href="/login" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Login</Link>
          <Link href="/signup" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
