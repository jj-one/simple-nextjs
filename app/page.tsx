import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello from the Home page</h1>
      <br />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/abc">ABC</Link>
    </div>
  );
}
