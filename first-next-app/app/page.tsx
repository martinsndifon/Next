import Link from 'next/link';
import sql from './database';
import { Suspense } from 'react';

type QuizType = {
  id: number;
  title: string;
};

async function Quizzes() {
  const quizzes: QuizType[] = await sql`SELECT * FROM quizzes`;

  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.id} className='underline'>
          <Link href={`/quiz/${quiz.id}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section>
      <h1 className='text-2xl font-semibold'>All Quizzes</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Quizzes />
      </Suspense>
    </section>
  );
}
