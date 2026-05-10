import { useMemo, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { LandingPage } from "./components/landing/LandingPage";
import { LocationSelector } from "./components/experience/LocationSelector";
import { CameraExperience } from "./components/experience/CameraExperience";
import { demoLocation, locations } from "./data/locations";
import type { LocationData } from "./types";

type AppView = "landing" | "locations" | "experience";

function App() {
  const [view, setView] = useState<AppView>("landing");
  const [selectedLocation, setSelectedLocation] = useState<LocationData>(demoLocation);

  const readyLocations = useMemo(
    () => locations.filter((location) => location.status === "ready"),
    [],
  );

  const launchDemo = (location: LocationData = readyLocations[0]) => {
    setSelectedLocation(location);
    setView("experience");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (view === "experience") {
    return (
      <CameraExperience
        location={selectedLocation}
        onBack={() => setView("landing")}
        onChooseAnother={() => setView("locations")}
      />
    );
  }

  return (
    <AppShell
      onLogoClick={() => setView("landing")}
      onExplore={() => setView("locations")}
      onTryDemo={() => launchDemo()}
    >
      {view === "landing" ? (
        <LandingPage onExplore={() => setView("locations")} onTryDemo={() => launchDemo()} />
      ) : (
        <LocationSelector
          locations={locations}
          onBack={() => setView("landing")}
          onSelect={(location) => {
            if (location.status === "ready") {
              launchDemo(location);
            }
          }}
        />
      )}
    </AppShell>
  );
}

export default App;
