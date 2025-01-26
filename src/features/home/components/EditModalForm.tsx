import {
  Box,
  //   Fab,
  Modal,
  Typography,
  TextField,
  Button,
  Grid,
  InputLabel,
  // Input,
} from "@mui/material";
import { IIssueTrackingData } from "../../../interface/issue";
// import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

interface EditModalFormProps {
  rowData?: IIssueTrackingData;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  onSubmit?: (data: IIssueTrackingData) => void;
}

function EditModalForm({
  open = false,
  setOpen,
  rowData,
  onSubmit,
}: EditModalFormProps) {
  const [formData, setFormData] = useState<IIssueTrackingData | undefined>(
    rowData
  );

  const handleClose = () => setOpen && setOpen(false);

  const handleInputChange = (
    field: keyof IIssueTrackingData,
    value: string
  ) => {
    setFormData((prev) => prev && { ...prev, [field]: value });
  };

  const handleSubmit = () => {
    if (formData && onSubmit) {
      onSubmit(formData);
    }
    handleClose();
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // const base64String = reader.result as string;
        // const imageUrl = URL.createObjectURL(file); // Generate URL for the uploaded image
        // const imageUrl=reader
        // setImageURL(imageUrl);
        const imageUrl = URL.createObjectURL(file);
        handleInputChange("inspectionImg", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="modal-modal-title"
          className="dark:text-white text-black"
          variant="h6"
          component="h2"
          mb={2}
        >
          Edit Issue
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Room"
              value={formData?.room || ""}
              onChange={(e) => handleInputChange("room", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Type"
              value={formData?.type || ""}
              onChange={(e) => handleInputChange("type", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sub Type"
              value={formData?.subType || ""}
              onChange={(e) => handleInputChange("subType", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Observation"
              value={formData?.observation || ""}
              onChange={(e) => handleInputChange("observation", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Impact"
              value={formData?.impact || ""}
              onChange={(e) => handleInputChange("impact", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Remarks"
              value={formData?.remarks || ""}
              onChange={(e) => handleInputChange("remarks", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reference Code 1"
              value={formData?.refCode1 || ""}
              onChange={(e) => handleInputChange("refCode1", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reference Code 2"
              value={formData?.refCode2 || ""}
              onChange={(e) => handleInputChange("refCode2", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Inspection Image</InputLabel>
            <TextField
              fullWidth
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={handleImageUpload}
            ></TextField>
          </Grid>
        </Grid>
        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditModalForm;
