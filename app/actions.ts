"use server"

import { getCurrentUser } from "@/lib/current-user";
import { dbConn } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    const user = await getCurrentUser();
    if (!user) {
      return redirect("/login");
    }

  const title = formData.get("title")?.valueOf() as string
  const content = formData.get("content")?.valueOf() as string;
  const imageUrl = formData.get("url")?.valueOf() as string;

  console.log("Title:", title);
  console.log("Content:", content);
  console.log("Image URL:", imageUrl);

 await dbConn.blogPost.create({
    data: {
      title,
      content,
      imageUrl,
        authorId: user.id,
    },
  });

  return redirect("/dashboard");
}

export async function getPosts(userId?: string | null) {
  const items = await dbConn.blogPost.findMany({
    where: userId ? { authorId: userId } : {},
    select: { 
      title: true, 
      content: true, 
      imageUrl: true, 
      id: true, 
      createdAt: true,
      author: { select: { name: true } } 
    },
    orderBy: { createdAt: "desc" },
  });
  return items;
}