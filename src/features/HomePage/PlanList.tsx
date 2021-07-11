import {
  Box,
  Button,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { PlansData } from "../../data/usePriceData";
import PlanInfoCard from "./PlanInfoCard";
import UserInfoDialog from "./UserInfoDialog/index";

interface Props {
  plans: PlansData[];
}
interface EnterpriseCardProps {
  openDialog: () => void;
}
const useStyles = makeStyles((theme: Theme) => ({
  redBtn: {
    minHeight: theme.spacing(8),
    fontSize: theme.spacing(2),
    fontWeight: "bold",
  },
}));

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({ openDialog }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Box bgcolor={theme.palette.primary.main} py={2}>
        <Typography
          style={{ fontWeight: "bold" }}
          color="textSecondary"
          variant="h5"
        >
          Enterprise
        </Typography>
      </Box>
      <Box bgcolor={theme.palette.background.default}>
        <Box
          py={2.5}
          px={3}
          minHeight={theme.spacing(45)}
          display="flex"
          alignItems="center"
        >
          <Typography color="primary" variant="h4" align="center">
            Want more than 80 qualified leads each month?
          </Typography>
        </Box>
      </Box>

      <Button
        color="secondary"
        size="large"
        variant="outlined"
        className={classes.redBtn}
        onClick={openDialog}
      >
        Get In Touch
      </Button>
    </Box>
  );
};

const PlanList: React.FC<Props> = ({ plans }) => {
  const theme = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("$100K - $200K");

  const openDialog = (planName: string) => {
    setSelectedPlan(planName);
    setOpen(true);
  };
  const onCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Box pt={8}>
        <Grid container spacing={5} alignItems="flex-end">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <PlanInfoCard
                plan={plan}
                bgColor={
                  index % 2 === 0
                    ? theme.palette.background.paper
                    : theme.palette.background.default
                }
                openDialog={() => openDialog(plan.planName)}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} lg={3}>
            <EnterpriseCard openDialog={() => openDialog("Enterprise")} />
          </Grid>
        </Grid>
      </Box>
      <UserInfoDialog
        open={open}
        onClose={onCloseDialog}
        title="Get Started with SquadVoice"
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default PlanList;
