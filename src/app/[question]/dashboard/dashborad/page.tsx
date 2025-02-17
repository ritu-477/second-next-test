
"use client";
import Todo from "@/components/about/Todo";
import { useParams } from "next/navigation";
import React from "react";
import Hero from "@/components/home/Hero";

const page = () => {
  const params = useParams();
  const { question } = params;
  return (
    <>
      {question === "question-1" && <Hero />}
      {question === "question-2" && <Todo />}
    </>
  );
};

export default page;
