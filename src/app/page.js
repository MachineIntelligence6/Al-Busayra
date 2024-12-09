import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {

  return <Box>
    <Typography variant="h3">This screen is not developer so far </Typography>
    <Link href="/campaigns">Click here to redirect to campagins page</Link>
  </Box>;

}
