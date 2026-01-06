import "./BlogSidebar.css";
import { NavLink } from "react-router-dom";

const categories = ["All", "Daily", "Project"];

export default function BlogSidebar() {
    return (
        <aside className="blog-sidebar">
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <NavLink
                            to={`/blog/${category.toLowerCase()}`}
                            className={({ isActive }) => isActive ? "active" : "" }
                        >
                            {category}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
}