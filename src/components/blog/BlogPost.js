import "./BlogPost.css";
import { useParams } from "react-router-dom";
import posts from "../../data/posts.json";
import PostBody from "./PostBody.js";
import { capitalize } from "../../utils/text.js";

export default function BlogPost() {
    const { postId } = useParams();
    const post = posts.find(p => p.id === postId);

    if (!post) return <p>Post not found</p>;

    return (
        <article className="blog-post">
            <header className="post-header">
                <h1>{post.title}</h1>
                <p className="post-meta">
                {post.date} · {capitalize(post.category)}
                </p>
            </header>
            <PostBody markdownFile={`${post.id}.md`} />
        </article>
    );
}