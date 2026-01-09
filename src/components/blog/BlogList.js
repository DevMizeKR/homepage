import "./BlogList.css";
import { usePosts } from "./usePosts.js";
import { Link, useParams } from "react-router-dom";

export default function BlogList() {
    const { category } = useParams();
    const { posts, loading } = usePosts();
    const filtered = category ? posts.filter(p => p.category === category) : posts;

    if (loading) return <p>불러오는 중...</p>
    
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