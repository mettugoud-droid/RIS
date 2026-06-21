"use client";

import { motion } from "framer-motion";

export function NetworkDiagram() {
  const nodes = [
    { cx: 200, cy: 120, label: "Camera" },
    { cx: 400, cy: 80, label: "Server" },
    { cx: 600, cy: 120, label: "Panel" },
    { cx: 100, cy: 250, label: "Warehouse" },
    { cx: 300, cy: 220, label: "Switch" },
    { cx: 500, cy: 250, label: "Control" },
    { cx: 700, cy: 220, label: "Monitor" },
    { cx: 350, cy: 340, label: "NVR" },
    { cx: 550, cy: 340, label: "Cloud" },
  ];

  const edges = [
    [0, 1], [1, 2], [0, 3], [0, 4], [1, 4],
    [1, 5], [2, 5], [2, 6], [4, 7], [5, 8],
    [3, 4], [5, 6], [7, 8], [4, 5],
  ];

  return (
    <div className="w-full max-w-4xl h-[400px] opacity-50 sm:opacity-60">
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Connection Lines */}
        {edges.map(([from, to], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            stroke="rgba(0, 102, 255, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Animated Pulses along edges */}
        {edges.slice(0, 6).map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="3"
            fill="#3385FF"
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[from].cx, nodes[to].cx],
              cy: [nodes[from].cy, nodes[to].cy],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "linear",
            }}
          >
            <animate
              attributeName="r"
              values="2;4;2"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
          >
            {/* Outer glow */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="16"
              fill="rgba(0, 102, 255, 0.05)"
              stroke="rgba(0, 102, 255, 0.15)"
              strokeWidth="1"
            />
            {/* Inner circle */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="#0066FF"
              opacity="0.8"
            >
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Label */}
            <text
              x={node.cx}
              y={node.cy + 30}
              textAnchor="middle"
              fill="rgba(173, 181, 189, 0.6)"
              fontSize="10"
              fontFamily="system-ui"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
