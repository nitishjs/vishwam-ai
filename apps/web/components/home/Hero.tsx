import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-primary font-semibold">
            Welcome to Vishwam AI
          </p>

          <Heading>
            Build a Better You with the Power of AI
          </Heading>

          <p className="mt-6 text-lg text-muted">
            Vishwam AI is your intelligent companion for learning,
            productivity, wellness, and lifelong personal growth.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90">
              Get Started
            </button>

            <button className="rounded-lg border border-border px-6 py-3 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}