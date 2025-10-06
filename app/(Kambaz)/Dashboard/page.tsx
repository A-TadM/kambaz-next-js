import Link from "next/link";
{/*import Image from "next/image";*/}
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import Button from 'react-bootstrap/Button';


export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                <Card>
                  <Link href="/Courses/1234"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                       <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                       <CardBody>
                         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                         <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          Full Stack software developer</CardText>
                         <Button variant="primary">Go</Button>
                       </CardBody>
                  </Link>
                </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/6200"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CSYE6200 OOD</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Concepts of Object-Oriented Design</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/5200"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5200 DMS</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Database Management Systems</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/5010"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5010 PDP</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Programming Design Paradigm</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/5800"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5800 Algo</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Algorithms</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/5100"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5100 FAI</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Foundations of Artificial Intelligence</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>

             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                 <Card>
                   <Link href="/Courses/6140"
                         className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6140 ML</CardTitle>
                          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                           Machine Learning</CardText>
                          <Button variant="primary">Go</Button>
                        </CardBody>
                   </Link>
                 </Card>
             </Col>
        </Row>   
      </div>
    </div>
);}
