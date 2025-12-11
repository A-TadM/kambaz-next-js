"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { RootState } from "../../../../../../../store";
import * as client from "../../../../client";
import { useParams } from "next/navigation";
import { Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";


export default function QuestionEditor() {
    const { cid, qid, pid }  = useParams();
    
    let newValue = {} as any;
    
    const [newQuestion, setNewQuestion] = useState(newValue);
    const [newFlag, setNewFlag] = useState(false);
    const [quiz, setQuiz] = useState<any>({});
    const [previousQuestionPoints, setPreviousQuestionPoints] = useState(0);
    
    const [answers, setAnswers] = useState<any>([]);

    const fetchQuizAndQuestion = async () => {
      const quiz = await client.findQuizById(qid as string);
      setQuiz(quiz);

      const question = await client.findQuestionById(qid as string, pid as string);
    
      if (!(question)) { 
        setNewFlag(true);
        newValue = { title: "New Question", description: "", type: "MULTIPLE", 
                     points: 0, answers: "", correctAnswer:""};
      } else {
        newValue = question;
        setPreviousQuestionPoints(question.points);
      } 

      if (newValue.type === "MULTIPLE" && newValue.answers !== "" ) {
        setAnswers(newValue.answers.split("/"));
      }

      if (newValue.type === "FILLINBLANK" && newValue.correctAnswer !== "" ) {
        setAnswers(newValue.correctAnswer.split("/"));
      }
    
       setNewQuestion(newValue);
       
     };
     useEffect(() => {fetchQuizAndQuestion();}, []);

    const onCreateQuestionForQuiz = async (newQuestion: any) => {
      if (newQuestion.type === "FILLINBLANK" ) {
        let correctAnswer = "";
        for (let i = 0; i < (answers.length - 1); i++) {
           correctAnswer = correctAnswer + answers[i] + "/";
        }
        correctAnswer = correctAnswer + answers[(answers.length - 1)];
        newQuestion = {...newQuestion, correctAnswer: correctAnswer}  
      }

      if (newQuestion.type === "MULTIPLE" ) {
        let responses = "";
        for (let i = 0; i < (answers.length - 1); i++) {
           responses = responses + answers[i] + "/";
        }
        responses = responses + answers[(answers.length - 1)];
        newQuestion = {...newQuestion, answers: responses}  
      }
      
      const points = quiz.points;
      const numOfQs = quiz.numOfQs;

      const updatedQuiz = {...quiz, points: points + newQuestion.points, 
                                    numOfQs: numOfQs + 1}; 

      await client.updateQuiz(updatedQuiz);
      //const newQuizzes = quizzes.map((q: any) => q._id === quiz._id ? quiz : q );
      //dispatch(setQuizzes(newQuizzes));                  

      const returnedNewQuestion = await client.createQuestionForQuiz(qid as string, newQuestion);
      //dispatch(setQuestions([...questions, returnedNewQuestion]));
    };

    const onUpdateQuestion = async (question: any) => {
      if (question.type === "FILLINBLANK" ) {
        let correctAnswer = "";
        for (let i = 0; i < (answers.length - 1); i++) {
           correctAnswer = correctAnswer + answers[i] + "/";
        }
        correctAnswer = correctAnswer + answers[(answers.length - 1)];
        question = {...question, correctAnswer: correctAnswer}  
      }

      if (question.type === "MULTIPLE" ) {
        let responses = "";
        for (let i = 0; i < (answers.length - 1); i++) {
           responses = responses + answers[i] + "/";
        }
        responses = responses + answers[(answers.length - 1)];
        question = {...question, answers: responses}  
      }
      
      const points = quiz.points;
      const updatedQuiz = {...quiz, points: (points - previousQuestionPoints) + question.points}; 
    
      await client.updateQuiz(updatedQuiz);
      await client.updateQuestion(qid as string, question);
    };


    return (
      <div id="wd-question-editor">
        <Form>
            <br />
            <Row>
            { newFlag && //create time 
            <Col sm={2}><select value={newQuestion.type} className="form-select" id="wd-type" 
                                onChange={(e) => {setNewQuestion({ ...newQuestion, type: e.target.value })}} >
                            <option value="MULTIPLE">MULTIPLE</option>
                            <option value="T/F">T/F</option>
                            <option value="FILLINBLANK">FILLINBLANK</option>
                        </select></Col>} 

            { !newFlag && <Col sm={2}></Col> }          

            <FormLabel htmlFor="wd-points" className="pt-1 ps-5" column sm={{span: 1, offset: 8}}> points/Q: </FormLabel>
            <Col sm={1}>
                <FormControl id="wd-points" defaultValue={newQuestion.points} type="number"
                             onChange={(e) => {setNewQuestion({...newQuestion, points: parseInt(e.target.value)});}} />
             </Col>                
            
            </Row><hr />

            {(newQuestion.type === "MULTIPLE") && 
             <div id="wd-multiple-q-editor">
               <FormLabel>Enter your question and multiple answers, then select the one correct answer.</FormLabel>
               <br />
               <FormLabel><b> Question:</b></FormLabel><br />
               <FormLabel htmlFor="wd-title"> Question Name </FormLabel>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-title" defaultValue={newQuestion.title} className="w-25"
                                    onChange={(e) => {setNewQuestion({...newQuestion, title: e.target.value});}} /> 
                   </Col>
               </Row>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-description" as="textarea" rows={5} defaultValue={newQuestion.description}
                                    onChange={(e) => {setNewQuestion({...newQuestion, description: e.target.value});}} /> 
                   </Col>
               </Row>
               
               <FormLabel><b> Answers:</b></FormLabel>
               <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-answer-btn"
                       onClick={() => setAnswers([...answers, "new answer" + String(answers.length + 1)])}>

                       <FaPlus style={{ bottom: "1px" }} /> Add Answer
               </Button><br />
               { answers.map((answer: any, index: any) => ( 
                             <Row className="mb-2" key={index}>
                                 <FormLabel htmlFor="wd-possible-a" column sm={{span: 2, offset: 1}} className="ps-5"> Possible Answer </FormLabel>
                                 <Col sm={2}> <FormControl id="wd-possible-a" value={answer}
                                                           onChange={(e) => {setAnswers(answers.map((a: any) => 
                                                                                (answers.indexOf(a) === index ? e.target.value : a)))}} /> 
                                 </Col>
                                 <Col sm={1}> <FaTrash id="wd-delete-a" className="pt-2 fs-4" 
                                                       onClick={() => {setAnswers(answers.filter((a: any) => ( answers.indexOf(a) !== index)));}}/> 
                                 </Col>
                             </Row>))}
                      
              <FormLabel><b>Correct Answer:</b>&nbsp;enter the correct answer</FormLabel> 
              <FormControl id="wd-correct-a" defaultValue={newQuestion.correctAnswer} className="w-25" 
                           onChange={(e) => {setNewQuestion({...newQuestion, correctAnswer: e.target.value});}} />              

             </div>}

            {(newQuestion.type === "T/F") && 
             <div id="wd-T/F-q-editor">
               <FormLabel>Enter your question text, then select if True or False is the correct answer.</FormLabel>
               <br />
               <FormLabel><b> Question:</b></FormLabel><br />
               <FormLabel htmlFor="wd-title"> Question Name </FormLabel>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-title" defaultValue={newQuestion.title} className="w-25"
                                    onChange={(e) => {setNewQuestion({...newQuestion, title: e.target.value});}} /> 
                   </Col>
               </Row>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-description" as="textarea" rows={5} defaultValue={newQuestion.description}
                                    onChange={(e) => {setNewQuestion({...newQuestion, description: e.target.value});}} /> 
                   </Col>
               </Row>
               
               <FormLabel><b>Correct Answer:</b>&nbsp;enter the correct answer which is true or false</FormLabel> 
               <FormControl id="wd-correct-a" defaultValue={newQuestion.correctAnswer} className="w-25" 
                            onChange={(e) => {setNewQuestion({...newQuestion, correctAnswer: e.target.value.toLowerCase()});}} /> 
             </div>}

            {(newQuestion.type === "FILLINBLANK") && 
             <div id="wd-fill-in-blank-q-editor">
               <FormLabel>Enter your question text, then define all possible correct answers for the blank.</FormLabel><br />
               <FormLabel>Students will see the question followed by a small text box to type their answer.</FormLabel>
               <br />
               <FormLabel><b> Question:</b></FormLabel><br />
               <FormLabel htmlFor="wd-title"> Question Name </FormLabel>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-title" defaultValue={newQuestion.title} className="w-25"
                                    onChange={(e) => {setNewQuestion({...newQuestion, title: e.target.value});}} /> 
                   </Col>
               </Row>
               <Row className="mb-2">
                   <Col > 
                       <FormControl id="wd-description" as="textarea" rows={5} defaultValue={newQuestion.description}
                                    onChange={(e) => {setNewQuestion({...newQuestion, description: e.target.value});}} /> 
                   </Col>
               </Row>
               
               <FormLabel><b> Answers:</b></FormLabel>
               <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-answer-btn"
                       onClick={() => setAnswers([...answers, "new answer" + String(answers.length + 1)])}>

                       <FaPlus style={{ bottom: "1px" }} /> Add Answer
               </Button><br />
               { answers.map((answer: any, index: any) => ( 
                             <Row className="mb-2" key={index}>
                                 <FormLabel htmlFor="wd-possible-a" column sm={{span: 2, offset: 1}} className="ps-5"> Possible Answer </FormLabel>
                                 <Col sm={2}> <FormControl id="wd-possible-a" value={answer}
                                                           onChange={(e) => {setAnswers(answers.map((a: any) => 
                                                                                (answers.indexOf(a) === index ? e.target.value : a)))}} /> 
                                 </Col>
                                 <Col sm={1}> <FaTrash id="wd-delete-a" className="pt-2 fs-4" 
                                                       onClick={() => {setAnswers(answers.filter((a: any) => ( answers.indexOf(a) !== index)));}}/> 
                                 </Col>
                             </Row>))}
             </div>} 
             <br />
             <Row><hr /></Row>

             <Button variant="danger" size="sm" className="me-1 float-end" id="wd-save-btn"
                     onClick={() => {if (newFlag) {
                                       onCreateQuestionForQuiz(newQuestion);
                                     } else {
                                       onUpdateQuestion(newQuestion);}}}>
                     <Link href={`/Courses/${cid}/Quizzes/${qid}/QuizEditor/Questions`} className='text-decoration-none text-white'>Save</Link> 
             </Button> 

             <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-cancel-btn">
                     <Link href={`/Courses/${cid}/Quizzes/${qid}/QuizEditor/Questions`} className='text-decoration-none text-black'>Cancel</Link> 
             </Button>
             
        </Form>

      </div>  
);}   