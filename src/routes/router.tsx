import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout, ComingSoonPage, RootLayout } from './loadables'

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
    path: '*',
    element: <ComingSoonPage />,
  },
])
