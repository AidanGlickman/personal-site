import { Card, Row, Col } from "react-bootstrap"
import projects_data from "../data/projects"
import "./Projects.scss"

function Projects() {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="project-row g-4">
                {projects_data.map((project, index) => (
                    <Col key={index}>
                        <Card bg="primary" className="project-card">
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>
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
                                    {project.tags}
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
