export type DemoStatus = "ready" | "coming-soon" | "preview";

export type CameraState = "requesting" | "live" | "denied" | "unavailable";

export type RevealState = "present" | "transitioning" | "revealed";

export interface LocationData {
  id: string;
  name: string;
  shortName: string;
  area: string;
  description: string;
  status: DemoStatus;
  image: string;
  coordinatesLabel: string;
  memoryCue: string;
}
