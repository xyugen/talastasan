import storyWithImages from "@/data/story-with-images";
import PageTitle from "../_components/page-title";
import AnimatedStoryViewer from "./_components/animated-story-viewer";

const Page = () => {
  return (
    <section className="bg-surface-100">
      <PageTitle title="Kuwentong May Larawan" />
      <div className="container mx-auto w-fit p-2 md:py-12">
        <div className="mx-auto w-full md:w-[875px] space-y-4">
          <AnimatedStoryViewer className="w-full" slides={storyWithImages} />
        </div>
      </div>
    </section>
  );
};

export default Page;
