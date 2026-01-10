import posts from "../../data/posts.json";

export function usePosts() {
    return { posts, loading: false, };
}