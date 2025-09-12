import { cookies } from 'next/headers';
import { verifyJwt } from '@/lib/auth';

export default async function DashboardPage() {
  const cookieStore = await cookies(); // ✅ sync
  const token = cookieStore.get('token')?.value;
  const user = token ? await verifyJwt(token) : null;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome back, {user?.email}!</h1>
    </div>
  );
}
