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
    <div id="blog-posts" className="mx-auto container">
      <h1 className="text-3xl text-white font-semibold">Blog Posts</h1>
      <ul className="bg-neutral-800">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
