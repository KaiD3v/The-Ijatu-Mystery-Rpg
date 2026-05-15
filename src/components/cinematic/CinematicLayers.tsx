/**
 * Camadas fixas: grão cinematográfico, vinheta, luz ambiente que segue o cursor.
 * pointer-events: none para não bloquear interação.
 */
export function CinematicLayers() {
  const grainSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <filter id="n" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="t"/>
    <feColorMatrix type="saturate" values="0" in="t" result="g"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" opacity="0.55"/>
</svg>`.trim());

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[12] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,${grainSvg}")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[11]"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 0%, rgba(201, 162, 39, 0.04) 0%, transparent 55%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0,0,0,0.55) 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[10]"
        style={{
          background:
            "radial-gradient(1200px circle at var(--cursor-x, 50vw) var(--cursor-y, 40vh), rgba(201, 162, 39, 0.055), transparent 42%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[9] bg-gradient-to-b from-transparent via-transparent to-[rgba(2,2,6,0.92)]"
        aria-hidden
      />
    </>
  );
}
