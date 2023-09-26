import React, { ReactNode } from "react";

interface ChartTitleProps {
  children: ReactNode;
}

export default function ChartTitle({ children }: ChartTitleProps) {
  return <h3>{children}</h3>;
}
