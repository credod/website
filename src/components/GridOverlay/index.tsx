"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export default function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === "g") {
        setIsVisible((prev) => !prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.gridOverlay}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className={styles.gridOverlayColumn} />
      ))}
    </div>
  );
}
