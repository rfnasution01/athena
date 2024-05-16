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
  },
  {
    title: 'Pengelola Konten',
    icon: <AppWindow size={16} />,
  },
  {
    title: 'Monitoring',
    icon: <Airplay size={16} />,
  },
  {
    title: 'Bantuan',
    icon: <CircleHelp size={16} />,
  },
  {
    title: 'Feedback',
    icon: <MessageCircleQuestion size={16} />,
  },
]
