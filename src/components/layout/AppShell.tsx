import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface AppShellProps {
  children: ReactNode;
  onLogoClick: () => void;
  onExplore: () => void;
  onTryDemo: () => void;
}

export function AppShell({ children, onLogoClick, onExplore, onTryDemo }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-charcoal text-white">
      <Header onLogoClick={onLogoClick} onExplore={onExplore} onTryDemo={onTryDemo} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
