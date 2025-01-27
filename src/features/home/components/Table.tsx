// import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import EditModalForm from "./EditModalForm";
import { CustomToolbar } from "./CustomToolbar";
import { columns } from "./columns";
import { useIssueTrackingTable } from "../hooks/use-issue-tracking-table";
import { CreateTableContext } from "../context/CreateTableContext";
import { IIssueTrackingData } from "../../../interface/issue";

// Custom Toolbar with Delete Button

function IssueTrackingTable() {
  const {
    colors,
    isModelOpen,
    onEditHandler,
    onSingleDelete,
    isVirtualization,
    setIsVirtualization,
    handleEditOnSubmit,
    selectedEditRow,
    selectedRows,
    handleDelete,
    tableRows,
    setPaginationModel,
    setIsModelOpen,
    paginationModel,
    setSelectedRows,
  } = useIssueTrackingTable();

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
          onSubmit={handleEditOnSubmit}
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
            onRowSelectionModelChange={(_row, details) => {
              setSelectedRows([
                ...details.api.getSelectedRows().values(),
              ] as IIssueTrackingData[]);
            }}
            processRowUpdate={(row) => {
              console.log(row);
              return row;
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
