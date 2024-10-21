import Link from "next/link";
import { Button } from "@nextui-org/button";

import Container from "../ui/container";

import { getRecentPosts } from "@/src/services/RecentPosts";

export default async function RecentPosts() {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <div className="section-title my-8">
        <h1 className="mb-2 text-center text-2xl">Recently found items</h1>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div>{posts?.map((item) => <p key={item.id}>{item.title}</p>)}</div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
