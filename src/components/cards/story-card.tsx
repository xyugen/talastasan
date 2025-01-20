import Image, { StaticImageData } from "next/image";

interface StoryCardProps {
  title: string;
  description: string;
  image: StaticImageData | string; // Use string for image src unless using a specific type for assets
  href: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-lg border border-primary/30 bg-white transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill" // Adjusts the image to fill its parent container
          objectFit="cover" // Ensures the image is cropped correctly
          className="transition-transform group-hover:scale-100"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-[#2D2522]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default StoryCard;
