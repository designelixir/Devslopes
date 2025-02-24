'use client'
import { useEffect, useRef } from "react"; import { gsap } from "gsap";

interface PieChartProps { color: string; percentage: number; }

const PieChart = ({ color, percentage }: PieChartProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const size = 150, strokeWidth = 75, radius = (size - strokeWidth) / 2, circumference = 2 * Math.PI * radius;
  const colorVar = `var(--${color})`;

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, { strokeDashoffset: circumference * (1 - percentage / 100), duration: 2, ease: "power1.out" });
    }
  }, [circumference, percentage]);

  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={radius} fill="transparent" stroke="" strokeWidth={strokeWidth} />
      <circle ref={circleRef} cx={size/2} cy={size/2} r={radius} fill="transparent" stroke={colorVar} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={circumference} transform={`rotate(-90 ${size/2} ${size/2})`} />
    </svg>
  );
};

export default PieChart;
