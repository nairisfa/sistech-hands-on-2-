export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type PaymentPlan = {
  id: number;
  name: string;
  price: string;
  features: string[];
};

export type Tutor = {
  id: number;
  name: string;
  bio: string;
  education: string;
  image: string;
};

export async function getCourseData(): Promise<Course[]> {
  return [
    { id: 1, title: 'Korean', description: '한국어 학습 여정을 시작하세요', image: '/assets/flag-courses/korean-flag.jpg' },
    { id: 2, title: 'Portuguese', description: 'Comece sua jornada aprendendo português', image: '/assets/flag-courses/portuguese-flag.jpg' },
    { id: 3, title: 'English', description: 'Begin your journey in learning English', image: '/assets/flag-courses/english-flag.jpg' },
    { id: 4, title: 'Japanese', description: '日本語学習の旅を始めましょう', image: '/assets/flag-courses/japanese-flag.jpg' },
    { id: 5, title: 'Chinese', description: '开始你的汉语学习之旅', image: '/assets/flag-courses/chinese-flag.jpg' },
    { id: 6, title: 'French', description: 'Commencez votre voyage en apprenant le français', image: '/assets/flag-courses/french-flag.jpg' },
    { id: 7, title: 'Italian', description: "Inizia il tuo viaggio nell'apprendimento dell'italiano", image: '/assets/flag-courses/italian-flag.jpg' },
    { id: 8, title: 'Indonesian', description: 'Mulailah perjalanan Anda dalam mempelajari Indonesia', image: '/assets/flag-courses/indonesian-flag.jpg' },
  ];
}

export async function getPaymentPlans(): Promise<PaymentPlan[]> {
  return [
    { id: 1, name: 'Bronze', price: 'Rp 35,000/month', features: ['Basic fundamental courses'] },
    { id: 2, name: 'Silver', price: 'Rp 70,000/month', features: ['Unlock all courses available'] },
    { id: 3, name: 'Gold', price: 'Rp 100,000/month', features: ['Unlock all courses available and personal chat with tutors benefit'] },
    { id: 4, name: 'Platinum', price: 'Rp 250,000/month', features: ['Unlock all courses available, personal chat with tutors, and 4x offline meetings benefit'] },
    { id: 5, name: 'Diamond', price: 'Rp 400,000/month', features: ['Unlock all courses available, personal chat with tutors, and 8x offline meetings benefit'] },
  ];
}

export async function getTutorsData(): Promise<Tutor[]> {
  return [
    { id: 1, name: 'Kak Gem', bio: 'PAHAM?!', education: 'PhD in Linguistics', image: '/assets/tutors/tutor-kakgem.jpg' },
    { id: 2, name: 'Jihun Jeong', bio: 'Specialises in Korean with a focus on conversational fluency.', education: 'MA in Korean Language Education', image: '/assets/tutors/tutor-chovy.jpg' },
    { id: 3, name: 'Sanghyeok Lee', bio: 'English professor with 12 years of experience in teaching at international programs.', education: 'PhD in English Literature', image: '/assets/tutors/tutor-faker.jpg' },
  ];
}
