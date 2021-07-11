import {
  Box,
  Button,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { PlansData } from "../../data/usePriceData";

interface Props {
  plan: PlansData;
  bgColor: string;
  openDialog: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  borderBox: {
    borderTop: `dashed 2px ${theme.palette.primary.main}`,
  },
  redBtn: {
    minHeight: theme.spacing(8),
    fontSize: theme.spacing(2),
    fontWeight: "bold",
  },
}));

const PlanInfoCard: React.FC<Props> = ({ plan, bgColor, openDialog }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      {plan.popular && (
        <Box bgcolor={theme.palette.secondary.main} py={2}>
          <Typography
            style={{ fontWeight: "bold" }}
            color="textSecondary"
            variant="h5"
          >
            Most Popular!
          </Typography>
        </Box>
      )}
      <Box bgcolor={theme.palette.primary.main} py={2}>
        <Typography
          style={{ fontWeight: "bold" }}
          color="textSecondary"
          variant="h5"
        >
          {plan.planName}
        </Typography>
      </Box>
      <Box bgcolor={bgColor}>
        <Box py={2.5}>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h3"
          >
            {plan.pricePerLead}
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h6"
          >
            Per Qualified lead
          </Typography>
        </Box>
        <Box py={2} mx={6} className={classes.borderBox}>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h6"
          >
            Qualified leads per month
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h5"
          >
            {plan.leadsPM}
          </Typography>
        </Box>
        <Box py={2} mx={6} className={classes.borderBox}>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h6"
          >
            Platform Fee per month
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            color="primary"
            variant="h5"
          >
            {plan.platformPricePM}
          </Typography>
        </Box>
      </Box>
      <Box bgcolor={theme.palette.primary.main} py={2} mb={2}>
        <Typography
          style={{ fontWeight: "bold" }}
          color="textSecondary"
          variant="h5"
        >
          {plan.finalPricePM} /mo
        </Typography>
      </Box>

      <Button
        color="secondary"
        size="large"
        variant={plan.popular ? "contained" : "outlined"}
        className={classes.redBtn}
        onClick={openDialog}
      >
        Start Your Trial
      </Button>
    </Box>
  );
};

export default PlanInfoCard;
