import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-tight text-primary">
  Vishwam AI
</h1>

          <div className="flex items-center gap-8 text-sm font-medium">
  <a
    href="#features"
    className="transition-colors duration-200 hover:text-primary"
  >
    Features
  </a>

  <a
    href="#mission"
    className="transition-colors duration-200 hover:text-primary"
  >
    Mission
  </a>

  <a
    href="#contact"
    className="transition-colors duration-200 hover:text-primary"
  >
    Contact
  </a>
</div>
        </nav>
      </Container>
    </header>
  );
}