import React from 'react';
import { Tutor } from '../utils/data';

interface TutorsProps {
  tutors: Tutor[];
}

const Tutors: React.FC<TutorsProps> = ({ tutors }) => {
  return (
    <section id="tutors">
      <h2>Notable Alumni</h2>
      <div className="tutors-carousel">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="tutor-item">
            <img src={tutor.image} alt={tutor.name} />
            <h3>{tutor.name}</h3>
            <p>{tutor.bio}</p>
            <p className="education">{tutor.education}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutors;
