import React from "react";

export const Stop = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#000000" d="M18,18H6V6H18V18Z" />
  </svg>
);

export const Play = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#000000" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
);

export const Close = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
);
