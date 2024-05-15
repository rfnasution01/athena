import { Link } from 'react-router-dom'

export function RootMain() {
  return (
    <main className="flex h-full w-full items-center justify-center font-sf-pro text-[2rem] phones:text-[2.4rem]">
      <div className="grid w-2/3 grid-cols-12 gap-32">
        {/* --- Admin --- */}
        <Link
          to="/admin"
          className="col-span-4 transform-gpu rounded-2xl bg-sky-500 p-32 text-white shadow-md duration-300 hover:-translate-y-32 hover:cursor-pointer phones:col-span-12"
        >
          <div className="flex items-center gap-32">
            <div className="flex flex-1 flex-col items-start justify-start gap-8">
              <p className="text-[4rem] font-bold">Admin</p>
              <p className="text-[2.4rem]">Masuk sebagai Admin</p>
            </div>
            <span className="rounded-2xl bg-white p-12">
              <img src="/icon/admin.svg" alt="Admin" className="h-[6rem]" />
            </span>
          </div>
        </Link>
        {/* --- Guru --- */}
        <Link
          to="/guru"
          className="col-span-4 transform-gpu rounded-2xl bg-fuchsia-500 p-32 text-white shadow-md duration-300 hover:-translate-y-32 hover:cursor-pointer phones:col-span-12"
        >
          <div className="flex items-center gap-32">
            <div className="flex flex-1 flex-col items-start justify-start gap-8">
              <p className="text-[4rem] font-bold">Guru</p>
              <p className="text-[2.4rem]">Masuk sebagai Guru</p>
            </div>
            <span className="rounded-2xl bg-white p-12">
              <img src="/icon/teacher.svg" alt="Guru" className="h-[6rem]" />
            </span>
          </div>
        </Link>
        {/* --- Siswa --- */}
        <Link
          to="/siswa"
          className="col-span-4 transform-gpu rounded-2xl bg-lime-500 p-32 text-white shadow-md duration-300 hover:-translate-y-32 hover:cursor-pointer phones:col-span-12"
        >
          <div className="flex items-center gap-32">
            <div className="flex flex-1 flex-col items-start justify-start gap-8">
              <p className="text-[4rem] font-bold">Siswa</p>
              <p className="text-[2.4rem]">Masuk sebagai Siswa</p>
            </div>
            <span className="rounded-2xl bg-white p-12">
              <img src="/icon/students.svg" alt="Siswa" className="h-[6rem]" />
            </span>
          </div>
        </Link>
      </div>
    </main>
  )
}
