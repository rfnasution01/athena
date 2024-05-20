import { InformasiSiswa } from '../dummy/siswa/informasi-siswa'
import { capitalizeFirstLetterFromLowercase } from './format-text'

export function HandleTitle({ secondPathName }: { secondPathName: string }) {
  switch (secondPathName) {
    case undefined:
      return (
        <p className="text-[3rem] phones:text-[3.2rem]">
          Selamat Datang,{' '}
          <span className="font-bold">{InformasiSiswa?.nama}</span> !!
        </p>
      )
    default:
      return (
        <p className="text-[3rem] phones:text-[3.2rem]">
          {capitalizeFirstLetterFromLowercase(secondPathName)}
        </p>
      )
  }
}
