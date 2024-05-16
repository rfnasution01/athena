import { SiswaNavigation } from '@/libs/dummy/siswa-navigation'
import MainLayout from '../root-layout/main-layout'

export default function SiswaLayout() {
  return <MainLayout navigation={SiswaNavigation} aktor="siswa" />
}
