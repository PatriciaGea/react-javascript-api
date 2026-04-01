import UserCard from './UserCard'

function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) return null

  return (
    <div className='users-section'>
      {users.map((user) => (
        <UserCard
          key={user._id || user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default UserList
