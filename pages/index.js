import { Container, IconButton, InputBase, Paper } from "@mui/material";
import { useContext } from "react";
import Forecast from "../components/forecast/forecast";
import PredictiveSearch from "../components/predictiveSearch/predictiveSearch";
import { WeatherContext } from "../Context";
import SearchIcon from "@mui/icons-material/Search";


export default function Home() {
  const {locality, handleInput, searchData, city} = useContext(WeatherContext)
  return (
    <Container maxWidth="sm" sx={{
      padding: "10px"
    }} >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Digite sua localização"
            inputProps={{ "aria-label": "search google maps" }}
            width={"50%"}
            onChange={handleInput}
            value={city}
          />
            <IconButton type="button" onClick={searchData}>
              <SearchIcon />
            </IconButton>
          
        </Paper>
        {
        locality ?  <Forecast /> : <PredictiveSearch />
      }
      </Container>
  )
}
