"use client"


import { redirect } from "next/navigation";
import { useParams } from "next/navigation";


export default function QuizEditorPage() {
 const { cid, qid }  = useParams();   
 
 redirect(`/Courses/${cid}/Quizzes/${qid}/QuizEditor/Details`);
}