export type BlogPost = {
  id: number;
  title: string;
  text: string;
};

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id="blog-posts" className="mx-auto container flex flex-col gap-10">
      <h1 className="text-3xl text-white font-semibold">Blog Posts</h1>
      <ul className="flex flex-row gap-8 flex-wrap content-center justify-between">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-neutral-800 p-5 rounded-lg flex-1 min-w-[calc(50%-2rem)]"
          >
            <h2 className="text-neutral-400 font-semibold mb-4">
              {post.title}
            </h2>
            <p className="text-stone-400 text-lg">{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
