// app/(auth)/login/LoginForm.tsx (Client Component)
'use client';

import { useAuth } from '@/context/authcontext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function SignupForm() {
  const { refreshUser } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await fetch('/api/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      await refreshUser(); // ✅ Refresh user context after successful login
      router.push('/dashboard'); // ⛳ Redirect to dashboard
    } else {
      setError('Sign-Up failed');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      {error && <p className="text-red-500">{error}</p>}
      <Input name="name" type="text" placeholder="Your full name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Button type="submit" className="w-full" disabled={loading}>{loading ? "Signing up..." : "Sign up"}</Button>
    </form>
  );
}

