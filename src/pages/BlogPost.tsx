// a component that dynamically imports the correct blog post based on the id param. blog posts are stored in the src/blog/posts directory. the blog post component is an mdx file that when imported gives a jsx component
// Path: src/pages/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    const [Post, setPost] = useState((<div />));
    useEffect(() => {
        const fetchPost = async () => {
            const res = await import(`../blog/${id}.mdx`);
            setPost(res.default);
        };
        fetchPost();
    }, [id]);
    return (
        <React.Fragment>
            {Post ? Post : <h1>Post not found</h1>}
        </React.Fragment>
    )
}

export default BlogPost;
