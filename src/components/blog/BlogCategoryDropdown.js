import "./BlogCategoryDropdown.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { categories } from "./categories.js";

export default function BlogCategoryDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const segments = location.pathname.split("/").filter(Boolean);
    const categoryFromUrl = segments[1];
    const current = categories.find(c => c.slug === categoryFromUrl) || categories[0];

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) { setOpen(false); }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="category-dropdown">
            <button
                className="dropdown-trigger"
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
            >
                {current.label}
                <span className={`arrow ${open ? "open" : ""}`}>▼</span>
            </button>
            {open && (
                <ul className="dropdown-menu">
                {categories.map(c => {
                    const selected = c.slug === current.slug;
                    return (
                    <li
                        key={c.slug}
                        className={selected ? "selected" : ""}
                        onClick={() => {
                        setOpen(false);
                        navigate(c.slug === "all" ? "/blog" : `/blog/${c.slug}`);
                        }}
                    >
                        {c.label}
                        {selected && <span className="check">✓</span>}
                    </li>
                    );
                })}
                </ul>
            )}
        </div>
    );
}