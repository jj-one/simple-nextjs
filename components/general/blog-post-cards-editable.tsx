import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  data: {
    id: string;
    createdAt: Date;
    title: string;
    content: string;
    imageUrl: string;
    author: {
        id: string;
        name: string;
    };
  }
}

export function BlogPostCardsEditable({ data }: BlogPostCardProps) {
    
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/dashboard/post/${data.id}`} className="block w-full h-full">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image src={data.imageUrl} alt={data.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
                <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{data.title}</h3>
                    <p className="mb-4 text-md text-gray-600 line-clamp-3">{data.content}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative size-8 overflow-hidden rounded-md">
                                <Image src="/user-profile-icon.jpg" alt="User Profile Image" fill className="object-cover"/>
                            </div>
                            <p className="text-sm font-medium text-gray-700">{data.author.name}</p>
                        </div>

                        <time className="text-xs text-gray-500">{new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        }).format(data.createdAt)}</time>
                    </div>
                </div>
            </Link>
        </div>
    )
}