import "./Blog.css";
import BlogSidebar from "../components/blog/BlogSidebar.js";
import BlogContent from "../components/blog/BlogContent.js";

function Blog() {
    return (
        <main className="blog-layout">
            <BlogSidebar />
            <BlogContent />
        </main>
    )
}

export default Blog;