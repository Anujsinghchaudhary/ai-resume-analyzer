import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Get smart feedback for your dreamjob" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/path/to/your/image.jpg')] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Welcome to Resumind</h1>
        <h2>Your one-stop solution for smart resume feedback.</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resume-section">
        {resumes.map((resumes) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
    <Welcome />
  </main>;
}