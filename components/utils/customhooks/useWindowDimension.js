import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 1920,
      height: 1080,
    };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // 이벤트리스너 attach
    window.addEventListener("resize", handleResize);

    // 이벤트리스너 detach
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
