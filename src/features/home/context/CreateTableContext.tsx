import { GridRowId } from "@mui/x-data-grid";

import { IIssueTrackingData } from "../../../interface/issue";

import { createContext } from "react";

export const CreateTableContext = createContext({
  onDelete: (_rowId: GridRowId, _id?: string) => {},
  onEdit: (_row: IIssueTrackingData) => {},
  isVirtualization: false,
  setIsVirtualization: (_value: boolean) => {},
});
