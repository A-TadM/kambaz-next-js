"use client"


import { Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import Search from "./Search";

import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import { redirect } from "next/dist/client/components/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


export default function AssignmentsControls() {
  const { cid }  = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  
 return (
      <div id="wd-assignments-controls" className="text-nowrap">
        <Search />

        { currentUser.role === "FACULTY" &&
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn"
                onClick={() => {const aid = uuidv4();
                                redirect(`/Courses/${cid}/Assignments/${aid}}`);}}>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button> }
        
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />  
          Group
        </Button>


      </div> 
);}







 