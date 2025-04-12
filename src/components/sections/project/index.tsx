import { Card, Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card.tsx";
import { PROJECTS } from "helpers/data.ts";

const Project = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            My Recent <span className="brand-red">Works</span>{" "}
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            Here are a few projects I've worked on recently.
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS?.map((item) =>
          item.id <= PROJECTS.length - 1 ? (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          ) : (
            <Col md={4} className="project-card" key={item.id}>
              <Card className="project-card-view" key={item.id}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <div className="d-flex flex-column justify-content-between h-100">
                    <Card.Text style={{ textAlign: "justify" }}>
                      {item.description}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
