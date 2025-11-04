import { Modal, FormLabel, Button } from "react-bootstrap";


export default function AssignmentRemover({ show, handleClose, dialogTitle, assignmentName, assignmentId, deleteAssignment, }: 
                                          { show: boolean; 
                                            handleClose: () => void; 
                                            dialogTitle: string; 
                                            assignmentName: string; 
                                            assignmentId: string; 
                                            deleteAssignment: (assignmentId: string) => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>

   <Modal.Body>
    <FormLabel> {`Do you want to delete ${assignmentName} assignment?`} </FormLabel>
   </Modal.Body>

   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> No </Button>
    <Button variant="danger"    onClick={() => { deleteAssignment(assignmentId);
                                                 handleClose();}} > Yes </Button>
   </Modal.Footer>

  </Modal>
);}