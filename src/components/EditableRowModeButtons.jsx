export default function EditableRowModeButtons({ isEditing }) {
  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button>Delete</button>
      <button>Edit</button>
    </td>
  );
}
