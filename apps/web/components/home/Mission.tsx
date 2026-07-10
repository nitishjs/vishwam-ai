import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const missionItems = [
  "Personalized AI-powered learning experiences.",
  "Smarter productivity and goal tracking.",
  "Long-term habit building for lifelong growth.",
];

export default function Mission() {
  return (
    <Section id="mission">
      <Container>
        <SectionTitle
          badge="Our Mission"
          title="Empowering Personal Growth Through AI"
          description="We believe artificial intelligence should help every individual learn faster, work smarter, build better habits, and unlock their full potential."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl font-bold">
              Building the Future of Human Potential
            </h3>

            <p className="mt-6 text-lg text-muted">
              Vishwam AI is designed to become your intelligent companion
              for continuous learning, productivity, wellness, and
              personal growth. Our mission is to combine cutting-edge AI
              with practical daily habits to help people become the best
              version of themselves.
            </p>
          </div>

          <div>
            <div className="space-y-6">
              {missionItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    ✓
                  </div>

                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <Button className="mt-10">
              Join Our Mission
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}