import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <p>
            © 2026 Vishwam AI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-primary"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-primary"
            >
              Terms
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}