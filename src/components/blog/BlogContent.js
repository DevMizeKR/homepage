import "./BlogContent.css";
import BlogList from "./BlogList.js";
import BlogPost from "./BlogPost.js"
import { Routes, Route } from "react-router-dom";


export default function BlogContent() {
    return (
        <section className="blog-content">
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path=":category" element={<BlogList />} />
                <Route path="post/:postId" element={<BlogPost />} />
            </Routes>
        </section>
    );
}