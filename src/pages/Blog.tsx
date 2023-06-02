import { useState, Fragment } from "react"
import { Card, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap"
import Posts from "../blog/published"
import { tags } from "../data/projects"
import "./Blog.scss"
import { Link } from "react-router-dom"

function BlogHeader(props: { blog: typeof Posts[0] }) {
    return (
        <Fragment>
            <p>{props.blog.component.frontmatter.title}</p>
        </Fragment>
    )
}

function BlogFooter(props: { blog: typeof Posts[0] }) {
    return (<small className="text-muted footer" style={{ width: "100%" }}>
        <span style={{ float: "left" }}>
            {(props.blog.component.frontmatter.tags as string[]).map((tag, index) => (
                <OverlayTrigger
                    key={index}
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${tag}`}>
                            {tag}
                        </Tooltip>
                    }>
                    <span key={index} className="tag">{`${tags[tag]}\t`}</span>
                </OverlayTrigger>
            ))}
        </span>
        <span style={{ float: "right" }}>
            {props.blog.component.frontmatter.datePublished}
        </span>
    </small >)
}

function Blog() {
    return (
        <div className="Blog">
            <h1>Blog</h1>
            <Row xs={1} md={2} lg={3} className="blog-row g-4">
                {Posts.map((obj, index) => (
                    <Col className="blog-card" key={index}>
                        <Link to={`/blog/${obj.id}`} key={index} className="blog-link">
                            <Card bg="primary">
                                <Card.Img variant="top" src={obj.component.frontmatter.heroImage} className="card-img" />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        <BlogHeader blog={obj} />
                                    </Card.Title>
                                    <Card.Text className="desc">{obj.component.frontmatter.abstract}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <BlogFooter blog={obj} />
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>
        </div>
    )
}

export default Blog
