import { Image } from "@nextui-org/react";
import { get } from "./util/http";
import { type ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import fetchingImage from "./assets/data-fetching.png";

type RawDataBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = data.map((post) => {
        return {
          id: post.id,
          title: post.title,
          text: post.body,
        };
      });

      setIsFetching(false);
      setFetchedPosts(blogPosts);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p className="text-white text-center">Fetching blog posts...</p>;
  }
  return (
    <main className="w-full h-full bg-zinc-900 py-8">
      <div className="w-1/2 mx-auto flex flex-col content-center gap-10">
        <Image
          className="h-32 w-32 object-cover border-2 border-white rounded-full shadow-[0_0_12px_rgb(161,236,251)_!important]"
          src={fetchingImage}
          classNames={{
            wrapper: "mx-auto",
          }}
          alt="An abstract image depicting data fetching"
        />
        {content}
      </div>
    </main>
  );
}

export default App;
