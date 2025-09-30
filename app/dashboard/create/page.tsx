import { createPost } from "@/app/actions";
import { SubmitButton } from "@/components/general/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogPage() {
  return (
    <div>
      <Card className="max-w-lg mx-auto mt-10">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new post to share with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" action={createPost}>
            <div className="flex flex-col gap-4">
              <Label>Title</Label>
              <Input name="title" placeholder="Title of the post" type="text" required/>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Content</Label>
              <Textarea name="content" placeholder="Blog content here" required/>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Image URL</Label>
              <Input name="url" type="url" placeholder="URL of the featured image for the blog"/>
            </div>
            <SubmitButton statusStr={{pendStr: "Creating...", subStr: "Create Post", fit: "w-fit"}} />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}