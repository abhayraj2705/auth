import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authService } from '@/templates/auth/services/auth.service';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = authService.getToken();
    if (!token) {
      router.push('/login');
      return;
    }

    authService.me(token).then(res => {
      if (res.success) setUser(res.data?.user);
      else router.push('/login');
    }).catch(() => router.push('/login'));
  }, [router]);

  const handleLogout = () => {
    authService.removeToken();
    router.push('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div>
              <span className="mr-4">{user.email}</span>
              <button onClick={handleLogout} className="text-red-600">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Welcome, {user.email}!</h2>
      </div>
    </div>
  );
}
