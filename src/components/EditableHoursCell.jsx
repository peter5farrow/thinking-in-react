export default function EditableHoursCell({ value, isEditing }) {
  return isEditing ? (
    <td>
      <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}
