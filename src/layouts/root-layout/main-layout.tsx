import { usePathname } from '@/libs/hooks/usePathname'
import { AsideLogo, AsideNavigation } from '../root-layout/aside'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/format-text'
import { Outlet } from 'react-router-dom'
import { NavigationType } from '@/libs/types/navigation-type'

export default function MainLayout({
  navigation,
  aktor,
}: {
  navigation: NavigationType[]
  aktor: 'admin' | 'siswa' | 'guru'
}) {
  const { firstPathname } = usePathname()

  return (
    <div className="scrollbar h-screen overflow-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 text-[2.4rem]">
      <div className="flex h-full">
        {/* --- Navigasi --- */}
        <div className="col-span-2 phones:col-span-12 phones:hidden">
          <div className="scrollbar flex h-full flex-col gap-64 bg-white p-32 shadow-sm">
            <AsideLogo
              aktor={capitalizeFirstLetterFromLowercase(firstPathname)}
            />
            <AsideNavigation aktor={aktor} navigation={navigation} />
          </div>
        </div>
        {/* --- Content --- */}
        <div className="flex flex-1 p-32">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
