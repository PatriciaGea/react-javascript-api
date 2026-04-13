import Trash from "../assets/trash.svg";
import UserField from "./UserField";

// REVIEW: Delete is immediate with no confirmation — easy to mis-tap; add a confirm dialog or undo pattern for destructive actions.
// REVIEW: Edit button uses emoji only (`✏️`) — provide `aria-label` for assistive tech.
function UserCard({ user, onEdit, onDelete }) {
  const id = user._id || user.id;

  return (
    <div className="user-card">
      <div>
        <UserField label="Name:" value={user.name} />
        <UserField label="Email:" value={user.email} />
        <UserField label="Age:" value={user.age} />
      </div>

      <div className="card-actions">
        <button className="btn-edit-card" onClick={() => onEdit(user)}>
          ✏️
        </button>
        <button className="btn-trash" onClick={() => onDelete(id)}>
          <img src={Trash} alt="Delete" className="icon" />
        </button>
      </div>
    </div>
  );
}

export default UserCard;
