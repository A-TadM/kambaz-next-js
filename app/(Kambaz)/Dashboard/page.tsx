import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/6200" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CSYE6200 OOD </h5>
              <p className="wd-dashboard-course-title">
                Concepts of Object-Oriented Design
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>  

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5200" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS5200 DMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>    

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5010" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>     

        <div className="wd-dashboard-course">
          <Link href="/Courses/5800" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS5800 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>    

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5100" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS5100 FAI </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence
              </p>
              <button> Go </button> 
            </div>
          </Link>
        </div>    

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/6140" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="React logo" width={200} height={150} />
            <div>
              <h5> CS6140 ML </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>     
      </div>
    </div>
);}
