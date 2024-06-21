import "./InvoiceTable.css";
import EditableDescriptionCell from "./EditableDescriptionCell";
import EditableHoursCell from "./EditableHoursCell";
import EditableRateCell from "./EditableRateCell";
import EditableRowModeButtons from "./EditableRowModeButtons";
import InvoiceTableAddButton from "./InvoiceTableAddButton";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";

function InvoiceTable() {
  return (
    <table>
      <thead>
        <InvoiceTableHeader />
      </thead>
      <tbody>
        <InvoiceTableRow
          initialInvoiceData={{
            description: "Web Development",
            rate: 25,
            hours: 10,
          }}
          initialIsEditing={false}
        />
        <InvoiceTableRow
          initialInvoiceData={{
            description: "Copywriting",
            rate: 20,
            hours: 8,
          }}
          initialIsEditing={true}
        />
      </tbody>
      <tfoot>
        <InvoiceTableAddButton />
      </tfoot>
    </table>
  );
}

export default InvoiceTable;
