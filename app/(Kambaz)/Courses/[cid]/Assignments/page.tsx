import Link from "next/link";
export default function Assignments() {
  return (
  <div> 
    <div>
      <input placeholder="Search for Assignments" id="wd-search-assignment" /> <button id="wd-add-assignment-group">+ Group</button> <button id="wd-add-assignment">+ Assignment</button>
    </div>  

    <div id="wd-assignments"> 
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> <br/>
          <label>Multiple Modules | <b>Not availabe until</b> May 6 at 12:00am |</label> <br/>
          <label><b>Due</b> May 13 at 11:59pm | 100 pts</label>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </Link> <br/>
          <label>Multiple Modules | <b>Not availabe until</b> May 13 at 12:00am |</label> <br/>
          <label><b>Due</b> May 20 at 11:59pm | 100 pts</label>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT 
          </Link> <br/>
          <label>Multiple Modules | <b>Not availabe until</b> May 20 at 12:00am |</label> <br/>
          <label><b>Due</b> May 27 at 11:59pm | 100 pts</label>
        </li>
      </ul>
    </div>

    <div id="wd-quizzes"> 
      <h3 id="wd-quizzes-title">
        QUIZZES <button>+</button> </h3>
      <ul id="wd-quizze-list"></ul>
    </div>

    <div id="wd-exams"> 
      <h3 id="wd-exams-title">
        EXAMS <button>+</button> </h3>
      <ul id="wd-exam-list"></ul>
    </div>

    <div id="wd-project"> 
      <h3 id="wd-project-title">
        PROJECT <button>+</button> </h3>
      <ul id="wd-project-list"></ul>
    </div>

  </div>

);}
