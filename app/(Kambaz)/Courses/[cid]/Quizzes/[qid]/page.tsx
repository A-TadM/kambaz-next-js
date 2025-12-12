"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../client";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPencil } from "react-icons/fa6"; 
import { redirect } from "next/dist/client/components/navigation";


export default function QuizDetails() {
    const { cid, qid }  = useParams();
    const [quiz, setQuiz] = useState<any>({});

    const getMonthAndDay = (date: string) => {
      const month = date?.substring(5, 7)
      const day = date?.substring(8, 10)

      let monthString;
      switch (month) {
        case '01':
          monthString = 'Jan';
          break;
        case '02':
          monthString = 'Feb';
          break;
        case '03':
          monthString = 'Mar';
          break;
        case '04':
          monthString = 'Apr';
          break;
        case '05':
          monthString = 'May';
          break;
        case '06':
          monthString = 'Jun';
          break;
        case '07':
          monthString = 'Jul';
          break;
        case '08':
          monthString = 'Aug';
          break;
        case '09':
          monthString = 'Sep';
          break;
        case '10':
          monthString = 'Oct';
          break;
        case '11':
          monthString = 'Nov';
          break;    
        case '12':
          monthString = 'Dec';
          break; 
        default:   
          monthString = 'No month';
          break;               
      }

      return monthString + " " + day;
    }

    const fetchQuiz = async () => {
      let quizId = qid as string;
      if ((qid as string).includes("%")) {
        quizId = (qid as string).substring(0, (qid as string).length - 3);} 
        
      const quiz = await client.findQuizById(quizId);  
      setQuiz(quiz);
    };
    useEffect(() => {fetchQuiz();}, [quiz]);


    return(
      <div id="wd-quiz-details">
        <Form>
            <Row>
              <FormLabel className="fs-3" id="wd-quiz-title" column sm={9}><b>{quiz?.title}</b></FormLabel>
              <Col> <Button id="wd-quiz-preview-btn" variant="secondary" size="lg" 
                            className="float-end"
                            onClick={() => {redirect(`/Courses/${cid}/Quizzes/${qid}/QuizPreview`);}}>Preview</Button></Col>

              <Col> <Button id="wd-quiz-edit-btn" variant="secondary" size="lg" 
                            className="float-end"
                            onClick={() => {redirect(`/Courses/${cid}/Quizzes/${qid}/QuizEditor`);}}>
                            Edit
                            <FaPencil className="position-relative ms-1" style={{ bottom: "1px" }} />
                    </Button></Col> 
            </Row><br /><br />

            <Row>
              <FormLabel id="wd-quiz-type-label" column sm={3}><b>Quiz Type</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-quiz-type-value">{quiz?.quizType}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-points-label" column sm={3}><b>Points</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-points-value">{quiz?.points as string}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-assignment-group-label" column sm={3}><b>Assignment Group</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-assignment-group-value">{quiz?.assignmentGroup}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-shuffle-answers-label" column sm={3}><b>Shuffle Answers</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-shuffle-answers-value">{quiz?.shuffleAnswers ? "Yes" : "No"}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-time-limit-label" column sm={3}><b>Time Limit</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-time-limit-value">{`${quiz?.timeLimit as string} Minutes`}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-multiple-attempts-label" column sm={3}><b>Multiple Attempts</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-multiple-attempts-value">{quiz?.multipleAttempts ? "Yes" : "No"}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-how-many-attempts-label" column sm={3}><b>How Many Attempts</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-how-many-attempts-value">{quiz?.numOfAttempts as string}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-show-correct-answers-label" column sm={3}><b>Show Correct Answers</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-show-correct-answers-value">{getMonthAndDay(quiz?.showCorrectAnswers)}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-access-code-label" column sm={3}><b>Access Code</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-access-code-value">{quiz?.accessCode}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-one-question-at-a-tie-label" column sm={3}><b>One Question at a Time</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-one-question-at-a-tie-value">{quiz?.oneQuestionAtATime ? "Yes" : "No"}</FormLabel></Col>
            </Row>
            <Row>
              <FormLabel id="wd-webcam-required-label" column sm={3}><b>Webcam Required</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-webcam-required-value">{quiz?.webcamRequired ? "Yes" : "No"}</FormLabel></Col>
            </Row>
             <Row>
              <FormLabel id="wd-lock-question-after-answering-label" column sm={3} ><b>Lock Question After Answering</b></FormLabel>
              <Col sm={9}> <FormLabel id="wd-lock-question-after-answering-value">{quiz?.lockQuestionAfterAnswering ? "Yes" : "No"}</FormLabel></Col>
            </Row><br />
            
            <Table>
              <thead>
                <tr><th>Due</th><th>Available from</th><th>Until</th></tr>
              </thead>
              <tbody>
                <tr><td>{getMonthAndDay(quiz?.due)}</td><td>{getMonthAndDay(quiz?.availableDate)}</td><td>{getMonthAndDay(quiz?.availableUntilDate)}</td></tr>
              </tbody>
            </Table>
        </Form>
      </div>
);}