import { OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";

export default function StyledInput() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <OutlinedInput fullWidth="500px" placeholder="Please enter text" />
    </Box>
  );
}
