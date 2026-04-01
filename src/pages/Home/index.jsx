import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useUsers } from '../../hooks/useUsers'
import UserForm from '../../components/UserForm'
import UserList from '../../components/UserList'
import MessageBanner from '../../components/MessageBanner'

function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [editingId, setEditingId] = useState(null)
  const formRef = useRef(null)

  const {
    users,
    loading,
    message,
    messageRef,
    createUser,
    searchUsers,
    showAllUsers,
    deleteUser,
    updateUser,
    clearUsers,
  } = useUsers()

  function clearForm() {
    setName('')
    setEmail('')
    setAge('')
  }

  async function handleCreate() {
    const success = await createUser({ name, email, age })
    if (success) clearForm()
  }

  function handleSearch() {
    searchUsers({ name, email, age })
  }

  function handleClear() {
    clearForm()
    clearUsers()
  }

  function startEdit(user) {
    setEditingId(user._id || user.id)
    setName(user.name)
    setEmail(user.email)
    setAge(String(user.age))
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  async function handleUpdate() {
    const success = await updateUser(editingId, { name, email, age })
    if (success) {
      setEditingId(null)
      clearForm()
    }
  }

  function cancelEdit() {
    setEditingId(null)
    clearForm()
  }

  return (
    <div className='container'>
      <UserForm
        formRef={formRef}
        name={name}
        email={email}
        age={age}
        onNameChange={setName}
        onEmailChange={setEmail}
        onAgeChange={setAge}
        editingId={editingId}
        loading={loading}
        onSubmit={handleCreate}
        onSearch={handleSearch}
        onShowAll={showAllUsers}
        onClear={handleClear}
        onUpdate={handleUpdate}
        onCancelEdit={cancelEdit}
      />

      <MessageBanner messageRef={messageRef} message={message} loading={loading} />

      <UserList
        users={users}
        onEdit={startEdit}
        onDelete={deleteUser}
      />

      <nav className='about-link'>
        <Link to='/about'>About This Project →</Link>
      </nav>
    </div>
  )
}

export default Home