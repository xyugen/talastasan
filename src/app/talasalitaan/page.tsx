import WordCards from "./_components/word-cards";

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 py-12">
      <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 text-secondary/80">
        Talasalitaan
      </h1>

      <WordCards />
    </div>
  );
};

export default Page;
