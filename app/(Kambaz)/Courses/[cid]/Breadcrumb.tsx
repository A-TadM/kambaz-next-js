"use client";


import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";


export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
 const { aid, qid }  = useParams(); 
 const pathname = usePathname();
 let pop = pathname.split("/").pop(); 

 if (aid) {pop = `Assignments > ${aid as string}`};
 if (qid) {pop = `Quizzes > ${qid as string}`};

 return (
   <span>
     {course?.name} &gt; {pop === 'Table' ? 'People' : pop}
   </span>
 );
}




