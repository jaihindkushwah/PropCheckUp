// import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowId,
  GridToolbar,
  GridToolbarContainer,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid";
import { Box, Button, Fab, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { IIssueTrackingData } from "../../../interface/issue";
import { IssueTrackingData } from "../../../shared/data/dummyData";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { createContext, useContext, useState } from "react";
import EditModalForm from "./EditModalForm";

const columns: GridColDef<IIssueTrackingData>[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
  },
  {
    field: "room",
    headerName: "Room",
    // flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "type",
    headerName: "Type",
    type: "string",
    headerAlign: "left",
    align: "left",
    width: 150,
  },
  {
    field: "subType",
    headerName: "Sub Type",
    type: "string",
    headerAlign: "left",
    align: "left",
    width: 150,
  },
  {
    field: "observation",
    headerName: "Observation",
    type: "string",
    headerAlign: "left",
    align: "left",
    cellClassName: "observation-column--cell",
    minWidth: 150,
    maxWidth: 800,
    flex: 1,
  },
  {
    field: "impact",
    headerName: "Impact",
    type: "string",
    headerAlign: "left",
    align: "left",
    editable: true,
  },
  {
    field: "inspectionImg",
    headerName: "Inspection Image",
    type: "string",
    headerAlign: "left",
    align: "left",
    renderCell: (params) => {
      return (
        <Link
          style={{ width: "100%", height: "100%" }}
          to={params.row.inspectionImg}
          target="_blank"
          className="group relative"
        >
          <img
            src={params.row.inspectionImg}
            style={{ width: "100%", height: "100%" }}
            className="group-hover:opacity-0"
          />
          <span className="absolute top-1/2 left-1/2 w-full h-full flex items-center justify-center dark:bg-slate-100/40  transform bg-slate-700/40 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
            <OpenInNewIcon className="w-10 h-10 text-blue-600" />
          </span>
        </Link>
      );
    },
  },
  {
    field: "remarks",
    headerName: "Remarks",
    type: "string",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "refCode1",
    headerName: "Ref Code 1",
    type: "string",
    headerAlign: "left",
    align: "left",
  },
  // add action button
  {
    field: "action",
    headerName: "Action",
    type: "actions",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      return <ActionHandler params={params} />;
    },
  },
];

// Custom Toolbar with Delete Button

const ActionHandler = ({
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
const CustomToolbar = ({
  selectedRows,
  onDelete,
}: {
  selectedRows: GridRowId[];
  onDelete?: () => void;
}) => {
  return (
    <GridToolbarContainer>
      <GridToolbar />
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
    </GridToolbarContainer>
  );
};

const CreateTableContext = createContext({
  onDelete: (_rowId: GridRowId) => {},
  onEdit: (_row: IIssueTrackingData) => {},
});

function IssueTrackingTable() {
  const [tableRows, setTableRows] =
    useState<IIssueTrackingData[]>(IssueTrackingData);
  const [selectedEditRow, setSelectedEditRow] = useState<IIssueTrackingData>();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete the selected rows?")) {
      const updatedRows = tableRows.filter(
        (row) => !selectedRows.includes(row.id)
      );
      setTableRows(updatedRows);
      setSelectedRows([]);
    }
  };
  const onSingleDelete = (rowId: GridRowId) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      const updatedRows = tableRows.filter((row) => row.id !== rowId);
      setTableRows(updatedRows);
    }
  };
  const onEditHandler = (row: IIssueTrackingData) => {
    setIsModelOpen(true);
    setSelectedEditRow(row);
  };
  const handleOnSubmit = (data: IIssueTrackingData) => {
    const updatedRows = tableRows.map((row) =>
      row.id === data.id ? data : row
    );
    setTableRows(updatedRows);
    setIsModelOpen(false);
  };

  return (
    <CreateTableContext.Provider
      value={{ onDelete: onSingleDelete, onEdit: onEditHandler }}
    >
      {isModelOpen && (
        <EditModalForm
          open={true}
          rowData={selectedEditRow}
          setOpen={setIsModelOpen}
          onSubmit={handleOnSubmit}
        />
      )}
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="85vh"
          sx={{
            bgcolor: colors.primary[400],
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderColor: "ActiveCaption" },
            "& .name-column--cell": {
              color: colors.grey[100],
              fontSize: "13px",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
              backgroundColor: colors.blueAccent[500],
            },
            "& .MuiDataGrid-virtualScrollbar": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[800],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
            "& .MuiCheckbox-root": {
              color: `${colors.blueAccent[200]} !important`,
            },
            "& .observation-column--cell": {
              textOverflow: "unset",
            },
          }}
        >
          <DataGrid
            rows={tableRows}
            columns={columns}
            checkboxSelection
            rowHeight={100}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={(newModel) => {
              setPaginationModel(newModel);
            }}
            onRowSelectionModelChange={(row) => {
              setSelectedRows([...row]);
            }}
            pagination
            slots={{
              toolbar: () =>
                CustomToolbar({
                  selectedRows,
                  onDelete: handleDelete,
                }),
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      </Box>
    </CreateTableContext.Provider>
  );
}

export default IssueTrackingTable;
