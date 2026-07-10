import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "📚",
    title: "Learn Faster",
    description:
      "Personalized AI learning paths to master new skills efficiently.",
  },
  {
    icon: "🤖",
    title: "AI Mentor",
    description:
      "Receive intelligent guidance for productivity, career, and personal growth.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "Measure your daily habits, learning, and long-term improvement.",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionTitle
          badge="Features"
          title="Everything You Need to Grow"
          description="Powerful AI tools designed to help you learn, stay productive, and improve every day."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group cursor-pointer"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-muted">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}