import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";

const OfflinePage: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      bgcolor={theme.palette.primary.main}
      px={5}
    >
      <Typography variant="h4" color="textSecondary">
        You are not connected to internet
      </Typography>
    </Box>
  );
};

export default OfflinePage;
