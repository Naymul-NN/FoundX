import { Suspense } from "react";

import Landing from "@/src/components/Home/landing";
import RecentPosts from "@/src/components/Home/RecentPost";

export default function Home() {
  return (
    <div>
      <Landing />
      <Suspense
        fallback={
          <div>
            <h1 className="text-center pt-48 pb-48">Loading Recent Posts...</h1>
          </div>
        }
      >
        <RecentPosts />
      </Suspense>
    </div>
  );
}
