import BlurFade from "../ui/blur-fade";

interface PublishedWorkCardProps {
    card: { url: string; title: string; id: number };
    index: number;
    onClick?: (index: number) => void;
}

const PublishedWorkCard = ({
    card,
    index: i,
    onClick,
}: PublishedWorkCardProps) => {
    return (
        <button
            key={card.id}
            className="group flex justify-center items-center cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={() => onClick && onClick(i)}
        >
            <BlurFade
                className="relative h-[400px] w-[250px] md:h-[425px] md:w-[275px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg group-hover:shadow-xl border-4 border-secondary p-2 group-hover:border-primary transition-[shadow_colors] duration-150 ease-in-out"
                delay={0.3 * i}
                inView
            >
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300"
                ></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center items-center">
                    <p className="text-xl md:text-2xl bg-secondary/80 group-hover:bg-primary/80 transition-colors duration-150 ease-in-out p-2 mx-2 w-fit text-center text-secondary-foreground rounded">
                        {card.title}
                    </p>
                </div>
            </BlurFade>
        </button>
    );
};

export default PublishedWorkCard;
