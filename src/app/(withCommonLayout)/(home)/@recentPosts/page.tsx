import Link from "next/link";
import { Card as NextUiCard, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";

// import Container from "../ui/container";
// import Card from "../ui/Card";

import Posts from "@/src/services/RecentPosts";
import { IPost } from "@/src/types";
import Container from "@/src/components/ui/container";

export default async function RecentPosts() {
  const display = await Posts();

  //   console.log(display);

  return (
    <Container>
      <div className="section-title my-8">
        <h1 className="mb-2 text-center text-2xl">Recently found items</h1>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {display?.data?.map((post: IPost) => (
          <NextUiCard
            key={post._id}
            isFooterBlurred
            className="h-[300px] w-full"
          >
            <CardHeader className="absolute top-1 z-10 flex-col items-start">
              <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90">
                {post?.category?.name}
              </p>
              <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
                {post?.title}
              </h4>
            </CardHeader>

            <Image
              removeWrapper
              alt="Card example background"
              className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
              src={post?.images[0]}
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                <p className="text-tiny text-black">{post?.city}</p>
                <p className="text-tiny text-black">
                  {format(new Date(post?.dateFound), "dd MMMM, yyyy")}
                </p>
              </div>

              <Button
                className="bg-black text-tiny text-white"
                radius="full"
                size="sm"
              >
                Details
              </Button>
            </CardFooter>
          </NextUiCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
