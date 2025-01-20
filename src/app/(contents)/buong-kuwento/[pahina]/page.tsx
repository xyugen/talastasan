import storiesContents from "@/data/stories-contents";
import { redirect } from "next/navigation";
import ChapterReader from "../../_components/chapter-reader";
import PageTitle from "../../_components/page-title";
import NavButtons from "./_components/nav-buttons";

const Page = async ({ params }: { params: Promise<{ pahina: string }> }) => {
  const { pahina } = await params;

  const index = storiesContents.findIndex(
    (chapter) => chapter.link === `/${pahina}`
  );

  if (index === -1) {
    redirect("/page-404");
  }

  const storyChapter = storiesContents[index];
  const nextChapter = storiesContents[index + 1] || null; // Get the next chapter if it exists
  const previousChapter = storiesContents[index - 1] || null; // Get the previous chapter if it exists

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <PageTitle title="Buong Kuwento" chapter={storyChapter} />
      <div className="container mx-auto space-y-12 px-2 py-4 md:px-[10%]">
        <ChapterReader>
          {storyChapter && (
            <p className="whitespace-pre-wrap">{storyChapter.content}</p>
          )}
        </ChapterReader>
        
        <NavButtons prev={previousChapter} next={nextChapter} />
      </div>
    </section>
  );
};

export default Page;
