import BlurFade from "@/components/ui/blur-fade";
import contactDetails from "@/data/contact-details";
import siteName from "@/data/site-name";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <section
      id="makipag-ugnayan"
      className="flex justify-center items-center py-20 overflow-clip"
    >
      <div className="relative px-4">
        <BlurFade className="mx-auto space-y-2" delay={0.3} inView>
          <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 text-secondary/80">
            Impormasyon para Makipag-ugnay
          </h1>
          <p className="text-center text-foreground/80">
            Para sa mga tanong at ibang detalye hinggil sa {siteName}, maaaring
            makipag-ugnay sa pamamagitan ng mga sumusunod:
          </p>
        </BlurFade>

        <BlurFade
          className="w-fit md:w-[60%] mx-auto mt-6 text-lg text-foreground space-y-4 border-4 border-secondary rounded-lg p-4 md:p-6"
          delay={0.4}
          inView
        >
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="space-y-1 text-sm md:text-base break-words"
            >
              <h3 className="text-lg font-semibold text-foreground underline underline-offset-2">
                {detail.name}
              </h3>
              <p className="flex items-center gap-2">
                <Mail className="size-4" />
                <span className="font-semibold">Email:</span>
                <Link
                  href={`mailto:${detail.email}`}
                  className="text-secondary/80"
                >
                  {detail.email}
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4" />
                <span className="font-semibold">Numero:</span>{" "}
                {detail.phoneNumber instanceof Array ? (
                  detail.phoneNumber.map((number, index) => (
                    <Link
                      key={index}
                      href={`tel:${number}`}
                      className="text-secondary/80"
                    >
                      {number}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={`tel:${detail.phoneNumber}`}
                    className="text-secondary/80"
                  >
                    {detail.phoneNumber}
                  </Link>
                )}
              </p>
            </div>
          ))}
        </BlurFade>
      </div>
    </section>
  );
};

export default Page;
