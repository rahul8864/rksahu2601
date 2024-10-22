import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import BlurFade from "~/components/ui/blur-fade";
import BlurFadeText from "~/components/ui/blur-fade-text";
import { DATA } from "~/constants/profile-data";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👨🏻‍💻`}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                text={DATA.description}
                delay={BLUR_FADE_DELAY}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="text-4xl font-bold tracking-widest">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
      </section>
      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
      </section>
      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
      </section>
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Projects</h2>
        </BlurFade>
      </section>
    </main>
  );
}
