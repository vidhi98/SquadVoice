import { Typography } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import Dialog from "../../../Components/Modal";
import UserInfoForm from "./UserInfoForm";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  selectedPlan: string;
}

const UserInfoDialog: React.FC<Props> = ({ selectedPlan, ...props }) => {
  const handleSubmit = useCallback(() => {
    props.onClose();
  }, [props]);

  return (
    <Dialog {...props}>
      <Typography
        color="primary"
        variant="h6"
        display="inline"
        style={{ fontWeight: "bold" }}
      >
        Plan Selected : {"  "}
      </Typography>

      <Typography color="primary" variant="h6" display="inline">
        {selectedPlan}
      </Typography>
      <UserInfoForm onSubmit={handleSubmit} />
    </Dialog>
  );
};

export default UserInfoDialog;
