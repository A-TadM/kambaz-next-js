"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../../../client";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import Link from "next/link";


export default function QuizEditorDetails() {
    const { cid, qid }  = useParams();
    const [quiz, setQuiz] = useState<any>({});

    const fetchQuiz = async () => {
      const quiz = await client.findQuizById(qid as string);  
      setQuiz(quiz);
    };
    useEffect(() => {fetchQuiz();}, []);

    const onUpdateQuiz = async (quiz: any) => {
      await client.updateQuiz(quiz);
    };


    return(
      <div id="wd-quiz-editor-details">
        <Form>
            <br />
            <Row className="mb-2">
                <Col > 
                    <FormControl id="wd-title" defaultValue={quiz.title} className="w-50"
                                 onChange={(e) => {setQuiz({...quiz, title: e.target.value});}} /> 
                </Col>
            </Row>
             <FormLabel htmlFor="wd-description"> Quiz Instructions: </FormLabel>
             <Row className="mb-2">
                 <Col > 
                     <FormControl id="wd-description" as="textarea" rows={5} defaultValue={quiz.description}
                                  onChange={(e) => {setQuiz({...quiz, description: e.target.value});}} /> 
                 </Col>
             </Row>
             <Row className="mb-2">
                 <FormLabel htmlFor="wd-points" className="ps-5"column sm={{span: 1, offset: 1}}> Points </FormLabel>
                 <Col sm={10}> <FormControl id="wd-points" type="number" defaultValue={quiz.points} className="w-25"
                                            onChange={(e) => {setQuiz({...quiz, points: parseInt(e.target.value)});}} /> 
                 </Col>
             </Row>
             <Row className="mb-2">
                 <FormLabel htmlFor="wd-type" className="ps-3" column sm={{span: 1, offset: 1}}> Quiz Type </FormLabel>
                 <Col sm={10}>
                     <select value={quiz.quizType} id="wd-type" className="form-select w-25"
                             onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
                        <option value="GRADED QUIZ">GRADED QUIZ</option>
                        <option value="PRACTICE QUIZ">PRACTICE QUIZ</option>
                        <option value="GRADED SURVEY">GRADED SURVEY</option>
                        <option value="UNGRADED SURVEY">UNGRADED SURVEY</option>
                     </select>
                 </Col>   
              </Row>
              <Row className="mb-2">
                 <FormLabel htmlFor="wd-group" className="ps-5" column sm={{span: 1, offset: 1}}> Group </FormLabel>
                 <Col sm={10}>
                     <select value={quiz.assignmentGroup} id="wd-group" className="form-select w-25"
                             onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="PROJECT">PROJECT</option>
                     </select>
                 </Col>   
              </Row>
              <FormLabel className="mb-2" column sm={{span: 1, offset: 2}}><b>Options</b></FormLabel>
              <Row className="mb-2">
                  <Col sm={{span: 10, offset: 2}}> 
                      <input type="checkbox" id="wd-shuffle-answers" 
                             defaultChecked={quiz.shuffleAnswers}
                             onChange={(e) => setQuiz({ ...quiz, shuffleAnswers: Boolean(e.target.value) })}/>
                      <label htmlFor="wd-shuffle-answers">&nbsp;Shuffle Answers</label>   
                  </Col>
              </Row>
              <Row className="mb-2">
                  <FormLabel htmlFor="wd-time-limit" column sm={{span: 1, offset: 2}}> Time Limit </FormLabel>
                  <Col sm={1}>
                      <FormControl id="wd-time-limit" type="number" defaultValue={quiz.timeLimit} 
                                   onChange={(e) => {setQuiz({...quiz, timeLimit: parseInt(e.target.value)});}} /> 
                  </Col>
                  <FormLabel column sm={8}> Minutes </FormLabel>
              </Row>
              
              <Col className="mb-2 wd-assignment-percentage p-1 rounded-2" sm={{span: 10, offset: 2}}>
                  <Row>
                    <Col sm={3}> 
                        <FormCheck label="Allow Multiple Attempts" id="wd-multiple-attempts" 
                                   defaultChecked={quiz.multipleAttempts}
                                   onChange={(e) => setQuiz({ ...quiz, multipleAttempts: Boolean(e.target.value) })} /> 
                    </Col>
                    {quiz.multipleAttempts &&
                     <FormLabel htmlFor="wd-num-of-attempts" column sm={2} className="pt-0"> Number of Attempts </FormLabel>}
                    {quiz.multipleAttempts && 
                     <Col sm={1}>
                         <FormControl id="wd-num-of-attempts" type="number" defaultValue={quiz.numOfAttempts} 
                                      onChange={(e) => {setQuiz({...quiz, numOfAttempts: parseInt(e.target.value)});}} /> 
                     </Col>}
                  </Row>
              </Col> 

              <Row className="mb-2">
                <FormLabel htmlFor="wd-access-code" column sm={{span: 2, offset: 2}}> Access Code </FormLabel>
                <Col > 
                    <FormControl id="wd-access-code" defaultValue={quiz.accessCode} className="w-25"
                                 onChange={(e) => {setQuiz({...quiz, accessCode: e.target.value});}} /> 
                </Col>
              </Row>
              <Row className="mb-2">
                  <Col sm={{span: 10, offset: 2}}> 
                      <input type="checkbox" id="wd-one-qs-at-a-time" 
                             defaultChecked={quiz.oneQuestionAtATime}
                             onChange={(e) => setQuiz({ ...quiz, oneQuestionAtATime: Boolean(e.target.value) })}/>
                      <label htmlFor="wd-one-qs-at-a-time">&nbsp;One Question at a Time</label>  
                  </Col>
              </Row>
              <Row className="mb-2">
                  <Col sm={{span: 10, offset: 2}}> 
                      <input type="checkbox" id="wd-webcam-required" 
                             defaultChecked={quiz.webcamRequired}
                             onChange={(e) => setQuiz({ ...quiz, webcamRequired: Boolean(e.target.value) })}/>
                      <label htmlFor="wd-webcam-required">&nbsp;Webcam Required</label> 
                  </Col>
              </Row>
              <Row className="mb-2">
                  <Col sm={{span: 10, offset: 2}}> 
                      <input type="checkbox" id="wd-lock-qs-afte-answering" 
                             defaultChecked={quiz.lockQuestionAfterAnswering}
                             onChange={(e) => setQuiz({ ...quiz, lockQuestionAfterAnswering: Boolean(e.target.value) })}/>
                      <label htmlFor="wd-lock-qs-afte-answering">&nbsp;Lock Question After Answering</label> 
                  </Col>
              </Row>
              <Row className="mb-2">
                 <FormLabel htmlFor="wd-show-correct-answers" column sm={{span: 2, offset: 2}}> Show Correct Answers at </FormLabel>
                 <Col sm={8}> <FormControl id="wd-show-correct-answers" type="date" defaultValue={quiz.showCorrectAnswers?.substring(0, 10)} className="w-25"
                                            onChange={(e) => {setQuiz({...quiz, showCorrectAnswers: e.target.value});}} /> 
                 </Col>
              </Row>
               <Row className="mb-2">
                 <FormLabel htmlFor="wd-due" className="ps-5" column sm={{span: 1, offset: 1}}> Due </FormLabel>
                 <Col sm={10}> <FormControl id="wd-due" type="date" defaultValue={quiz.due?.substring(0, 10)} className="w-25"
                                            onChange={(e) => {setQuiz({...quiz, due: e.target.value});}} /> 
                 </Col>
              </Row>
               <Row className="mb-2">
                   <FormLabel htmlFor="wd-available-from" column sm={{span:1, offset: 1}}>Available</FormLabel>
                   <Col sm={10}><FormControl id="wd-available-from" type="date" defaultValue={quiz.availableDate?.substring(0, 10)} className="w-25"
                                             onChange={(e) => {setQuiz({...quiz, availableDate: e.target.value});}} />
                                  
                   </Col>
               </Row>   
               <Row className="mb-2">
                   <FormLabel htmlFor="wd-available-until" className="ps-5" column sm={{span:1, offset: 1}}>Until</FormLabel>
                   <Col xs={10}><FormControl id="wd-available-until" type="date" defaultValue={quiz.availableUntilDate?.substring(0, 10)} className="w-25"
                                             onChange={(e) => {setQuiz({...quiz, availableUntilDate: e.target.value});}} />               
                   </Col>
               </Row>
               <Row><hr /></Row>

                
          <Button variant="danger" size="sm" className="me-1 float-end" id="wd-save-btn"
                  onClick={() => {onUpdateQuiz(quiz);}}>
                 <Link href={`/Courses/${cid}/Quizzes/${qid}`} className='text-decoration-none text-white'>Save</Link> 
          </Button> 

          <Button variant="success" size="sm" className="me-1 float-end" id="wd-save-and-publish-btn"
                  onClick={() => { let newVar = quiz;
                                   newVar = {...newVar, status: "PUBLISHED"}    
                                   onUpdateQuiz(newVar);}}>
                 <Link href={`/Courses/${cid}/Quizzes`} className='text-decoration-none text-white'>Save and Publish</Link> 
          </Button> 

          <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-cancel-btn">
                 <Link href={`/Courses/${cid}/Quizzes`} className='text-decoration-none text-black'>Cancel</Link> 
          </Button>
                   
        </Form>

      </div>  
);}