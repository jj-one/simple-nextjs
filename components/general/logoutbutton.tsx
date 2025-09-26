'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/authcontext';

export function LogoutButton() {
  const router = useRouter();
  const { logout, refreshUser } = useAuth();

  return <Button onClick={async () => {
        await logout();
        await refreshUser(); // optional
        router.push('/login'); // or use window.location.href = '/login'
      }} variant="destructive">Logout</Button>;
}

