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
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text className="desc">{project.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    {project.tags}
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
