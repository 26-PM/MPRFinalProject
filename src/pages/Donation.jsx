import React from "react";
import Header from "../components/Header/Header";
import Donation from "./DonationPage/Donation";

function LandingPage() {
  return (
    <div style={{
      position: "relative",  // Needed for overlay
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      {/* Dark Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",  // 60% Dark Overlay
        zIndex: 1
      }}></div>

      {/* Content (Make sure it appears above overlay) */}
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <Header />
        <Donation />
      </div>
    </div>
  );
}

export default LandingPage;
