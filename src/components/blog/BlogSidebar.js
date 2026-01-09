import "./BlogSidebar.css";
import { NavLink } from "react-router-dom";

const categories = [
    {label: "All", slug: "all"},
    {label: "Daily", slug: "daily"},
    {label: "Project", slug: "project"}
];

export default function BlogSidebar() {
    return (
        <aside className="blog-sidebar">
            <h2>Categories</h2>
            <ul className="category-list">
                {categories.map(({label, slug}) => {
                    const isAll = slug === "all";
                    const path = isAll ? "/blog" : `/blog/${slug}`;

                    return (
                        <li key={slug}>
                            <NavLink
                                to={path}
                                end={isAll}
                                className={({ isActive }) => `category-item ${isActive ? "active" : ""}`}
                            >
                                {label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}