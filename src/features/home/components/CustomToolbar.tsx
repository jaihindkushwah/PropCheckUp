import {
  // GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExportContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExportToolBar from "./ExportToolBar";
import { IIssueTrackingData } from "../../../interface/issue";
export const CustomToolbar = ({
  selectedRows,
  onDelete,
}: {
  selectedRows: IIssueTrackingData[];
  onDelete?: () => void;
}) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExportContainer>
        <ExportToolBar />
      </GridToolbarExportContainer>

      {/* <GridToolbar /> */}
      {selectedRows.length > 0 && (
        <Button
          color="error"
          variant="text"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
          disabled={selectedRows.length === 0} // Disable button if no rows are selected
        >
          Delete
        </Button>
      )}
      <GridToolbarQuickFilter className="self-end justify-self-end" />
    </GridToolbarContainer>
  );
};
