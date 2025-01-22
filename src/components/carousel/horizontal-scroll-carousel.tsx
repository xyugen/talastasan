import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import BlurFade from "../ui/blur-fade";

export interface CarouselCard {
  url: string;
  title: string;
  id: number;
}

const HorizontalScrollCarousel = ({ cards }: { cards: CarouselCard[] }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary/10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, i) => {
            return <CarouselCard card={card} index={i} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const CarouselCard = ({
  card,
  index = 0,
}: {
  card: CarouselCard;
  index?: number;
}) => {
  return (
    <BlurFade
      key={card.id}
      className="relative h-[400px] w-[250px] md:h-[425px] md:w-[275px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg border-4 border-secondary p-2"
      delay={0.3 * index}
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
        <p className="bg-gradient-to-br bg-secondary/80 p-2 w-fit text-center text-secondary-foreground rounded">
          {card.title}
        </p>
      </div>
    </BlurFade>
  );
};

export default HorizontalScrollCarousel;
