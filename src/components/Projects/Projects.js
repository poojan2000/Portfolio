import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PM_dashboard from "../../Assets/Projects/PM_dashboard.png";
import MS_Eclipse from "../../Assets/Projects/MS_Eclipse.png";
import quality from "../../Assets/Projects/quality.png";
import supplyChainAgent from "../../Assets/Projects/supply-chain-agent.svg";
import sourcingAgent from "../../Assets/Projects/sourcing-agent.svg";
import commercePlatform from "../../Assets/Projects/commerce-platform.svg";
import rewardsx from "../../Assets/Projects/rewardsx.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplyChainAgent}
              isBlog={false}
              title="Supply Chain AI Agent"
              description="Shipped Microsoft's Supply Chain AI Agent enabling natural-language retrieval of sales, POs, and shipment ETA by SKU, reaching 30K monthly active users and 98% adoption in the FY25 budget cycle by leading backlog prioritization and acceptance criteria across a team of 26 engineers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sourcingAgent}
              isBlog={false}
              title="Sourcing Agent"
              description="Scaled the Sourcing Agent with a budget and subscription feature, delivering real-time fiscal-year budget, cost-curve, supplier-trend, and spend-comparison answers with proactive BOM and price-gap alerts, cutting sourcing managers' manual search time by 70%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commercePlatform}
              isBlog={false}
              title="VSB Self-Serve Commerce Platform"
              description="Owned the VSB Self-Serve Commerce Platform roadmap and shipped it to General Availability targeting ~$200M incremental revenue, driving feature prioritization decisions and coordinating P0/P1 resolution during Hypercare."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rewardsx}
              isBlog={false}
              title="RewardsX (RAG Platform)"
              description="Built RewardsX on Google Cloud and Firebase with a RAG architecture (Gemini LLM + Qdrant vector retrieval) at Credwise, delivering natural-language rewards queries with personalized, context-aware responses, projected to increase user cashback by 25%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PM_dashboard}
              isBlog={false}
              title="Project Management Dashboard"
              description="Developed a comprehensive Project Management dashboard in Excel to efficiently track project budgets, schedules, and team assignments. The dashboard includes Gantt charts for visualizing timelines, ensuring clear oversight of which teams are handling specific projects."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MS_Eclipse}
              isBlog={false}
              title="MS Eclipse Laptop"
              description="Successfully managed the launch of the MS Eclipse laptop series by coordinating with cross-functional teams, including Project, Program Planning, Finance, and Risk. Developed a success criteria plan, created Gantt charts for tracking, and led a team of 6 to secure product launch approval. Boosted sales, capturing a 5% market share with 260k units sold using Crystal Ball software. Conducted market research, SWOT analysis, and developed OBS and RBS, demonstrating strong communication and negotiation skills to minimize budget risks."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quality}
              isBlog={false}
              title="Quality Control"
              description="Utilized DMAIC methodologies to significantly reduce touchscreen issues in Xiaomi Corp’s flagship phones from 4.5% to 1.5%. By leveraging Pareto charts to identify the primary causes of failing screens, I employed Lean Six Sigma techniques to enhance the quality and efficiency of the touchscreens. This approach systematically addressed problem areas, streamlined processes, and optimized performance, contributing to a substantial improvement in product reliability."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
