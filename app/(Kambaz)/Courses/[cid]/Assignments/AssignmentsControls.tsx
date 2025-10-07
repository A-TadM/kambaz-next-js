import { Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import Search from "./Search";
export default function AssignmentsControls() {
 return (
      <div id="wd-assignments-controls" className="text-nowrap">
        <Search />

        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
        
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />  
          Group
        </Button>


      </div> 
);}







 