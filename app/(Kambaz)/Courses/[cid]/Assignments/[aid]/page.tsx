export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />


      <textarea id="wd-description" cols={45} rows={10} 
      defaultValue="The assignment is available online Submit a link to thelanding page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.">
      </textarea><br /><br />
      
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="number" id="wd-points" defaultValue={100} /><br /><br />
            </td>
          </tr>
        
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="AS">
                 <option value="AS">ASSIGNMENTS</option>
                 <option value="QS">QUIZZES</option>
                 <option value="ES">EXAMS</option>
                 <option value="PROJ">PROJECT</option>
              </select><br /><br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                 <option value="PERCENTAGE">Percentage</option>
                 <option value="POINT">Point</option>
                 <option value="LETTER">Letter</option>
              </select><br /><br />
            </td>
          </tr>
         
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <div>
                <select id="wd-submission-type" defaultValue="ONLINE">
                   <option value="ONLINE">Online</option>
                   <option value="ONPAPER">On Paper</option>
                </select><br /><br />

                <label>Online Entry Options</label><br />
                <input type="checkbox" name="check-entry-option" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Test Entry</label> <br/>

                <input type="checkbox" name="check-entry-option" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label> <br/>

                <input type="checkbox" name="check-entry-option" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>

                <input type="checkbox" name="check-entry-option" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>

                <input type="checkbox" name="check-entry-option" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Asign</label>
            </td>
            <td>
              <div>
                <label htmlFor="wd-assign-to">Asign to</label><br/>
                <input id="wd-assign-to" defaultValue="Everyone" /><br /><br />

                <label htmlFor="wd-due-date">Due</label><br/>
                <input type="date" defaultValue="2024-05-13" id="wd-due-date"/><br/><br />

                <label htmlFor="wd-available-from">Available from</label> 
                <label htmlFor="wd-available-until">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Until</label><br/>
                <input type="date" defaultValue="2024-05-06" id="wd-available-from"/> <input type="date" defaultValue="2024-05-20" id="wd-available-until"/>
              </div>
            </td>
          </tr>

          <tr>
            <td colSpan={2} align="right">
              <hr />
            </td>
          </tr>  

           <tr>
            <td colSpan={2} align="right">
              <button> Cancel </button> <button> Save </button>
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
);}
