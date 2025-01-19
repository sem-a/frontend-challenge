import React from "react";
import styles from "./index.module.css";

type Props = {
  gap: string;
  min: string;
  max: string;
  children: React.ReactNode;
};

export const Grid: React.FC<Props> = ({ gap, min, max, children }) => {
  return (
    <div
      style={{
        display: "grid",
        gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${min}, ${max}))`,
      }}
    >
      {children}
    </div>
  );
};
