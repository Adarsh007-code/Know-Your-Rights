import React from "react";
import legalCourtDeskImage from "../assets/images/legal_court_desk_1788378201950.jpg";

export const PROJECT_BACKGROUND_SRC = legalCourtDeskImage || "/legal_court_desk.jpg";

interface BackgroundLayerProps {
  imageSrc?: string;
  dimLevel?: "dark" | "medium" | "subtle" | "clear";
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  imageSrc = PROJECT_BACKGROUND_SRC,
  dimLevel = "dark",
}) => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Fixed Courtroom / Legal Desk Image */}
      <img
        src={imageSrc}
        alt="Authentic courtroom law library background"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover object-center transition-all duration-500 ${
          dimLevel === "clear"
            ? "saturate-100 brightness-95 contrast-100"
            : dimLevel === "subtle"
            ? "saturate-[0.8] brightness-[0.7] contrast-[1.05]"
            : dimLevel === "medium"
            ? "saturate-[0.7] brightness-[0.55] contrast-[1.1]"
            : "saturate-[0.6] brightness-[0.45] contrast-[1.15]"
        }`}
      />

      {/* Warm Parchment / Charcoal Editorial Double Overlay */}
      {dimLevel !== "clear" && (
        <>
          <div
            className={`absolute inset-0 bg-[#141312] mix-blend-multiply transition-opacity duration-500 ${
              dimLevel === "subtle" ? "opacity-60" : dimLevel === "medium" ? "opacity-75" : "opacity-90"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-[#181716]/95 via-[#161514]/85 to-[#121110]/95 transition-opacity duration-500 ${
              dimLevel === "subtle" ? "opacity-60" : dimLevel === "medium" ? "opacity-75" : "opacity-100"
            }`}
          />
        </>
      )}
    </div>
  );
};

