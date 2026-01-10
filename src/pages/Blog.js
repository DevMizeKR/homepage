import "./Blog.css";
import { useMatch } from "react-router-dom";
import BlogSidebar from "../components/blog/BlogSidebar.js";
import BlogCategoryDropdown from "../components/blog/BlogCategoryDropdown.js"
import BlogContent from "../components/blog/BlogContent.js";

function Blog() {
    const isPostPage = useMatch("blog/post/:postId");

    return (
        <main className="blog-layout">
            <BlogSidebar />
            <div className="blog-main">
                {!isPostPage && <BlogCategoryDropdown />}
                <BlogContent />
            </div>
        </main>
    )
}

export default Blog;