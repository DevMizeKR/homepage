import "./BlogList.css";
import { usePosts } from "./usePosts.js";
import { Link, useParams } from "react-router-dom";

export default function BlogList() {
    const { category } = useParams();
    const { posts, loading } = usePosts();
    const filtered = category ? posts.filter(p => p.category === category) : posts;

    if (loading) return <p>불러오는 중...</p>
    
    return (
        <div className="post-list">
            {filtered.map(post => (
                <Link
                    key={post.id}
                    to={`/blog/post/${post.id}`}
                    className="post-item"
                >
                    <div className="post-thumbnail">
                        <img src={post.thumbnail} alt="" />
                    </div>
                    <div className="post-info">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-meta">{post.date} / {post.category}</p>
                        <p className="post-summary">{post.summary}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}