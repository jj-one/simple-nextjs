import { buttonVariants } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/current-user';
import Link from 'next/link';
import { getPosts } from '@/app/actions';
import { BlogPostCards } from '@/components/general/blog-post-cards';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  const posts = await getPosts(user?.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Blog Articles</h2>
        <Link href='/dashboard/create' className={buttonVariants()}>Create New Post</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <BlogPostCards key={post.id} data={post} />
        ))} 
      </div>
    </div>
  );
}
