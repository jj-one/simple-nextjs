import { getCurrentUser } from '@/lib/current-user';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome back, {user?.email}!</h1>
    </div>
  );
}
