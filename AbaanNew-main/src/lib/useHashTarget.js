import { useState, useEffect } from "react";

export default function useHashTarget() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.substring(1));
  }, []);

  return hash;
}