import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          WIE DTU <strong className="purple">ACHIEVEMENTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of the recent Achievements of WIE DTU!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IEEE WIE Awards"
              description="The IEEE Women in Engineering awards program recognizes WIE members and WIE Affinity Groups who have made outstanding contributions to IEEE WIE, their community, and the engineering profession, through their dedication and involvement in projects or activities directed toward fulfilling the IEEE WIE goals and objectives. Women engineers are among some of the most distinguished contributors to the engineering profession."
              link="https://wie.ieee.org/ieee-wie-awards-program/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="IEEE Women in Engineering Inspiring Member of the Year Award"
              description="The purpose of this award is to recognize a professional member of IEEE Women in Engineering (WIE) who has made an outstanding contribution to  IEEE WIE, their community, and the engineering community, through their dedication and involvement in projects or activities directed toward fulfilling one or more of the  IEEE WIE goals and objectives."             
              link="https://wie.ieee.org/inspiringmember_award/"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="IEEE Women in Engineering Inspiring Student Member of the Year Award"
              description="The purpose of this award is to recognize an undergraduate/graduate student member of IEEE Women in Engineering (WIE) who has overcome barriers to pursue engineering and/or who has made a personal impact in their community through their dedication and involvement in projects or activities directed toward fulfilling one or more of the IEEE WIE goals and objectives."
              link="https://wie.ieee.org/inspiringstudentmember_award/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IEEE Women in Engineering Affinity Group of the Year Award"
              description="The IEEE Women in Engineering (WIE) Affinity Group of the Year Awards are given annually to one IEEE WIE Affinity Group and one IEEE WIE Student Affinity Group that have shown outstanding leadership and initiative in organizing activities."
              link="https://wie.ieee.org/affinitygroup_award/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IEEE Women in Engineering Student Branch Affinity Group of the Year Award"
              description="The IEEE Women in Engineering (WIE) Student Branch Affinity Group of the Year Awards are given annually to one IEEE WIE Student Branch Affinity Group and one IEEE WIE Student Affinity Group that have shown outstanding leadership and initiative in organizing activities."
              link="https://wie.ieee.org/studentbranchaffinitygroup_award/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="WIE Award Ceremony"
              description="You are cordially invited to join the IEEE Women in Engineering (WIE) Virtual Award Ceremony on Tuesday, 14 December 2021 at 9:00 AM EST. This special event is held to recognize all 2021 WIE Award recipients. The following WIE awards will be presented:
              1) WIE Affinity Group of the Year Award 
              2)WIE Student Branch Affinity Group of the Year Award
              3)WIE Inspiring Member of the Year Award
              4)WIE Inspiring Student Member of the Year Award
              5)WIE Committee Outstanding Volunteer of the Year Award"
              link="https://wie.ieee.org/ieee-wie-awards-program/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
