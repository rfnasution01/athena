import {
  Airplay,
  AppWindow,
  CircleHelp,
  LayoutDashboard,
  MessageCircleQuestion,
  User,
} from 'lucide-react'

export const AdminNavigation = [
  {
    title: 'Beranda',
    icon: <LayoutDashboard size={16} />,
  },
  {
    title: 'Manajemen Pengguna',
    icon: <User size={16} />,
    sub: ['Daftar Akun', 'Verifikasi Akun', 'Kelola Akun'],
  },
  {
    title: 'Pengelola Konten',
    icon: <AppWindow size={16} />,
    sub: ['Unggah Materi', 'Jadwal Tugas', 'Kurasi Konten'],
  },
  {
    title: 'Monitoring',
    icon: <Airplay size={16} />,
    sub: ['Aktivitas', 'Statistik'],
  },
  {
    title: 'Bantuan',
    icon: <CircleHelp size={16} />,
    sub: ['Bantuan', 'Pertanyaan'],
  },
  {
    title: 'Feedback',
    icon: <MessageCircleQuestion size={16} />,
    sub: ['Perbaikan', 'Feedback'],
  },
]
