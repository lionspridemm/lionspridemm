"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero-road.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
