import storiesContents from "@/data/stories-contents";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ pahina: string }> }) => {
  const { pahina } = await params;

  const storyChapter = storiesContents.find(
    (chapter) => chapter.link === `/${pahina}`
  );

  if (!storyChapter) {
    redirect("/page-404");
  }

  return (
    <div>
      <h1>{storyChapter.title}</h1>
      <div>{storyChapter.content}</div>
    </div>
  );
};

export default Page;
