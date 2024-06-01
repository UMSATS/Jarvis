import * as React from "react";
import './TabListIcons.css';

export const DashboardIcon = (props) => (
  <svg className='icon' xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <rect
      width={24}
      height={34}
      x={4}
      y={4}
      rx={9}
      ry={9}
      style={{
        fill: "#b3b3b3",
        strokeWidth: 1.99999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <rect
      width={24}
      height={14}
      x={4}
      y={46}
      rx={9}
      ry={9}
      style={{
        fill: "#b3b3b3",
        strokeWidth: 2.00001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <rect
      width={24}
      height={34}
      x={36}
      y={-60}
      rx={9}
      ry={9}
      style={{
        fill: "#b3b3b3",
        strokeWidth: 1.99999,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      transform="scale(1 -1)"
    />
    <rect
      width={24}
      height={14}
      x={36}
      y={-18}
      rx={9}
      ry={9}
      style={{
        fill: "#b3b3b3",
        strokeWidth: 2.00001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      transform="scale(1 -1)"
    />
  </svg>
)

export const ExperimentIcon = (props) => (
  <svg className='icon' xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M24.556 18.32v9.216L12.107 44.14a6.901 6.901 63.429 0 0 5.522 11.041h26.306a6.872 6.872 116.472 0 0 5.484-11.012l-12.56-16.634V18.32z"
        style={{
          fill: "#b3b3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.77859,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(1.28733 0 0 1.28547 -7.607 -12.935)"
      />
      <path
        d="M20.567 12h22.712"
        style={{
          fill: "none",
          stroke: "#b3b3b3",
          strokeWidth: 12,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>
)