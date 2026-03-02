import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          backgroundColor: "white",
        }}

        
      >

        <img
          src="https://www.officeaura.co.ke/logo.png"
          width={120}
          height={120}
          alt="Office Aura Logo"
        />
        {/* Brand Name */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            margin: 0,
            color: "#111827",
          }}
        >
          Office Aura
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 36,
            marginTop: 20,
            color: "#4B5563",
          }}
        >
          Office Décor & Workspace Accessories in Kenya
        </p>

        {/* Location Boost */}
        <p
          style={{
            fontSize: 28,
            marginTop: 40,
            color: "#0F766E",
          }}
        >
          Delivery Across Nairobi & Kenya 🇰🇪
        </p>
      </div>
    ),
    size
  );
}
