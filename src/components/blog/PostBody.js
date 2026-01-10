import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function PostBody({ markdownFile }){
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/posts/${markdownFile}`)
            .then(res => res.text())
            .then(setContent);
    }, [markdownFile]);

    return (
        <div className="post-body">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}