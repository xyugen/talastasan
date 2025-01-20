import StoryCard from "@/components/cards/story-card";
import stories from "@/data/stories";

const ImpengNegroSection = () => {
  return (
    <section className="bg-background py-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-foreground">
          Impeng Negro
        </h2>
      </div>
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map(({ title, description, image, link }) => (
          <StoryCard
            key={title}
            title={title}
            description={description}
            image={image}
            href={link}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpengNegroSection;
