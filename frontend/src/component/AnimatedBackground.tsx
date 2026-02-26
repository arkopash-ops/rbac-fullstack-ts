import React, { useEffect, useRef } from "react";

declare const anime: {
  (params: {
    targets: HTMLElement | HTMLElement[];
    translateX?: number | (() => number);
    translateY?: number | (() => number);
    scale?: number | (() => number);
    duration?: number;
    loop?: boolean;
    easing?: string;
    complete?: () => void;
    [key: string]: unknown;
  }): void;
};

interface AnimatedBackgroundProps {
  circleCount?: number;
  maxSize?: number;
  minSize?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  circleCount = 30,
  minSize = 10,
  maxSize = 50,
  className,
  style,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const container = bgRef.current;

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const circles: HTMLDivElement[] = Array.from({ length: circleCount }).map(
      () => {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.borderRadius = "50%";
        const size = random(minSize, maxSize);
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`;
        div.style.top = `${Math.random() * 100}%`;
        div.style.left = `${Math.random() * 100}%`;
        container.appendChild(div);
        return div;
      },
    );

    const animateCircle = (circle: HTMLDivElement) => {
      anime({
        targets: circle,
        translateX: random(-200, 200),
        translateY: random(-200, 200),
        scale: random(0.5, 1.5),
        duration: 5000 + random(0, 5000),
        easing: "easeInOutSine",
        complete: () => animateCircle(circle),
      });
    };

    circles.forEach(animateCircle);

    return () => {
      circles.forEach((c) => container.removeChild(c));
    };
  }, [circleCount, minSize, maxSize]);

  return (
    <div
      ref={bgRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
    />
  );
};

export default AnimatedBackground;
