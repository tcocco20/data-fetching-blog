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

  useEffect(() => {
    const fetchPosts = async () => {
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

      setFetchedPosts(blogPosts);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main className="w-full h-full bg-zinc-900">
      <Image
        className="h-32 w-32 object-cover border-2 border-white rounded-full my-8 mx-auto"
        src={fetchingImage}
        alt="An abstract image depicting data fetching"
      />
      {content}
    </main>
  );
}

export default App;
