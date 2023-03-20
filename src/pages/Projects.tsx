import { Card, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { projects, tags } from "../data/projects"
import "./Projects.scss"

function Projects() {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="project-row g-4">
                {projects.map((project, index) => (
                    <Col key={index}>
                        <Card bg="primary" className="project-card">
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title className="card-title">
                                    {project.name}
                                    <span style={{ float: "right" }}>
                                        {project.link &&
                                            <a href={project.link} rel="noreferrer" className="barelink">
                                                <i className="fa-solid fa-link"></i>
                                            </a>
                                        }
                                    </span>
                                </Card.Title>
                                <Card.Text className="desc">{project.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted footer">
                                    {project.tags.map((tag, index) => (
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
                                    <span style={{ float: "right" }}>
                                        {project.source &&
                                            <a href={project.source} rel="noreferrer" className="barelink">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        }
                                        {project.blogpost &&
                                            <a href={`/blog/${project.blogpost}`} rel="noreferrer" className="barelink">

                                                <i className="fa-solid fa-pen-nib"></i>
                                            </a>
                                        }
                                    </span>
                                </small>

                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Projects
