import { useParams } from "react-router-dom";
import posts from "../../data/posts.json";
import PostBody from "./PostBody.js";

export default function BlogPost() {
    const { postId } = useParams();
    const post = posts.find(p => p.id === postId);

    if (!post) return <p>Post not found</p>;

    return (
        <article className="blog-post">
            <header className="post-header">
                <h1>{post.title}</h1>
                <p className="post-meta">
                {post.date} · {post.category}
                </p>
            </header>
            {post.thumbnail && (
                <img
                src={post.thumbnail}
                alt={post.title}
                className="post-thumbnail"
                />
            )}
            <PostBody markdownFile={`${post.id}.md`} />
        </article>
    );
}