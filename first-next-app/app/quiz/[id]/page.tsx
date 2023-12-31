// import sql from '../../database';
import sql from '@/app/database';

async function Quiz({ id }: { id: string }) {
  const quiz = await sql`SELECT * FROM quizzes WHERE id = ${id}`;
  return (
    <div>
      <h1>{quiz[0].title}</h1>
    </div>
  );
}

type PropsType = {
  params: { id: string };
};

export default function QuizPage({ params }: PropsType) {
  return (
    <section>
      <Quiz id={params.id} />
    </section>
  );
}
