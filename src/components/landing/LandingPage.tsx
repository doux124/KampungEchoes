import { DemoLocationsSection } from "./DemoLocationsSection";
import { FinalCTASection } from "./FinalCTASection";
import { FutureTechSection } from "./FutureTechSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";

interface LandingPageProps {
  onTryDemo: () => void;
  onExplore: () => void;
}

export function LandingPage({ onTryDemo, onExplore }: LandingPageProps) {
  return (
    <>
      <HeroSection onTryDemo={onTryDemo} onExplore={onExplore} />
      <HowItWorksSection />
      <DemoLocationsSection onTryDemo={onTryDemo} />
      <FutureTechSection />
      <FinalCTASection onTryDemo={onTryDemo} />
    </>
  );
}
