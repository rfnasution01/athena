import {
  Aperture,
  BookCheck,
  FilePen,
  FolderArchive,
  HelpCircle,
  LayoutDashboard,
  Monitor,
} from 'lucide-react'

export const SiswaNavigation = [
  {
    title: 'Beranda',
    icon: <LayoutDashboard size={16} />,
  },
  {
    title: 'Materi',
    icon: <FolderArchive size={16} />,
  },
  {
    title: 'Tugas',
    icon: <FilePen size={16} />,
    sub: ['Penugasan', 'Kumpulkan Tugas'],
  },
  {
    title: 'Ujian',
    icon: <BookCheck size={16} />,
    sub: ['Tes', 'Hasil'],
  },
  {
    title: 'Forum',
    icon: <Aperture size={16} />,
    sub: ['Diskusi', 'Konsultasi'],
  },
  {
    title: 'Monitoring',
    icon: <Monitor size={16} />,
    sub: ['Kemajuan', 'Laporan'],
  },
  {
    title: 'Bantuan',
    icon: <HelpCircle size={16} />,
    sub: ['Bantuan Belajar', 'Bantuan Teknis'],
  },
]
