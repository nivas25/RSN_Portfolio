import React from "react";
import { motion } from "framer-motion";
import styles from "./MandalaGlyph.module.css";

const MandalaGlyph = () => {
  return (
    <motion.svg
      className={styles.glyphSvg}
      viewBox="-300 -300 600 600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Layer 1: Filigree Ring */}
      <g className={styles.filigreeRing}>
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i / 36) * 360;
          const nextAngle = ((i + 1) / 36) * 360;
          const r = 270;
          const startX = r * Math.cos((angle * Math.PI) / 180);
          const startY = r * Math.sin((angle * Math.PI) / 180);
          const endX = r * Math.cos((nextAngle * Math.PI) / 180);
          const endY = r * Math.sin((nextAngle * Math.PI) / 180);
          return (
            <path
              key={`fr-${i}`}
              d={`M ${startX} ${startY} A ${r * 0.1} ${
                r * 0.1
              } 0 0 1 ${endX} ${endY}`}
              transform="rotate(5)"
            />
          );
        })}
      </g>

      {/* Layer 2: Outer Petal Ring */}
      <g className={styles.outerPetalRing}>
        {Array.from({ length: 64 }).map((_, i) => (
          <circle
            key={`op-${i}`}
            cx="0"
            cy="-250"
            r="4"
            transform={`rotate(${(i / 64) * 360})`}
          />
        ))}
      </g>

      {/* Layer 3: Main Lotus Petals */}
      <g className={styles.mainLotus}>
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`mlp-${i}`}
            d="M 0 -240 C 80 -150, 80 -100, 0 -80 C -80 -100, -80 -150, 0 -240 Z"
            transform={`rotate(${(i / 16) * 360})`}
          />
        ))}
      </g>

      {/* Layer 4: Stardust Ring */}
      <g className={styles.stardustRing}>
        {Array.from({ length: 96 }).map((_, i) => (
          <circle
            key={`sd-${i}`}
            cx="0"
            cy="-185"
            r="1"
            transform={`rotate(${(i / 96) * 360})`}
          />
        ))}
      </g>

      {/* Layer 5: Inner Lotus Petals */}
      <g className={styles.innerLotus}>
        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={`ilp-${i}`}
            d="M 0 -170 C 40 -130, 40 -110, 0 -100 C -40 -110, -40 -130, 0 -170 Z"
            transform={`rotate(${(i / 24) * 360})`}
          />
        ))}
      </g>

      {/* Layer 6: Boundary Rings */}
      <g className={styles.boundaryRings}>
        <circle cx="0" cy="0" r="130" />
        <circle cx="0" cy="0" r="126" />
      </g>

      {/* Layer 7: Shatkona Core */}
      <g className={styles.shatkonaCore}>
        <path d="M 0 -50 L 43.3 25 L -43.3 25 Z" />
        <path d="M 0 50 L -43.3 -25 L 43.3 -25 Z" />
      </g>

      {/* Layer 8: Bindu (Center Point) */}
      <g className={styles.bindu}>
        <circle cx="0" cy="0" r="3" />
      </g>
    </motion.svg>
  );
};

export default MandalaGlyph;
