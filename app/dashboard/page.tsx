import { buttonVariants } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/current-user';
import Link from 'next/link';
import { getPosts } from '@/app/actions';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { BlogPostCardsEditable } from '@/components/general/blog-post-cards-editable';

export default function DashboardPage() {

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Blog Articles</h2>
        <Link href='/dashboard/create' className={buttonVariants()}>Create New Post</Link>
      </div>

      <Suspense fallback={<Skeleton className='h-120 w-full bg-gray-200' />}>
        <DashboardPageBlogs />
      </Suspense>
    </div>
  );
}

async function DashboardPageBlogs() {
  const user = await getCurrentUser();

  const posts = await getPosts(user?.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <BlogPostCardsEditable key={post.id} data={post} />
      ))} 
    </div>
  );
}
