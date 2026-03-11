import { useState, useEffect, useRef } from "react";
import { CountUpProps } from "../types";

export default function CountUp({ target }: CountUpProps) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseFloat(target.replace(/[^0-9.]/g, ""));
          const duration = 1800;
          const steps = 60;
          const increment = num / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displaySuffix = target.includes("Md")
    ? "Md$"
    : target.includes("%")
    ? "%"
    : target.includes("X")
    ? "X"
    : target.includes("K+")
    ? "K+"
    : "";

  return <span ref={ref}>{count}{displaySuffix}</span>;
}
