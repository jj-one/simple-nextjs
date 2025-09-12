'use client';

import { Button } from "../ui/button";

export function LogoutButton() {
  const logout = async () => {
    await fetch('/api/logout');
    window.location.href = '/login';
  };

  return <Button onClick={logout} variant="destructive">Logout</Button>;
}
