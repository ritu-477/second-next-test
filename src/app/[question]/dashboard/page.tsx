
"use client";
import { useParams } from "next/navigation";
import QuestionOne from "@/components/QuestionOne"
import QuestionTwo from "@/components/QuestionTwo";
import React, { Suspense } from 'react'



const page = () => {
  const params = useParams();
  const { question } = params;
  return (
  
     <Suspense>
     {question === "question-1" && <QuestionOne />}
     {question === "question-2" && <QuestionTwo />}        </Suspense>
     
 
  );
};

export default page;
