export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-4 mx-auto font-medium backdrop-blur-lg">
      <nav className="flex flex-row items-center justify-between max-w-4xl mx-auto mb-2 ">
        <div className="items-center text-2xl ">
          <h2 className="">César Camacho</h2>
        </div>
        <div className="text-xl">
          <a className="ml-8 hover:underline" href="#about">
            About
          </a>
          <a className="ml-8 hover:underline" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
