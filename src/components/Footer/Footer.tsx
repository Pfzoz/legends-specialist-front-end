import { GitHub } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        height: "fit-content",
        position: "fixed",
        bottom: 0,
        width: "100%",
        p: 2,
        backgroundColor: "#1f2937",
        boxShadow: "0px -1em 0.5em #1f2937",
      }}
    >
      <BottomNavigationAction
        label="Git"
        href="https://github.com/Pfzoz/legends-specialist-front-end"
        icon={
          <GitHub
            sx={{
              fontSize: 60,
              filter: "drop-shadow(3px 3px 0.15rem #0c0e14)",
              transition: "ease-in-out 0.3s",
              "&:hover": {
                filter: "drop-shadow(3px 3px 2rem #7a819a)",
              }
            }}
          />
        }
      />
    </BottomNavigation>
  );
}
