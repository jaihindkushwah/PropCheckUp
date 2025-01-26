// import * as React from 'react';
import { DataGrid, GridPaginationModel, GridRowId } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { IIssueTrackingData } from "../../../interface/issue";
import { IssueTrackingData } from "../../../shared/data/dummyData";

import { createContext, useState } from "react";
import EditModalForm from "./EditModalForm";
import { CustomToolbar } from "./CustomToolbar";
import { columns } from "./columns";

// Custom Toolbar with Delete Button

export const CreateTableContext = createContext({
  onDelete: (_rowId: GridRowId) => {},
  onEdit: (_row: IIssueTrackingData) => {},
  isVirtualization: false,
  setIsVirtualization: (_value: boolean) => {},
});

function IssueTrackingTable() {
  const [tableRows, setTableRows] =
    useState<IIssueTrackingData[]>(IssueTrackingData);
  const [isVirtualization, setIsVirtualization] = useState(false);
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
      value={{
        onDelete: onSingleDelete,
        onEdit: onEditHandler,
        isVirtualization,
        setIsVirtualization,
      }}
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
              // height: "100px",
            },
          }}
        >
          <DataGrid
            disableVirtualization={!isVirtualization}
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
