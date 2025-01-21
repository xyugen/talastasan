import RogelioSikat from "@/assets/images/rogelio-sikat.jpg";
import Image from "next/image";

const AuthorSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 md:px-20 lg:px-40">
        <h2 className="mb-16 text-center text-4xl font-bold text-secondary">
          Ang Awtor
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <Image
              src={RogelioSikat}
              alt="Rogelio Sikat"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6 md:col-span-3">
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-secondary/90">
                Rogelio R. Sikat
              </h3>
              <h4 className="text-xl font-semibold text-secondary/50">
                “Rogelio Sícat”
              </h4>
            </div>
            <div className="space-y-4 text-base text-secondary/80">
              <p>
                Si <span className="font-bold">Rogelio Sikat</span> ay isang
                Pilipinong manunulat ng piksyon, mandudula, tagasalin-wika, at
                tagapagturo. Siya ay anak nina Estanislao Sikat at Crisanta
                Rodriguez, at isinilang noong Hunyo 26, 1940, sa Alua, San
                Isidro, Nueva Ecija, Pilipinas. Panganay sa walong magkakapatid,
                nagtapos siya ng{" "}
                <span className="font-bold">
                  Batsilyer ng Panitikan sa Pamamahayag
                </span>{" "}
                sa Pamantasan ng Santo Tomas at nagtamo rin ng MA sa Filipino
                mula sa Unibersidad ng Pilipinas.
              </p>

              <p>
                Kinilala si <span className="font-bold">Rogelio Sikat</span> sa
                kanyang mga kontribusyon sa panitikan, kabilang na ang
                pagkapanalo ng maraming premyo. Pinakatanyag niya ang dulang
                &ldquo;
                <span className="font-bold">Moses, Moses</span>&rdquo;, na
                nagkamit ng <span className="font-bold">Palanca Award</span>{" "}
                noong 1962 sa Filipino. Marami rin sa kanyang mga akda ay
                inilathala sa magasing Liwayway. Ang kanyang kahalagahan bilang
                manunulat ay binigyang-diin sa sanaysay na &ldquo;
                <span className="font-bold">Living and Dying</span> as a
                Writer&rdquo; ni Lilia Quindoza-Santiago, na lumabas sa Pen &
                Ink III.
              </p>

              <p>
                Naging propesor si{" "}
                <span className="font-bold">Rogelio Sikat</span> at nagsilbi
                bilang dekano ng Kolehiyo ng Sining at mga Titik sa Unibersidad
                ng Pilipinas-Diliman mula 1991 hanggang 1994. Ang kanyang akdang
                &ldquo;<span className="font-bold">Tata Selo</span>&rdquo; ay
                naging inspirasyon para sa pelikulang &ldquo;
                <span className="font-bold">Munting Lupa</span>&rdquo; ni
                Angelito Tiongson, habang ang direktor na si Aureaus Solito ay
                gumawa ng maikling pelikula batay sa kanyang kuwento na &ldquo;
                <span className="font-bold">Impeng Negro</span>&rdquo; noong
                1999. Kahit pumanaw na noong 1998, pinarangalan siya ng Manila
                Critics Circle ng &ldquo;
                <span className="font-bold">National Book Award</span>&rdquo;
                para sa pagsasalin-wika.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
