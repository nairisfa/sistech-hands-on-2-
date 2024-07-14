"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Course,
  PaymentPlan,
  Tutor,
  getCourseData,
  getPaymentPlans,
  getTutorsData,
} from "./utils/data";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Tutors from "./components/Tutors";
import PaymentPlans from "./components/PaymentPlans";
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
    router.push("./pages/membership");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#8B0000] text-white">
      <Navbar />

      <main>
        <section id="hero">
          <div id="hero-content">
            <h1>
              Pick your course and embark on a rewarding journey with us, study
              alongside experts to gain invaluable knowledge and skills
            </h1>
            <span>
              Experienced proficient teachers in their respective languages worth
              every penny paid!
            </span>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started!
            </button>
          </div>
          <img
            src="/assets/flexy-young-man-studying-online.png"
            alt=""
          />
        </section>

        <Carousel courses={courses} />

        <PaymentPlans paymentPlans={paymentPlans} />

        <Tutors tutors={tutors} />
      </main>

      <footer>
        <p>&copy; 2024 T-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CustomPage;
