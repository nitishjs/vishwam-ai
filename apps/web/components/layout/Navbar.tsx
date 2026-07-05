import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            Vishwam AI
          </h1>

          <div className="flex items-center gap-6 text-sm">
            <a href="#">Features</a>
            <a href="#">Mission</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </Container>
    </header>
  );
}