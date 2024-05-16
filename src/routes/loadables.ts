import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------

export const RootLayout = loadable(() => import('@/layouts/root-layout'))
export const AdminLayout = loadable(() => import('@/layouts/admin-layout'))
export const GuruLayout = loadable(() => import('@/layouts/guru-layout'))
export const SiswaLayout = loadable(() => import('@/layouts/siswa-layout'))

// ------------------
// ----- Pages -----
// ------------------

export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
