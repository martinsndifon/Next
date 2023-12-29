import Link from 'next/link';
import postgres from 'postgres';
import { Suspense } from 'react';

const sql = postgres(process.env.DATABASE_URL!);

type QuizType = {
  id: number;
  title: string;
};

async function Quizzes() {
  const quizzes: QuizType[] = await sql`SELECT * FROM quizzes`;

  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.id}>
          <Link href={`/quiz/${quiz.id}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Quizzes />
      </Suspense>
    </section>
  );
}
