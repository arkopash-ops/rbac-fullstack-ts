import React from "react";
import { Box } from "@mui/material";
import AnimatedBackground from "./AnimatedBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedBackground />
      {children}
    </Box>
  );
};

export default Layout;
