import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------

export const RootLayout = loadable(() => import('@/layouts/root-layout'))
export const AdminLayout = loadable(() => import('@/layouts/admin-layout'))

// ------------------
// ----- Pages -----
// ------------------

export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
