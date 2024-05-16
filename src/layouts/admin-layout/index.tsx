import MainLayout from '../root-layout/main-layout'
import { AdminNavigation } from '@/libs/dummy/admin-navigation'

export default function AdminLayout() {
  return <MainLayout navigation={AdminNavigation} aktor="admin" />
}
