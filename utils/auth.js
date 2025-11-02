import axios from 'axios'
import { toast } from 'react-toastify'

export const logout = async () => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/Auth/logout`)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    toast.success('Logged out successfully')
    window.location.href = '/'
  } catch (error) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    toast.error('Logout failed')
    window.location.href = '/'
  }
}