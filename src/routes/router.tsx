import { createBrowserRouter } from 'react-router-dom'
import {
  AdminLayout,
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
  },
  {
    path: '/guru',
    element: <GuruLayout />,
  },
  {
    path: '/siswa',
    element: <SiswaLayout />,
  },
  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
