import Hero from "./components/Hero";
import FileManager from "./components/FileManager";
import AccentSwitcher from "./components/AccentSwitcher";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FileManager />
      {/* Dev-only aid — remove when the accent color is locked in. */}
      <AccentSwitcher />
    </main>
  );
}
