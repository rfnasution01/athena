import { Link } from 'react-router-dom'

export function AsideLogo({ aktor }: { aktor: string }) {
  return (
    <Link to="/" className="flex items-center gap-12">
      <img src="/img/logo.png" alt="Nero" className="h-[7rem]" />
      <p className="font-mono text-[5rem]">
        <span className="font-bold">Nero</span>
        {aktor}
      </p>
    </Link>
  )
}
