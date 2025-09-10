import Link from "next/link";
import { Button } from "../ui/button";

export function Navbard() {
    return <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
            <Link href="/">
                <h1 className="text-3xl font-semibold">
                    Blog <span className="text-blue-500">JJ</span>
                </h1>
            </Link>
            <div className="hidden sm:flex items-center gap-4">
                <Link href="/" className="text-gray-800 dark:text-gray-50 hover:text-blue-400">Home</Link>
                <Link href="/dashboard" className="text-gray-800 dark:text-gray-50 hover:text-blue-400">Dashboard</Link>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <Button>Login</Button>
            <Button variant="secondary">Sign Up</Button>
        </div>
    </nav>;
}