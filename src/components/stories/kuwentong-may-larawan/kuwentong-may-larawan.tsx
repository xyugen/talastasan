import { StoryWithImage } from "@/data/story-with-images";
import AnimatedStoryViewer from "./_components/animated-story-viewer";

const KuwentongMayLarawan = ({
  storyWithImages,
}: {
  storyWithImages: StoryWithImage[];
}) => {
  return (
    <div className="container mx-auto w-fit p-2 md:py-12">
      <div className="mx-auto w-full md:w-[875px] space-y-4">
        <AnimatedStoryViewer className="w-full" slides={storyWithImages} />
      </div>
    </div>
  );
};

export default KuwentongMayLarawan;
