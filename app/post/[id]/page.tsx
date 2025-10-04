import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dbConn } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
    const post = await dbConn.blogPost.findUnique({
        where: { id },
        select: { 
            title: true, 
            content: true, 
            imageUrl: true, 
            id: true, 
            createdAt: true,
            author: { select: { name: true } }
        },
    });
    return post;
}

export default async function IdPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getData(id);

    if (!post) {
        return notFound();
    }
    
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
                &larr; Back to Home
            </Link>
            <div className="mt-6 mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image src="/user-profile-icon.jpg" alt={ post.author.name } fill className="object-cover"/>
                        </div>
                        <p className="font-medium">{post.author.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }).format(post.createdAt)}</p>
                </div>
            </div>
            <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg">
                <Image src={post.imageUrl} alt={ post.title } fill className="object-cover" priority/>
            </div>
            <Card>
                <CardContent>
                    <p> { post.content }</p>
                </CardContent>
            </Card>
        </div>
    );
}