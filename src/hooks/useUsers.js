import { useState, useRef } from 'react'
import api from '../services/api'

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const messageRef = useRef(null)

  function showMessage(text) {
    setMessage(text)
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
    setTimeout(() => setMessage(''), 3000)
  }

  async function getUsers() {
    setLoading(true)
    try {
      const response = await api.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error loading users:', error)
      showMessage('Error loading users')
    }
    setLoading(false)
  }

  async function createUser({ name, email, age }) {
    if (!name || !email || !age) {
      showMessage('Please fill in all fields to add a user')
      return false
    }

    setLoading(true)
    try {
      await api.post('/users', { name, email, age: Number(age) })
      showMessage('User added successfully')
      await getUsers()
      return true
    } catch (error) {
      showMessage('Error adding user')
      return false
    } finally {
      setLoading(false)
    }
  }

  async function searchUsers({ name, email, age }) {
    if (!name && !email && !age) {
      showMessage('Please fill in at least one field to search')
      return
    }

    setLoading(true)
    try {
      const params = {}
      if (name) params.name = name
      if (email) params.email = email
      if (age) params.age = age

      const response = await api.get('/users', { params })
      setUsers(response.data)

      if (response.data.length === 0) {
        showMessage('No users found with the search criteria')
      } else {
        showMessage(`Found ${response.data.length} user(s)`)
      }
    } catch (error) {
      showMessage('Error searching users')
    }
    setLoading(false)
  }

  async function showAllUsers() {
    setLoading(true)
    try {
      const response = await api.get('/users')
      setUsers(response.data)
      showMessage(`Showing all users: ${response.data.length} total`)
    } catch (error) {
      showMessage('Error loading users')
    }
    setLoading(false)
  }

  async function deleteUser(id) {
    setLoading(true)
    try {
      await api.delete(`/users/${id}`)
      setUsers(users.filter(user => (user._id || user.id) !== id))
      showMessage('User deleted successfully')
    } catch (error) {
      showMessage('Error deleting user')
    }
    setLoading(false)
  }

  async function updateUser(id, { name, email, age }) {
    if (!name && !email && !age) {
      showMessage('Please fill in at least one field to update')
      return false
    }

    setLoading(true)
    try {
      const data = {}
      if (name) data.name = name
      if (email) data.email = email
      if (age) data.age = Number(age)

      await api.put(`/users/${id}`, data)

      setUsers(users.map(user =>
        (user._id || user.id) === id ? { ...user, ...data } : user
      ))
      showMessage('User updated successfully')
      return true
    } catch (error) {
      showMessage('Error updating user')
      return false
    } finally {
      setLoading(false)
    }
  }

  function clearUsers() {
    setUsers([])
    showMessage('Search cleared')
  }

  return {
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
  }
}
