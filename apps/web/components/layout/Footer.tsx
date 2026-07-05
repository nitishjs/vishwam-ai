import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Vishwam AI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}