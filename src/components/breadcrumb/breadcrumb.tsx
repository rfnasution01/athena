import { HandleTitle } from '@/libs/helpers/handle-title'
import { usePathname } from '@/libs/hooks/usePathname'

export function BreadCrumb() {
  const { secondPathname } = usePathname()

  return (
    <div className="flex items-center justify-between gap-32">
      <HandleTitle secondPathName={secondPathname} />
    </div>
  )
}
