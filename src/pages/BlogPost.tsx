// a component that dynamically imports the correct blog post based on the id param. blog posts are stored in the src/blog/posts directory. the blog post component is an mdx file that when imported gives a jsx component
// Path: src/pages/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../blog/published';
import './BlogPost.scss';

function BlogPost() {
    const { id } = useParams();
    if (id === undefined) return <h1>Post not found</h1>
    const Component = Posts.find(el => el.id === id)?.component;
    if (Component === undefined) return <h1>Post not found</h1>

    const Post = Component.default
    const FrontMatter = Component.frontmatter

    return (
        <div className='blogpost'>
            <React.Fragment>
                <h1 className="blog-title">{FrontMatter.title}</h1>
                <h3 className="blog-author">by Aidan Glickman</h3>
                <h5 className="blog-published">Published: {FrontMatter.datePublished}</h5>
                <hr />
                {<Post />}
            </React.Fragment>
        </div>
    )
}

export default BlogPost;
