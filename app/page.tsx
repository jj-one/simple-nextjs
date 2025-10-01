import { dbConn } from "@/lib/db";
import Link from "next/link";
import { getPosts } from "./actions";
import { BlogPostCards } from "@/components/general/blog-post-cards";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <Suspense fallback={<Skeleton className='h-120 w-full bg-gray-200' />}>
        <HomeBlogs />
      </Suspense>
    </div>
  );
}

async function HomeBlogs() {

  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <BlogPostCards key={post.id} data={post} />
      ))} 
    </div>
  );
}
