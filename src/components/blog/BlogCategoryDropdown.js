import "./BlogCategoryDropdown.css";
import { useNavigate, useLocation } from "react-router-dom";
import { categories } from "./categories.js";

export default function BlogCategoryDropdown() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    const categoryFromUrl = segments[1]; // blog/[category]
    const selectedValue = categories.some(c => c.slug === categoryFromUrl) ? categoryFromUrl : "all";

    return (
        <div className="blog-category-select">
            <select
                value={selectedValue}
                onChange={(e) => {
                    const value = e.target.value;
                    navigate(value === "all" ? "/blog" : `/blog/${value}`);
                }}
            >
                {categories.map(c => (
                    <option key={c.slug} value={c.slug}>
                    {c.label}
                    </option>
                ))}
            </select>
        </div>
    );
}