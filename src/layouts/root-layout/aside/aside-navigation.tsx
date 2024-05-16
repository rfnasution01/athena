import { convertToSlug } from '@/libs/helpers/format-text'
import { usePathname } from '@/libs/hooks/usePathname'
import { NavigationType } from '@/libs/types/navigation-type'
import { Link } from 'react-router-dom'

export function AsideNavigation({
  aktor,
  navigation,
}: {
  aktor: 'admin' | 'siswa' | 'guru'
  navigation: NavigationType[]
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

  const isActive = `${aktor === 'admin' ? 'border-sky-500' : aktor === 'guru' ? 'border-fuchsia-500' : 'border-lime-500'} ${aktor === 'admin' ? 'text-sky-700' : aktor === 'guru' ? 'text-fuchsia-700' : 'text-lime-700'} ${aktor === 'admin' ? 'bg-sky-300' : aktor === 'guru' ? 'bg-fuchsia-300' : 'bg-lime-300'} bg-opacity-10`
  const isNotActive = `border-transparent ${aktor === 'admin' ? 'hover:text-sky-700' : aktor === 'guru' ? 'hover:text-fuchsia-700' : 'hover:text-lime-700'} ${aktor === 'admin' ? 'hover:border-sky-500' : aktor === 'guru' ? 'hover:border-fuchsia-500' : 'hover:border-lime-500'} ${aktor === 'admin' ? 'hover:bg-sky-300' : aktor === 'guru' ? 'hover:bg-fuchsia-300' : 'hover:bg-lime-300'} hover:bg-opacity-10`

  return (
    <header className="flex flex-1 flex-col gap-y-16">
      {navigation.map((item, idx) => (
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
    </header>
  )
}
