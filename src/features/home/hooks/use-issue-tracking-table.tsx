// import * as React from 'react';
// import { IssueTrackingData } from "../../../shared/data/dummyData";
import lodash from "lodash";
import { GridPaginationModel, GridRowId } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { IIssueTrackingData } from "../../../interface/issue";
import { useEffect, useState } from "react";
import {
  deleteIssueTrackingData,
  deleteManyIssueTrackingDataByIds,
  getAllIssueTrackingData,
  updateIssueTrackingData,
} from "../../../services/issueApi";

export const useIssueTrackingTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableRows, setTableRows] = useState<IIssueTrackingData[]>([]);
  const [isVirtualization, setIsVirtualization] = useState(false);
  const [selectedEditRow, setSelectedEditRow] = useState<IIssueTrackingData>();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<IIssueTrackingData[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getAllIssueTrackingData({});
        setTableRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete the selected rows?")) {
      await handleDeleteMany();
    }
  };
  const handleDeleteMany = async () => {
    try {
      setIsLoading(true);
      const selectedIds = selectedRows.map((row) => row._id);
      const selectedRowIds = new Set(selectedRows.map((row) => row.id));
      // console.log({ selectedIds, selectedRowIds });
      const response = await deleteManyIssueTrackingDataByIds(selectedIds);
      if (response.success == true) {
        const updatedRows = tableRows
          .filter((row) => !selectedRowIds.has(row.id))
          .map((row, index) => ({ ...row, id: index + 1 }));
        setTableRows(updatedRows);
        setSelectedRows([]);
      }
    } catch (error) {
      console.error("Error deleting rows:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const onSingleDelete = async (rowId: GridRowId, id?: string) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      try {
        setIsLoading(true);
        const response = await deleteIssueTrackingData(id || "");
        if (response.data._id) {
          const updatedRows = tableRows
            .filter((row) => row.id !== rowId)
            .map((row, index) => ({ ...row, id: index + 1 }));
          setTableRows(updatedRows);
        }
        console.log(response);
      } catch (error) {
        console.error("Error deleting row:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const onEditHandler = (row: IIssueTrackingData) => {
    setIsModelOpen(true);
    setSelectedEditRow(row);
  };
  const handleEditOnSubmit = async (data: IIssueTrackingData) => {
    try {
      setIsLoading(true);
      const newData = lodash.omit(data, ["_id", "id", "__v"]);
      const response = await updateIssueTrackingData(
        data._id,
        newData as IIssueTrackingData
      );
      if (response.data._id) {
        const updatedRows = tableRows.map((row) =>
          row.id === data.id ? data : row
        );
        setTableRows(updatedRows);
        setIsModelOpen(false);
      }
      console.log(response);
      // .omit(item, ["_id", "id"])
    } catch (error) {
      console.error("Error updating row:", error);
    } finally {
      setIsLoading(false);
    }
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
    handleEditOnSubmit,
    isLoading,
    setIsLoading,
  };
};
