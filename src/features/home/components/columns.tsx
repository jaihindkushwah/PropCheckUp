import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ActionHandler } from "./ActionHandler";
import { GridColDef } from "@mui/x-data-grid";
import { IIssueTrackingData } from "../../../interface/issue";
export const columns: GridColDef<IIssueTrackingData>[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.3,
  },
  {
    field: "room",
    headerName: "Room",
    // flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    type: "string",
    headerAlign: "left",
    align: "left",
    width: 150,
    editable: true,
  },
  {
    field: "subType",
    headerName: "Sub Type",
    type: "string",
    headerAlign: "left",
    align: "left",
    width: 150,
    editable: true,
  },
  {
    field: "observation",
    headerName: "Observation",
    type: "string",
    headerAlign: "left",
    align: "left",
    cellClassName: "observation-column--cell",
    width: 150,
    // maxWidth: 700,
    flex: 1,
    editable: true,
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
    editable: true,
    renderCell: (params) => {
      return (
        <span
          style={{ width: "100%", height: "100%" }}
          className="group relative"
        >
          <img
            src={params.row.inspectionImg}
            style={{ width: "100%", height: "100%" }}
            className="group-hover:opacity-0"
          />

          <Link
            to={params.row.inspectionImg}
            target="_blank"
            className="absolute top-1/2 left-1/2 w-10 h-10 flex items-center justify-center dark:bg-slate-100/40  transform bg-slate-700/40 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <OpenInNewIcon className="w-10 h-10 text-blue-600" />
          </Link>
        </span>
      );
    },
  },
  {
    field: "remarks",
    headerName: "Remarks",
    type: "string",
    headerAlign: "left",
    align: "left",
    editable: true,
  },
  {
    field: "refCode1",
    headerName: "Ref Code 1",
    type: "string",
    headerAlign: "left",
    align: "left",
    editable: true,
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
