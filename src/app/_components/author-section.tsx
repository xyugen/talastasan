"use client";

import RogelioSikat from "@/assets/images/rogelio-sikat.jpeg";
import BlurFade from "@/components/ui/blur-fade";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PenTool } from "lucide-react";
import Image from "next/image";

const AuthorSection = () => {
    return (
        <section id="author" className="mt-4">
            <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4 space-y-4 p-4 lg:px-20">
                <div className="relative mt-4">
                    <div className="absolute rounded-full left-1/2 h-full w-1 bg-secondary" />
                    <BlurFade
                        delay={0.5}
                        inView
                        className="sticky top-1/4"
                    >
                        <Image
                            src={RogelioSikat || "/placeholder.svg"}
                            alt="Rogelio Sikat"
                            className="top-0 left-0 h-auto rounded-lg shadow-lg w-full md:w-[800px] border-4 border-secondary"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
                            placeholder="blur"
                        />
                    </BlurFade>
                </div>

                <BlurFade delay={0.5} inView className="">
                    <Card className="group relative border-4 border-secondary">
                        <PenTool className="group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform absolute -rotate-90 size-10 -right-4 -top-4 md:-right-6 md:-top-6 fill-primary stroke-secondary" />
                        <CardHeader className="font-lora space-y-4">
                            <CardTitle className="text-secondary/80">
                                Ang Awtor
                            </CardTitle>
                            <CardDescription className="flex flex-col sm:flex-row sm:items-end gap-2">
                                <h2 className="text-3xl font-semibold text-secondary/90">
                                    Rogelio R. Sikat
                                </h2>
                                <h3 className="text-xl mb-[0.1rem] font-semibold text-secondary/60">
                                    “Rogelio Sícat”
                                </h3>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-base text-secondary/80 [&>p]:text-justify">
                            <p>
                                Si{" "}
                                <span className="font-bold">Rogelio Sikat</span>{" "}
                                ay isang Pilipinong manunulat ng piksyon,
                                mandudula, tagasalin-wika, at tagapagturo. Siya
                                ay anak nina Estanislao Sikat at Crisanta
                                Rodriguez, at isinilang noong Hunyo 26, 1940, sa
                                Alua, San Isidro, Nueva Ecija, Pilipinas.
                                Panganay sa walong magkakapatid, nagtapos siya
                                ng{" "}
                                <span className="font-bold">
                                    Batsilyer ng Panitikan sa Pamamahayag
                                </span>{" "}
                                sa Pamantasan ng Santo Tomas at nagtamo rin ng
                                MA sa Filipino mula sa Unibersidad ng Pilipinas.
                            </p>
                            <p>
                                Kinilala si{" "}
                                <span className="font-bold">Rogelio Sikat</span>{" "}
                                sa kanyang mga kontribusyon sa panitikan,
                                kabilang na ang pagkapanalo ng maraming premyo.
                                Pinakatanyag niya ang dulang &ldquo;
                                <span className="font-bold">Moses, Moses</span>
                                &rdquo;, na nagkamit ng{" "}
                                <span className="font-bold">
                                    Palanca Award
                                </span>{" "}
                                noong 1962 sa Filipino. Marami rin sa kanyang
                                mga akda ay inilathala sa magasing Liwayway. Ang
                                kanyang kahalagahan bilang manunulat ay
                                binigyang-diin sa sanaysay na &ldquo;
                                <span className="font-bold">
                                    Living and Dying
                                </span>{" "}
                                as a Writer&rdquo; ni Lilia Quindoza-Santiago,
                                na lumabas sa Pen & Ink III.
                            </p>
                            <p>
                                Naging propesor si{" "}
                                <span className="font-bold">Rogelio Sikat</span>{" "}
                                at nagsilbi bilang dekano ng Kolehiyo ng Sining
                                at mga Titik sa Unibersidad ng Pilipinas-Diliman
                                mula 1991 hanggang 1994. Ang kanyang akdang
                                &ldquo;
                                <span className="font-bold">Tata Selo</span>
                                &rdquo; ay naging inspirasyon para sa pelikulang
                                &ldquo;
                                <span className="font-bold">Munting Lupa</span>
                                &rdquo; ni Angelito Tiongson, habang ang
                                direktor na si Aureaus Solito ay gumawa ng
                                maikling pelikula batay sa kanyang kuwento na
                                &ldquo;
                                <span className="font-bold">Impeng Negro</span>
                                &rdquo; noong 1999. Kahit pumanaw na noong 1998,
                                pinarangalan siya ng Manila Critics Circle ng
                                &ldquo;
                                <span className="font-bold">
                                    National Book Award
                                </span>
                                &rdquo; para sa pagsasalin-wika.
                            </p>
                        </CardContent>
                    </Card>
                </BlurFade>
            </div>
        </section>
    );
};

export default AuthorSection;
