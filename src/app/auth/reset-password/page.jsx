import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";

function ResetPassword() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", }} // Ensures full viewport height

    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        container
        direction="column"
        gap={'16px'}
        sx = {{background:'#FFFFFF',border:'1px',borderColor:'gray',width:'100%',width:'592px',paddingX:'64px'}}
      >
        <Image src="/logo.png" width={211} height={37} alt="Logo" />
        <Typography variant="h6" align="start" style={{ marginTop: "1rem" }}>
          Hi Shoaib,
        </Typography>
        <Typography variant="caption"  style={{ marginTop: "1rem" }}>
        We received a request to reset the password for your account associated with this email address. If you made this request, please click the link below to securely set a new password.
        </Typography>
        <Button variant="contained" color="primary"  >Reset Password</Button>
        <Typography variant="caption"  style={{ marginTop: "1rem" }}>For your security, this link will expire in (5 minutes). If you didn’t request a password reset, please ignore this email or contact our support team immediately.</Typography>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
