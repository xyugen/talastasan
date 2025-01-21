import storyWithImages from "@/data/story-with-images";
import PageTitle from "../_components/page-title";
import AnimatedStoryViewer from "./_components/animated-story-viewer";

const Page = () => {
  return (
    <section className="bg-surface-100">
      <PageTitle title="Kuwentong May Larawan" />
      <div className="container mx-auto w-fit p-2 md:py-12">
        <div className="mx-auto flex w-full lg:w-[60%] flex-col items-center space-y-4">
          <AnimatedStoryViewer slides={storyWithImages} />
        </div>
      </div>
    </section>
  );
};

export default Page;
