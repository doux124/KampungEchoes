import { CameraOff } from "lucide-react";
import { publicPath } from "../../utils/paths";

interface CameraPermissionFallbackProps {
  image: string;
  title: string;
}

export function CameraPermissionFallback({ image, title }: CameraPermissionFallbackProps) {
  return (
    <div className="absolute inset-0">
      <img src={publicPath(image)} alt={`${title} fallback scene`} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,.74))]" />
      <div className="absolute inset-x-5 bottom-28 rounded-lg border border-white/14 bg-black/45 p-4 text-white backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <CameraOff aria-hidden="true" className="h-5 w-5 text-old-gold" />
          <div>
            <p className="font-extrabold">Camera fallback scene</p>
            <p className="mt-1 text-sm leading-6 text-white/68">
              Camera access is unavailable or denied, so the demo uses a polished static street view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
