"use client"
import 'styles/theme.scss';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

// export const metadata = {
//     title: 'Dash UI - Next.Js Admin Dashboard Template',
//     description: 'Dash UI - Next JS admin dashboard template is free and available on GitHub. Create your stunning web apps with our Free Next js template. An open-source admin dashboard built using the new router, server components, and everything new in Next.js 13.',
//     keywords: 'Dash UI, Next.js 13, Admin dashboard, admin template, web apps, bootstrap 5, admin theme'
// }

export default function RootLayout({ children }) {
    const location = usePathname ()
    return (
        <html lang="en">
            <body className='bg-light'>
                {(location === "/login" || location === "/signup") ? <Navbar /> : null }
                {children}
            </body>
        </html>
    )
}
