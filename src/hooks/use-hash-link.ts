// src/hooks/useHashLink.ts
import { useNavigate, useLocation } from "react-router-dom";

export function useHashLink() {
  const navigate = useNavigate();
  const location = useLocation();

  return (hash: string) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };
}
