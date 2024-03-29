import React from "react";
import "../css/Skills.css";
import "../css/Projects.css";

import Card from "../util/card";

const Projects = () => {
  return (
    <div className="skills-container">
      <div className="personal-project">
        <div className="skills-heading">
          <h4 className="heading-one">MY PROJECTS</h4>
          <h2 className="heading-two">PERSONAL PROJECTS</h2>
        </div>
        <div className="projects-container">
        <div class="card">
      <div class="card-content">
        <h3>Portfolio Website</h3>
        <p>Portfolio website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-ud.github.io/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Gym Website</h3>
        <p>Gym website created using ReactJs, Javascript, HTML, CSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-gym.netlify.app/">Access</a>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3>Game Website</h3>
        <p>Game website created using HTML, CSS, MaterializeCSS.</p>
        <a target="_blank" rel="noreferrer" href="https://uddeshya-ud.github.io/Game/">Access</a>
      </div>
    </div>
    </div>
    </div>
      <div className="tcs-project">
        <div className="skills-heading">
          <h2 className="heading-two">TCS PROJECTS</h2>
          <div className="projects-container">
            <Card
              cardId="load-testing"
              heading="Load Testing Platform"
              short="Java - SpringBoot - MySQL - REDIS"
              full={[
                "Load Testing as a Service (LTaaS) platform, enabling efficient test scheduling and orchestration across multiple worker agents/clients.",
                "Accelerated REST API response times by 50% through strategic Redis Cache integration, optimizing server-side performance.",
                "Developed a MockMVC test framework for increasing the test coverage of the server-side codebase.",
                "Implemented a flexible interface utilizing a switch variable to leverage Redis Cache as a secondary data source, bolstering data accessibility and performance."
              ]}
              fullHeading="More details"
            />
            <Card
              cardId="automated-alert"
              heading="Automated Alert System"
              short="AWS - Python"
              full={[
                "AWS-Based monitoring automated alert system that monitors the health of AWS-related resources, specifically EC2 and EKS.",
                "Configured AWS services (DynamoDB, SNS, S3, CloudWatch) to construct a scalable and adaptable infrastructure, ensuring system reliability and performance.",
                "AWS Technologies Used: DynamoDB, SNS, Lambda - Python, CloudWatch, S3, and CloudFormation."
              ]}
              fullHeading="More details"
            />
            <Card
              cardId="secrets-management"
              heading="Secrets Management CLI"
              short="Golang"
              full={[
                "Tool to securely encrypt/decrypt files and provide a Secrets Management Interface.",
                "Worked on adding functions in an existing Project CLI using Golang."
              ]}
              fullHeading="More details"
            />
            <Card
              cardId="api-banking-insurance"
              heading="API for a Banking & Insurance Company - Java SpringBoot"
              short="Golang"
              full={[
                "Caching Optimization with AWS ElastiCache Integration ( Redis ).",
                "Asynchronous Reactive Programming with Spring WebFlux.",
                "Conducted unit and integration testing using JUnit and Mockito.",
                "Utilized JIRA to streamline project management processes."
              ]}
              fullHeading="More details"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
