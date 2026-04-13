import UserCard from "./UserCard";

// REVIEW: Returning `null` when empty hides the list region entirely; pairing with `clearUsers` message is OK, but first visit shows nothing — consider an explicit empty state component.
function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) return null;

  return (
    <div className="users-section">
      {users.map((user) => (
        <UserCard
          key={user._id || user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default UserList;
