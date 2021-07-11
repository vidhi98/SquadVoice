import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import { Checkboxes, makeRequired, makeValidate, TextField } from "mui-rff";
import React, { useCallback, useMemo } from "react";
import { Form } from "react-final-form";
import { object, string } from "yup";

interface Props {
  onSubmit: () => void;
}

type FormData = {
  email: string;
  leads_per_month?: string | null;
  name: string;
  no_of_agents?: string | null;
  phone: string;
  social?: string[];
  source?: string[];
  total_leads?: string | null;
  crm?: string | null;
};

const getSchema = () =>
  object().shape({
    name: string().required(),
    phone: string()
      .required()
      .test(
        "isValidPhoneNumber",
        "Phone no. should be of 10 digits",
        (value) => !value || value.length === 10
      ),
    email: string().email().required(),
  });

const sourcesCheckboxData = [
  { label: "Zillow", value: "Zillow" },
  { label: "Realtor", value: "Realtor" },
  { label: "Ylopo", value: "Ylopo" },
  { label: "Others", value: "Others" },
];

const socialCheckboxData = [
  { label: "Google", value: "Google" },
  { label: "Facebook", value: "Facebook" },
  { label: "Email", value: "Email" },
  { label: "Friends", value: "Friends" },
  { label: "Real Closers", value: "Real Closers" },
];

const useStyles = makeStyles(() => ({
  checkboxRoot: {
    color: "blue",
    "& + .MuiFormControl-root > div": {
      flexDirection: "row",
    },
  },
}));

const UserInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const onFormSubmit = useCallback(
    (values) => {
      const data = values as FormData;
      const alertData = [
        "Data Submitted : ",
        `Name : ${data.name}`,
        `Email-Address : ${data.email}`,
        `Phone : ${data.phone}`,
        `No. of leads generated in a month : ${data.leads_per_month || "N/A"}`,
        `Total leads in your CRM : ${data.total_leads || "N/A"}`,
        `CRM : ${data.crm || "N/A"}`,
        `No. of Agents : ${data.no_of_agents || "N/A"}`,
        `Biggest Lead Source : ${data.source?.join(", ") || "N/A"}`,
      ];
      onSubmit();
      alert(alertData.join("\n"));
    },
    [onSubmit]
  );

  const schema = useMemo(() => getSchema(), []);
  const validate = useMemo(() => makeValidate(schema), [schema]);
  const required = useMemo(() => makeRequired(schema), [schema]);
  const classes = useStyles();

  return (
    <Form
      onSubmit={onFormSubmit}
      validate={validate}
      //   initialValues={initialValue}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} noValidate>
            <Paper square elevation={0}>
              <Box py={2}>
                <Typography style={{ fontWeight: "bold" }} variant="body2">
                  Name
                </Typography>
                <Box pb={1} />
                <TextField
                  name="name"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required={required.name}
                />
                <Box pt={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={7}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          Email-Address
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="email"
                          variant="outlined"
                          fullWidth
                          required={required.email}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          Phone No.
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="phone"
                          variant="outlined"
                          fullWidth
                          required={required.phone}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box pt={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={7}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          Number of leads you generated in a month
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="leads_per_month"
                          variant="outlined"
                          fullWidth
                          required={true}
                          type="number"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          Total leads in your CRM
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="total_leads"
                          variant="outlined"
                          fullWidth
                          required={true}
                          type="number"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box pt={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={7}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          Which CRM do you use
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="crm"
                          variant="outlined"
                          fullWidth
                          required={true}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ fontWeight: "bold" }}
                          variant="body2"
                        >
                          No. of Agents
                        </Typography>
                        <Box pb={1} />
                        <TextField
                          name="no_of_agents"
                          variant="outlined"
                          fullWidth
                          required={true}
                          type="number"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box pb={2} />
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="body2"
                  className={classes.checkboxRoot}
                >
                  What are your biggest lead sources?
                </Typography>
                <Checkboxes
                  color="primary"
                  name="source"
                  required={true}
                  data={sourcesCheckboxData}
                  icon={<CheckBoxOutlineBlankOutlinedIcon color="primary" />}
                />
                <Box pb={2} />
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="body2"
                  className={classes.checkboxRoot}
                >
                  How did you hear about us?
                </Typography>
                <Checkboxes
                  color="primary"
                  name="social"
                  required={true}
                  data={socialCheckboxData}
                  icon={<CheckBoxOutlineBlankOutlinedIcon color="primary" />}
                />
              </Box>
              <Button
                autoFocus
                type="submit"
                color="secondary"
                variant="contained"
              >
                Submit
              </Button>
            </Paper>
          </form>
        );
      }}
    />
  );
};

export default UserInfoForm;
