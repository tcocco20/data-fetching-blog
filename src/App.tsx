import { Button } from "@nextui-org/react";
import { get } from "./util/http";
import { useEffect, useState } from "react";
import { type BlogPost } from "./components/BlogPosts";

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      await get("https://jsonplaceholder.typicode.com/posts");
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl">React Typescript</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
