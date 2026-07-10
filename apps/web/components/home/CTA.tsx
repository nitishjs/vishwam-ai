import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-3xl border border-border bg-card p-10 text-center lg:p-16">
          <Heading>
            Ready to Transform Your Life with AI?
          </Heading>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Join Vishwam AI and unlock personalized learning,
            productivity tools, AI mentoring, and lifelong growth.
          </p>

          <div className="mt-10 flex justify-center">
            <Button>
              Get Started Today
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}