import React from "react";
import PageTitle from "../_components/page-title";
import EmblaCarousel from "@/components/carousel/embla-carousel";
import storyWithImages from "@/data/story-with-images";

const Page = () => {
  const image = storyWithImages.length > 0 ? storyWithImages[0] : null;

  return (
    <section className="bg-surface-100">
      <PageTitle title="Kuwentong May Larawan" />
      <div className="container mx-auto w-fit p-2 md:py-12">
        <div className="mx-auto flex w-full lg:w-[60%] flex-col items-center space-y-4">
          {/* <EmblaCarousel
				images={storyWithImages}
        onChangeAction={(index) => {}}
				divClass="rounded-lg shadow-lg"
				imgClass="rounded-lg"
			/>

			{#if image}
				<div className="whitespace-pre-wrap">
					{image.content}
				</div>
			{/if} */}
        </div>
      </div>
    </section>
  );
};

export default Page;
