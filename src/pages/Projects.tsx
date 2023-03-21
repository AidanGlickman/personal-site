import { Fragment, useState } from "react"
import { Card, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap"
import { projects, tags } from "../data/projects"
import "./Projects.scss"

function ProjectFooter(props: { project: typeof projects[0] }) {
    return (<small className="text-muted footer" style={{ width: "100%" }}>
        <span style={{ float: "left" }}>
            {props.project.tags.map((tag, index) => (
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
            {props.project.source &&
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-source`}>
                            View source on GitHub
                        </Tooltip>
                    }>
                    <a href={props.project.source} rel="noreferrer" className="barelink">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </OverlayTrigger>
            }
            {props.project.blogpost &&
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-source`}>
                            Read the writeup
                        </Tooltip>
                    }>
                    <a href={`/blog/${props.project.blogpost}`} rel="noreferrer" className="barelink">
                        <i className="fa-solid fa-pen-nib"></i>
                    </a>
                </OverlayTrigger>
            }
        </span>
    </small >)
}

function Projects() {
    const [show, setShow] = useState(-1);

    const handleClose = () => setShow(-1);
    const handleShow = (index: number) => setShow(index);


    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="project-row g-4">
                {projects.map((project, index) => (
                    <Fragment key={index}>
                        <Col className="project-card">
                            <Card bg="primary">
                                <Card.Img variant="top" src={project.image} className="card-img" onClick={() => setShow(index)} />
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
                                    <ProjectFooter project={project} />
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Modal show={show === index} onHide={handleClose} className="primary-modal">
                            <Modal.Header closeVariant="white">
                                <Modal.Title style={{ width: "100%" }}>
                                    {project.name}
                                    <span style={{ float: "right" }}>
                                        {project.link &&
                                            <a href={project.link} rel="noreferrer" className="barelink">
                                                <i className="fa-solid fa-link"></i>
                                            </a>
                                        }
                                    </span>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={project.image} alt={project.name} width="100%" />
                                <p>{project.description}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <ProjectFooter project={project} />
                            </Modal.Footer>
                        </Modal>
                    </Fragment>
                ))}
            </Row>
        </div>
    )
}

export default Projects
