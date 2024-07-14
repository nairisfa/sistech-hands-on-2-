import React from 'react';
import { Course } from '../utils/data';

interface CarouselProps {
  courses: Course[];
}

const Carousel: React.FC<CarouselProps> = ({ courses }) => {
  return (
    <section id="carousel">
      <h2>Courses We Offer</h2>
      <div className="carousel-container">
        {courses.map((course) => (
          <div key={course.id} className="carousel-item">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
