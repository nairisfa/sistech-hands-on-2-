"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LanguagePage: React.FC = () => {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  const capitalize = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-darkred text-white">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-4">
          {language ? capitalize(language) : 'Language'} Course
        </h1>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Beginner</h2>
          <p className="text-lg">Content for beginner {language} course.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Intermediate</h2>
          <p className="text-lg">Content for intermediate {language} course.</p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Advanced</h2>
          <p className="text-lg">Content for advanced {language} course.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LanguagePage;
