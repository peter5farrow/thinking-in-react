import formatCurrency from "../utils/formatCurrency.js";

export default function EditableRateCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
      $
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>{formatCurrency(value)}/hr</td>
  );
}
