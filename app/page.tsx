"use client"; 

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Course, Tutor, getCourseData, getTutorsData } from "./utils/data";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Tutors from "./components/Tutors";
import Footer from "./components/Footer";
import "./styles/globals.css";

const CustomPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await getCourseData();
      const tutorData = await getTutorsData();

      setCourses(courseData);
      setTutors(tutorData);
    };

    fetchData();
    return () => {
      router.refresh()
    }
  }, []);

  const handleGetStartedClick = () => {
    router.push("/membership");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#8B0000] text-white">
      <Navbar />

      <main>
        <section id="hero" className="relative flex flex-col justify-center items-start h-[80vh] p-16">
          <div id="hero-content" className="relative z-10 flex flex-col gap-4">
            <h1 className="max-w-3xl text-5xl font-bold text-white">
              Faculty of Computer Science, University of Indonesia
              </h1>
            <span className="max-w-2xl text-xl font-medium text-[#EBCDD2]">
              Courses made for our students at the Faculty of Computer Science, University of Indonesia
            </span>
          </div>
          <img
            src="/assets/flexy-young-man-studying-online.png"
            alt=""
            className="absolute top-1/4 right-0 h-4/5 z-0"
          />
        </section>

        <Carousel courses={courses} />

        <Tutors tutors={tutors} />
      </main>

      <Footer />
    </div>
  );
};

export default CustomPage;
