import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/current-user';
import SignupForm from '@/components/general/signupform';

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect('/dashboard');
  }

  return <SignupForm />;
}