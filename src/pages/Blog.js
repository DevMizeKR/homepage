import "./Blog.css";
import BlogSidebar from "../components/blog/BlogSidebar.js";
import BlogCategoryDropdown from "../components/blog/BlogCategoryDropdown.js"
import BlogContent from "../components/blog/BlogContent.js";

function Blog() {
    return (
        <main className="blog-layout">
            <BlogSidebar />
            <div className="blog-main">
                <BlogCategoryDropdown />
                <BlogContent />
            </div>
        </main>
    )
}

export default Blog;