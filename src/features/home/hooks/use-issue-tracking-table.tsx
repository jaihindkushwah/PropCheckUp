// import * as React from 'react';
import { GridPaginationModel, GridRowId } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { IIssueTrackingData } from "../../../interface/issue";
import { IssueTrackingData } from "../../../shared/data/dummyData";
import { useState } from "react";

export const useIssueTrackingTable = () => {
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
  return {
    tableRows,
    setTableRows,
    isVirtualization,
    setIsVirtualization,
    selectedEditRow,
    setSelectedEditRow,
    isModelOpen,
    setIsModelOpen,
    selectedRows,
    setSelectedRows,
    paginationModel,
    setPaginationModel,
    colors,
    handleDelete,
    onSingleDelete,
    onEditHandler,
    handleOnSubmit,
  };
};
