// Custom Toolbar with Delete Button

import { GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { IIssueTrackingData } from "../../../interface/issue";
import { useContext } from "react";
import { CreateTableContext } from "./Table";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ActionHandler = ({
  params,
}: {
  params: GridRenderCellParams<
    IIssueTrackingData,
    any,
    any,
    GridTreeNodeWithRender
  >;
}) => {
  const { onDelete, onEdit } = useContext(CreateTableContext);
  return (
    <div className="flex gap-2 px-2 w-full">
      <Fab
        color="secondary"
        aria-label="edit"
        onClick={() => onEdit(params.row)}
        size="small"
      >
        <EditIcon sx={{ fontSize: "16px" }} />
      </Fab>
      <Fab
        color="error"
        aria-label="delete"
        size="small"
        onClick={() => onDelete(params.row.id)}
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
};
