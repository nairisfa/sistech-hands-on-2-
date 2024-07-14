// app/components/Carousel.tsx
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '../utils/data';

interface CarouselProps {
  courses: Course[];
}

const Carousel: React.FC<CarouselProps> = ({ courses }) => {
  const router = useRouter();

  const handleFlagClick = (language: string) => {
    router.push(`/language/${language.toLowerCase()}`);
  };

  return (
    <section id="carousel" className="relative p-8 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Courses</h2>
      <div className="carousel-container flex overflow-x-auto space-x-4 py-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="carousel-item flex-shrink-0 w-1/5 bg-transparent p-4 rounded-lg text-center text-white cursor-pointer"
            onClick={() => handleFlagClick(course.title)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-lg transition-transform duration-500 transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
            <p className="text-lg">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
