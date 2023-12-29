type PropsType = {
  params: { id: string };
};

export default function QuizPage({ params }: PropsType) {
  return (
    <section>
      <h1>Quiz {params.id}</h1>
    </section>
  );
}
