import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <Section className="min-h-[calc(100vh-64px)] flex items-center">
      <Container>
        <div className="max-w-4xl">
          <Badge className="mb-4 font-semibold text-primary">
            🚀 AI-Powered Personal Growth Platform
          </Badge>

          <Heading>
            Build a Better You with the Power of AI
          </Heading>

          <p className="mt-6 text-lg text-muted">
            Vishwam AI is your intelligent companion for learning,
            productivity, wellness, and lifelong personal growth.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>Get Started</Button>

            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}