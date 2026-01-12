import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function PostBody({ markdownFile }){
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/posts/${markdownFile}`)
            .then(res => res.text())
            .then(setContent);
    }, [markdownFile]);

    return (
        <div className="post-body">
            <ReactMarkdown rehypePlugins={rehypeRaw}>{content}</ReactMarkdown>
        </div>
    );
}