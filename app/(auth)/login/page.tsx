import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/current-user';
import LoginForm from '@/components/general/loginform';

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect('/dashboard');
  }

  return <LoginForm />;
}