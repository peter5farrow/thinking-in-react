import formatCurrency from "../utils/formatCurrency";
import EditableDescriptionCell from "./EditableDescriptionCell";
import EditableHoursCell from "./EditableHoursCell";
import EditableRateCell from "./EditableRateCell";
import EditableRowModeButtons from "./EditableRowModeButtons";

function InvoiceTableRow({ initialInvoiceData, initialIsEditing }) {
  const { description, rate, hours } = initialInvoiceData;

  return (
    <tr>
      <EditableRowModeButtons isEditing={initialIsEditing} />
      <EditableDescriptionCell
        value={description}
        isEditing={initialIsEditing}
      />
      <EditableRateCell value={rate} isEditing={initialIsEditing} />
      <EditableHoursCell value={hours} isEditing={initialIsEditing} />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
}
export default InvoiceTableRow;
