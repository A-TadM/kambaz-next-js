import ModulesControls from "./ModulesControls";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";


export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ModulesControls /><br /><br /><br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</b></label><LessonControlButtons /> <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons />
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">READINGS</span><LessonControlButtons />
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating ...<LessonControlButtons /></ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons />
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Creating an HTTP server with Node.js<LessonControlButtons /></ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons /></ListGroupItem>
              </ListGroup>
            </ListGroupItem>

    
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 1, Lecture 2 - Formatting User Interface with HTML</b></label><LessonControlButtons />  <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Learn how to create user interface with HTML<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Introduction to HTML and DOM<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Formatting web content with Headings and ...<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Formatting content with List and Tables<LessonControlButtons /> </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 2, Lecture 1 - Prototyping the React Kambaz User Interface with HTML</b></label><LessonControlButtons />  <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Keep working on assignment 1<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">READINGS</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Developing Full Stack Next.js Web Applications - Chapter 1 - Building React User Interfaces with HTML<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating ...<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Account Screens<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Dashboard Screen<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Courses Screen<LessonControlButtons /> </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

    
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 2, Lecture 2 - Prototyping the React Kambaz User Interface with HTML</b></label><LessonControlButtons />  <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Keep working on assignment 1<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Courses Screen<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Modules Screen<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Assignments Screens<LessonControlButtons /> </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 3, Lecture 1 - Styling Web Pages with CSS and Bootstrap, Assignment 2</b></label><LessonControlButtons />  <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Introduction to CSS<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Selectors by tag ID, classes, and document structure<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">READINGS</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Developing Full Stack Next.js Web Applications - Chapter 1 - Building React User Interfaces with HTML<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Developing Full Stack Next.js Web Applications - Chapter 2 - Styling Web Pages with CSS<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Introduction to Cascading Style Sheets<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Styling with Colors <LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />The Box Model<LessonControlButtons /> </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

    
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /><label><b>Week 3, Lecture 2 - Styling Web Pages with CSS and Bootstrap, Assignment 2</b></label><LessonControlButtons />  <br />
              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">LEARNING OBJECTIVES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Styling color and background color<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Styling dimensions and positions<LessonControlButtons /> </ListGroupItem>
              </ListGroup>

              <BsGripVertical className="me-2 fs-3" /><span className="wd-title">SLIDES</span><LessonControlButtons /> 
              <ListGroup className="wd-content rounded-0">
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Size & Position<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Float<LessonControlButtons /> </ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-5 pe-0"><BsGripVertical className="me-2 fs-3" />Flex<LessonControlButtons /> </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

          </ListGroup>
        </ListGroupItem>

      </ListGroup>
    </div>
);}
