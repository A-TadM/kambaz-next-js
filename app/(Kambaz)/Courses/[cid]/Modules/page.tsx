export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button> Collapse All </button> <button> View Progress </button> <select defaultValue= "ALL"><option value="ALL">Publish ALL</option></select> <button> + Module </button>
      <br />
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            
            <li className="wd-lesson">
              <label>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>

              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating ...</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li> <br />
              </ul>
            </li>

    
            <li className="wd-lesson">
              <label>Week 1, Lecture 2 - Formatting User Interface with HTML</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interface with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and DOM</li>
                <li className="wd-content-item">Formatting web content with Headings and ...</li>
                <li className="wd-content-item">Formatting content with List and Tables</li>
              </ul>
            </li>

          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            
            <li className="wd-lesson">
              <label>Week 2, Lecture 1 - Prototyping the React Kambaz User Interface with HTML</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Keep working on assignment 1</li>
              </ul>

              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Developing Full Stack Next.js Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating ...</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Implementing the Kambaz Account Screens</li>
                <li className="wd-content-item">Implementing the Kambaz Dashboard Screen</li>
                <li className="wd-content-item">Implementing the Kambaz Courses Screen</li> <br />
              </ul>
            </li>

    
            <li className="wd-lesson">
              <label>Week 2, Lecture 2 - Prototyping the React Kambaz User Interface with HTML</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Keep working on assignment 1</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Implementing the Kambaz Courses Screen</li>
                <li className="wd-content-item">Implementing the Kambaz Modules Screen</li>
                <li className="wd-content-item">Implementing the Kambaz Assignments Screens</li>
              </ul>
            </li>

          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            
            <li className="wd-lesson">
              <label>Week 3, Lecture 1 - Styling Web Pages with CSS and Bootstrap, Assignment 2</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
              </ul>

              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Developing Full Stack Next.js Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
                <li className="wd-content-item">Developing Full Stack Next.js Web Applications - Chapter 2 - Styling Web Pages with CSS</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Cascading Style Sheets</li>
                <li className="wd-content-item">Styling with Colors </li>
                <li className="wd-content-item">The Box Model</li> <br />
              </ul>
            </li>

    
            <li className="wd-lesson">
              <label>Week 3, Lecture 2 - Styling Web Pages with CSS and Bootstrap, Assignment 2</label> <br />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Styling color and background color</li>
                <li className="wd-content-item">Styling dimensions and positions</li>
              </ul>

              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Size & Position</li>
                <li className="wd-content-item">Float</li>
                <li className="wd-content-item">Flex</li>
              </ul>
            </li>

          </ul>
        </li>

      </ul>
    </div>
);}
