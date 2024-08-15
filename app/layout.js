// import theme style scss file
import Link from 'next/link';
import 'styles/theme.scss';

export const metadata = {
    title: 'Dash UI - Next.Js Admin Dashboard Template',
    description: 'Dash UI - Next JS admin dashboard template is free and available on GitHub. Create your stunning web apps with our Free Next js template. An open-source admin dashboard built using the new router, server components, and everything new in Next.js 13.',
    keywords: 'Dash UI, Next.js 13, Admin dashboard, admin template, web apps, bootstrap 5, admin theme'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}

                <Link href="https://bit.ly/3YoCCRH" target="_blank" className="btn btn-dark btn-float-button m-5 fs-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"
                        strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-share"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>{' '} Buy Now
                </Link>
            </body>
        </html>
    )
}
