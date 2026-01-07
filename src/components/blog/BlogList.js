import "./BlogList.css";
import { getAllPosts } from "../../lib/posts";
import { Link, useParams } from "react-router-dom";

export default function BlogList() {
    const { category } = useParams();
    const posts = getAllPosts();

    const filtered = category ? posts.filter(p => p.category === category) : posts;

    return (
        <div className="blog-list">
            {filtered.map(post => (
                <Link
                    key={post.slug}
                    to={`/blog/post/${post.slug}`}
                    className="blog-item"
                >
                    <h3>{post.title}</h3>
                    <p className="blog-meta">{post.date} / {post.category}</p>
                    <p className="blog-summary">{post.summary}</p>
                </Link>
            ))}
        </div>
    );
}