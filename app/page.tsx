import { dbConn } from "@/lib/db";
import Link from "next/link";
import { title } from "process";

async function getPosts() {
  const items = await dbConn.blogPost.findMany({
    select: { title: true, content: true, imageUrl: true, authorName: true, authorImage: true, id: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
  return items;
}

export default async function Home() {

  const posts = await getPosts();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <Link href="#" className="text-blue-500 hover:underline">Read more</Link>
          </div>
        ))} 
      </div>
    </div>
  );
}
