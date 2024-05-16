import { AdminNavigation } from '@/libs/dummy/admin-navigation'
import { convertToSlug } from '@/libs/helpers/format-text'
import { usePathname } from '@/libs/hooks/usePathname'
import { Link } from 'react-router-dom'

export function AsideNavigation({
  aktor,
}: {
  aktor: 'admin' | 'siswa' | 'guru'
}) {
  const { secondPathname } = usePathname()

  const isActivePage = (item) => {
    if (
      convertToSlug(item) === secondPathname ||
      (convertToSlug(item) === 'beranda' && secondPathname === undefined)
    ) {
      return true
    }
    return false
  }

  const isAdmin = 'sky'
  const isGuru = 'fuchsia'
  const isMurid = 'lime'

  const isActive = `border-${aktor === 'admin' ? isAdmin : aktor === 'guru' ? isGuru : isMurid}-500 bg-${aktor === 'admin' ? isAdmin : aktor === 'guru' ? isGuru : isMurid}-300 bg-opacity-10`
  const isNotActive = `border-transparent hover:border-${aktor === 'admin' ? isAdmin : aktor === 'guru' ? isGuru : isMurid}-500 hover:bg-${aktor === 'admin' ? isAdmin : aktor === 'guru' ? isGuru : isMurid}-300 hover:bg-opacity-10`

  return (
    <div className="flex flex-1 flex-col gap-y-16">
      {AdminNavigation.map((item, idx) => (
        <Link
          to={`${item?.title === 'Beranda' ? `/${aktor}` : `/${aktor}/${convertToSlug(item?.title)}`}`}
          className={`flex items-center gap-16 border-l-2 p-12 hover:cursor-pointer ${
            isActivePage(convertToSlug(item?.title)) ? isActive : isNotActive
          }`}
          key={idx}
        >
          <span>{item?.icon}</span>
          <p>{item?.title}</p>
        </Link>
      ))}
    </div>
  )
}
