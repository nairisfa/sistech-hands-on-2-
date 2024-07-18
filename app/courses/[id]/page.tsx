"use client";

import { Course, getCourseData } from "@/app/utils/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Page() {
  const id = usePathname().split('/')[2];
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    async function getData() {
      const courses = await getCourseData();
      const cs = courses.find((c) => c.id === +id);
      setCourse(cs);
    }

    getData();
  }, [id]);

  return (
    <>
      <Navbar />
      <main className="course-page">
        {course ? (
          <>
            <h1 className="course-title">{course.course}</h1>
            <h3 className="course-description">{course.description}</h3>
            <h2 className="course-section-title">Lecturers</h2>
            <div className="mb-6">
              <ul className="course-list">
                {course.lecturers.map((lecturer, index) => (
                  <li key={index} className="course-list-item">{lecturer}</li>
                ))}
              </ul>
            </div>
            <h3 className="course-section-title">Total Topics Covered: {course.totalTopics}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.topics.map((topic, index) => (
                <div key={index} className="course-card">
                  <h4 className="course-card-title">{topic.name}</h4>
                  <p className="course-card-description">{course.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="loading-text">Loading...</div>
        )}
      </main>
      <Footer />
    </>
  );
}
