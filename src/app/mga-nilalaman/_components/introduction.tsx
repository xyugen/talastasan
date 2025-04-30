import { cn } from "@/lib/utils";
import PageTitle from "./page-title";

const Introduction = ({ content }: { content: string }) => {
    return (
        <div className="bg-white">
            <PageTitle title="Introduksyon" isAccordion={false} />
            <p
                className={cn(
                    "text-lg mx-auto w-full md:w-3/4 hlg:w-3/5 p-4 text-justify whitespace-pre-wrap",
                    "first-letter:font-lora first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-secondary first-letter:mr-3 first-letter:float-left"
                )}
            >
                {content}
            </p>
        </div>
    );
};

export default Introduction;
