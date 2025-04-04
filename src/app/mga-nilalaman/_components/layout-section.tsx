import React from "react";

const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return <section className="min-h-screen bg-secondary">{children}</section>;
};

export default LayoutSection;
