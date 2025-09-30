'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/context/authcontext";
import { LogoutButton } from "@/components/general/logoutbutton";

export function Navbar() {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  if (loading) return null;

  const isLoginPage = pathname === '/login';
  const isSignUpPage = pathname === '/sign-up';

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog <span className="text-blue-500">JJ</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/" className="text-gray-800 dark:text-gray-50 hover:text-blue-400">Home</Link>
          {user && (
            <Link href="/dashboard" className="text-gray-800 dark:text-gray-50 hover:text-blue-400">Dashboard</Link>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {!user && !isLoginPage && <Link href="/login" className={buttonVariants()}>Login</Link>}
        {!user && !isSignUpPage && <Link href="/sign-up" className={buttonVariants({ variant: 'outline' })}>Sign Up</Link>}
        {user && (
          <>
            <span className="hidden sm:inline font-medium">{user.name}</span>
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
}
