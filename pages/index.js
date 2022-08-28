import { Box, Container, IconButton, InputBase, Paper } from "@mui/material";
import { useContext } from "react";
import Forecast from "../components/forecast/forecast";
import PredictiveSearch from "../components/predictiveSearch/predictiveSearch";
import { WeatherContext } from "../Context";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const { locality, handleInput, searchData, city } =
    useContext(WeatherContext);
  return (
    <Box
      sx={{
        padding: "10px 0 0 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Digite sua localização"
          onChange={handleInput}
          value={city}
        />
        <IconButton type="button" onClick={searchData}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box height={"80vh"} marginTop={"100px"}>{locality ? <Forecast /> : <PredictiveSearch />}</Box>
    </Box>
  );
}
