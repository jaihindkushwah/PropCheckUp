import {
  GridCsvExportMenuItem,
  GridPrintExportMenuItem,
} from "@mui/x-data-grid";
import { CreateTableContext } from "./Table";
import { useCallback, useContext } from "react";

function ExportToolBar() {
  const { setIsVirtualization } = useContext(CreateTableContext);
  const handleVirtualization = useCallback(() => {
    setIsVirtualization(false);
    setTimeout(() => {
      setIsVirtualization(true);
    }, 1000);
  }, [setIsVirtualization]);
  return (
    <>
      <GridCsvExportMenuItem
        hideMenu={() => {
          console.log("Hello world");
        }}
        options={{ disableToolbarButton: true }}
      />
      <GridPrintExportMenuItem
        hideMenu={handleVirtualization}
        options={{
          disableToolbarButton: true,
          hideFooter: true,
          hideToolbar: true,
          //   copyStyles: true,
          pageStyle() {
            return `
        @page {
          margin: 5mm 4mm  ;
          size: auto;
          /* Allow the content to flow across multiple pages */
          mso-page-space: 2mm;
        }

        /* Ensure the grid content is fully visible and prints properly */
        .MuiDataGrid-root {
          overflow: visible !important;
          width: 100% !important;
        }

        .MuiDataGrid-columnHeader {
          overflow: visible !important;
          white-space: normal !important;
          word-wrap: break-word !important;
          line-height: 1.5 !important;
          height: auto !important;
          display: block !important;
          max-width: 150px !important; /* Restrict cell width */
          }
        .MuiDataGrid-cell {
          text-overflow: clip !important; /* Remove ellipsis */
          white-space: normal !important; /* Allow text to wrap */
          overflow: visible !important; /* Show all content */
          max-width: 150px !important; /* Restrict cell width */
          word-wrap: break-word !important; /* Wrap long words */
          word-break: break-word !important; /* Break overflowing words */
          line-height: 1.5 !important; /* Adjust line height for readability */
          height: auto !important; /* Allow dynamic height for content */
          display: block !important; /* Ensure content block respects wrapping */
        }

        .MuiDataGrid-row {
          align-items: stretch !important; /* Ensure rows grow dynamically */
          height: auto !important; /* Allow rows to grow */
        }

        .MuiDataGrid-virtualScroller {
          overflow: visible !important; /* Ensure no content is hidden */
        }

        /* Adjust virtual scroller content to display properly on print */
        .MuiDataGrid-virtualScrollerContent {
          position: relative !important;
          transform: none !important;
        }

        /* Allow content to break across multiple pages */
        body {
          overflow: visible !important;
          page-break-before: auto !important;
          page-break-after: auto !important;
        }

        /* Ensure each row is not cut off */
        .MuiDataGrid-row {
          page-break-inside: avoid !important;
        }
      `;
          },
        }}
      />
    </>
  );
}

export default ExportToolBar;
