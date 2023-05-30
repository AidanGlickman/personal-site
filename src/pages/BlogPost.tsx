// a component that dynamically imports the correct blog post based on the id param. blog posts are stored in the src/blog/posts directory. the blog post component is an mdx file that when imported gives a jsx component
// Path: src/pages/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.scss';
import { BlogFrontmatter } from "../types";

function BlogPost() {
    const { id } = useParams();
    const [Post, setPost] = useState((<div />));
    const [FrontMatter, setFrontMatter] = useState({} as BlogFrontmatter);
    useEffect(() => {
        const fetchPost = async () => {
            const res = await import(`../blog/${id}.mdx`);
            setPost(res.default);
            setFrontMatter(res.frontmatter as BlogFrontmatter);
        };
        fetchPost();
    }, [id]);
    return (
        <div className='blogpost'>
            {Post && FrontMatter ?
                <React.Fragment>
                    <h1 className="blog-title">{FrontMatter.title}</h1>
                    <h3 className="blog-author">by Aidan Glickman</h3>
                    <h5 className="blog-published">Published: {FrontMatter.datePublished}</h5>
                    <hr />
                    {Post}
                </React.Fragment>
                : <h1>Post not found</h1>}
        </div>
    )
}

export default BlogPost;
