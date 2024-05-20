import { createBrowserRouter } from 'react-router-dom'
import {
  AdminLayout,
  BerandaPage,
  ComingSoonPage,
  GuruLayout,
  RootLayout,
  SiswaLayout,
} from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <ComingSoonPage />,
      },
      {
        path: 'manajemen-pengguna',
        element: <ComingSoonPage />,
      },
      {
        path: 'pengelola-konten',
        element: <ComingSoonPage />,
      },
      {
        path: 'monitoring',
        element: <ComingSoonPage />,
      },
      {
        path: 'bantuan',
        element: <ComingSoonPage />,
      },
      {
        path: 'feedback',
        element: <ComingSoonPage />,
      },
    ],
  },
  {
    path: '/guru',
    element: <GuruLayout />,
    children: [
      {
        path: '',
        element: <ComingSoonPage />,
      },
      {
        path: 'kelola-materi',
        element: <ComingSoonPage />,
      },
      {
        path: 'tugas',
        element: <ComingSoonPage />,
      },
      {
        path: 'forum',
        element: <ComingSoonPage />,
      },
      {
        path: 'monitoring',
        element: <ComingSoonPage />,
      },
      {
        path: 'kolaborasi',
        element: <ComingSoonPage />,
      },
      {
        path: 'bantuan',
        element: <ComingSoonPage />,
      },
    ],
  },
  {
    path: '/siswa',
    element: <SiswaLayout />,
    children: [
      {
        path: '',
        element: <BerandaPage />,
      },
      {
        path: 'materi',
        element: <ComingSoonPage />,
      },
      {
        path: 'tugas',
        element: <ComingSoonPage />,
      },
      {
        path: 'ujian',
        element: <ComingSoonPage />,
      },
      {
        path: 'forum',
        element: <ComingSoonPage />,
      },
      {
        path: 'monitoring',
        element: <ComingSoonPage />,
      },
      {
        path: 'bantuan',
        element: <ComingSoonPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
