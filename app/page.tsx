// app/page.tsx

"use client"; // This line is necessary to mark the file as a Client Component

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Course, PaymentPlan, Tutor, getCourseData, getPaymentPlans, getTutorsData } from "./utils/data";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Tutors from "./components/Tutors";
import PaymentPlans from "./components/PaymentPlans";
import Footer from "./components/Footer";
import "./styles/globals.css";

const CustomPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([]);
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await getCourseData();
      const paymentPlanData = await getPaymentPlans();
      const tutorData = await getTutorsData();

      setCourses(courseData);
      setPaymentPlans(paymentPlanData);
      setTutors(tutorData);
    };

    fetchData();
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
              Pick your course and embark on a rewarding journey with us, study
              alongside experts to gain invaluable knowledge and skills
            </h1>
            <span className="max-w-2xl text-xl font-medium text-[#EBCDD2]">
              Experienced proficient teachers in their respective languages worth
              every penny paid!
            </span>
            <button 
              className="get-started-button bg-[#8B0000] rounded-lg text-white font-medium shadow-lg transition-all duration-200 hover:shadow-none transform hover:translate-y-1 cursor-pointer z-10 px-6 py-3"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <img
            src="/assets/flexy-young-man-studying-online.png"
            alt=""
            className="absolute top-1/4 right-0 h-4/5 z-0"
          />
        </section>

        <Carousel courses={courses} />

        <PaymentPlans paymentPlans={paymentPlans} />

        <Tutors tutors={tutors} />
      </main>

      <Footer />
    </div>
  );
};

export default CustomPage;
