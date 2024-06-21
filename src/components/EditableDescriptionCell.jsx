export default function EditableDescriptionCell({ value, isEditing }) {
  return isEditing ? (
    <td>
      <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}
