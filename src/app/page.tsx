import Footer from "@/components/Footer/Footer";
import { Box, Container, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            fontWeight={"bold"}
            sx={{ textShadow: "3px 3px #60a5fa" }}
            component={"h1"}
          >
            Legends Specialist
          </Typography>
          <Typography sx={{ mt: 1 }} variant="body2">
            By: Pedro H. F. Zoz & Luiz F. Rosa
          </Typography>
          <Typography sx={{ mt: 17 }} fontWeight={"bold"} variant="h4">
            Enter your champion:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your Champion"
            variant="outlined"
            sx={{ mt: 1 }}
            placeholder="Vayne, Teemo, Zoe, Zed..."
          ></TextField>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
