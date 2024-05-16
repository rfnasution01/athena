import { GuruNavigation } from '@/libs/dummy/guru-navigation'
import MainLayout from '../root-layout/main-layout'

export default function GuruLayout() {
  return <MainLayout navigation={GuruNavigation} aktor="guru" />
}
