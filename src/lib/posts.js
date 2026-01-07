import matter from "gray-matter";

const modules = import.meta.glob("../data/posts/*.md", { as: "raw" });

export function getAllPosts() {
    return Object.entries(modules).map(([path, loader]) => {
        const raw = loader();
        const { data, content } = matter(raw);

        const slug = path.split("/").pop().replace(".md", "");

        return {slug, ...data, content, };
    });
}

export function getPostBySlug(slug) {
    return getAllPosts().find(
        (post) => post.slug === slug
    );
}