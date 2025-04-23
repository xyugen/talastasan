import { DotPattern } from "@/components/patterns/dot-pattern";
import BlurFade from "@/components/ui/blur-fade";
import siteName from "@/data/site-name";
import { cn } from "@/lib/utils";

const Page = () => {
    return (
        <div className="relative pt-32 px-2 max-w-4xl mx-auto">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                    "fill-primary"
                )}
            />
            <BlurFade delay={0.3} inView>
                <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 text-secondary/80">
                    Tungkol sa
                </h1>
            </BlurFade>

            <BlurFade
                delay={0.4}
                inView
                className="text-justify text-lg text-foreground space-y-3 pb-12"
            >
                <p className="leading-relaxed indent-8">
                    Ang <span className="font-semibold">{siteName}</span> ay
                    isang mungkahing website na binuo bilang tugon sa lumalalang
                    hamon ng mababang kasanayan sa pagbasa at limitadong
                    bokabularyo ng mga mag-aaral sa Filipino. Layunin nitong
                    magsilbing makabago at makabuluhang kagamitang pampagtuturo
                    at pagkatuto para sa mga guro at mag-aaral. Nilalaman ng
                    mungkahing website na TalasTasan.com ang mga piling maikling
                    kuwentong “Impeng Negro,” “Tata Selo,” “Sa Lupa ng Sariling
                    Bayan,” at “Quentin”—mga akda ni Rogelio Sikat na may
                    malalim na temang panlipunan at mayaman sa wikang Filipino.
                </p>
                <p className="leading-relaxed indent-8">
                    Sa pamamagitan ng mungkahing website na TalasTasan.com,
                    mahihikayat ang mga mag-aaral na makisangkot sa mas
                    masining, interaktibo, at makabagong paraan ng pagbasa.
                    Kasama sa mga tampok ng mungkahing website na TalasTasan.com
                    ang mga interactive features na Buod, Buong Kuwento, at
                    Kuwentong May Larawan, na dinisenyong tumugon sa iba&apos;t
                    ibang estilo ng pagkatuto at literasi ng mga mag-aaral.
                </p>
                <p className="leading-relaxed">
                    Ang Batayang Teoretikal ng mungkahing website na
                    TalasTasan.com ay ang sumusunod:
                </p>
                <p className="leading-relaxed indent-8">
                    Ang pagbuo at pagdidisenyo ng TalasTasan.com ay nakaugat sa
                    dalawang pangunahing teoretikal na balangkas—ang
                    Multiliteracies Theory nina Luke at Freebody (1999) at ang
                    ADDIE Model nina Branson et al. (1975).
                </p>
                <p className="leading-relaxed indent-8">
                    Ang Multiliteracies Theory ay nagbibigay-diin sa
                    pagpapalawak ng konsepto ng literasiya sa labas ng
                    tradisyonal na pagbasa ng nakalimbag na teksto.
                    Binibigyang-halaga nito ang iba’t ibang anyo ng komunikasyon
                    sa makabagong panahon—visual, audio, digital, at multimodal
                    na diskurso. Sa konteksto ng mungkahing website na
                    TalasTasan.com, ginamit ang mga interactive features upang
                    matugunan ang apat na papel ng mambabasa na itinatag ng
                    teorya: ang code breaker (pagsusuri sa wika at simbolo),
                    text participant (pag-unawa sa nilalaman at konteksto), text
                    user (paglalapat ng teksto sa tunay na buhay), at text
                    analyst (kritikal na pagsusuri sa teksto at ideolohiya). Sa
                    ganitong paraan, hindi lamang pagbasa ang naisasagawa kundi
                    maging ang mas malalim na pag-unawa at pagsusuri sa mga
                    teksto sa paraang angkop sa digital na henerasyon ng mga
                    mag-aaral ngayon.
                </p>
                <p className="leading-relaxed indent-8">
                    Kasabay nito, ang disenyo at implementasyon ng mungkahing
                    website na TalasTasan.com ay sinundan ang sistematikong
                    hakbang ng ADDIE Model na kinabibilangan ng limang yugto:
                    Pagsusuri (Analysis), Disenyo (Design), Pag-unlad
                    (Development), Pagpapatupad (Implementation), at Pagsusuri
                    (Evaluation). Sa yugto ng pagsusuri, tinukoy ang mga
                    pangangailangan ng mga mag-aaral na may mababang antas ng
                    pang-unawa at kasanayan sa pagbasa. Sa disenyo at pag-unlad,
                    nilikha ang mungkahing website na TalasTasan.com na may
                    nilalaman tulad ng maikling kuwento na inilahad gamit ang
                    interactive features tulad ng Buod, Buong Kuwento, at
                    Kuwentong May Larawan upang mapataas ang interes at
                    partisipasyon ng mga mag-aaral. Sa yugto ng pagpapatupad,
                    ginamit ng mga piling mag-aaral ang mungkahing website na
                    TalasTasan.com bilang bahagi ng interbensyon, at sa yugto ng
                    pagsusuri, isinagawa ang pretest, posttest, at sarbey upang
                    masukat ang epekto at kapakinabangan nito sa kanilang
                    kasanayan sa pagbasa at pagpapalawak ng bokabularyo. Sa
                    kabuuan, ang Multiliteracies Theory at ADDIE Model ay
                    nagsilbing pundasyon sa pagbuo ng isang makabago at
                    epektibong kasangkapang pampagtuturo at pagkatuto na tutugon
                    sa layunin ng mungkahing website na TalasTasan.com na
                    malinang ang kasanayan sa pagbasa at mapalawak ang
                    bokabularyo ng mga mag-aaral sa Filipino.
                </p>
            </BlurFade>
        </div>
    );
};

export default Page;
