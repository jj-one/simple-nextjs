import { Counter } from "@/app/components/counter";

type Params = Promise<{ id: string }>;

export default async function UserPage({ params }: { params: Params }) {
    const { id } = await params;

  return <div>
    <h1>Hello {id}</h1>
    <Counter />
  </div>

}