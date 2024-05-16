import {
  Aperture,
  Disc3,
  HelpCircle,
  Kanban,
  LayoutDashboard,
  Monitor,
  Scroll,
} from 'lucide-react'

export const GuruNavigation = [
  {
    title: 'Beranda',
    icon: <LayoutDashboard size={16} />,
  },
  {
    title: 'Kelola Materi',
    icon: <Kanban size={16} />,
    sub: ['Buat Materi', 'Jadwal Materi'],
  },
  {
    title: 'Tugas',
    icon: <Scroll size={16} />,
    sub: ['Penugasan', 'Penilaian'],
  },
  {
    title: 'Forum',
    icon: <Disc3 size={16} />,
    sub: ['Diskusi', 'Konsultasi'],
  },
  {
    title: 'Monitoring',
    icon: <Monitor size={16} />,
    sub: ['Kemajuan Siswa', 'Hasil Belajar'],
  },
  {
    title: 'Kolaborasi',
    icon: <Aperture size={16} />,
    sub: ['Berbagi Materi', 'Koordinasi Kegiatan'],
  },
  {
    title: 'Bantuan',
    icon: <HelpCircle size={16} />,
    sub: ['Bantuan Siswa', 'Bantuan Teknis'],
  },
]
