// import node module libraries
import { Menu } from 'react-feather';
import Link from 'next/link';
import {
	Nav,
	Navbar,
	Form
} from 'react-bootstrap';

// import sub components
import QuickMenu from 'layouts/QuickMenu';

const NavbarTop = (props) => {
	const handleLogout = () => {
		localStorage.setItem('isUserLogged', false); // Set isUserLogged to false when logging out
	};
	return (
		<Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
			<div className='d-flex justify-content-between w-100'>
				<div className="d-flex align-items-center">
					<Link
						href="#"
						id="nav-toggle"
						className="nav-icon me-2 icon-xs"
						onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}>
						<Menu size="18px" />
					</Link>
					<div className="ms-lg-3 d-none d-md-none d-lg-block">
						{/* Search Form */}
						<Form className="d-flex align-items-center">
							<Form.Control type="search" placeholder="Search" />
						</Form>
					</div>
				</div>
				{/* Quick Menu */}
				<Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
					<QuickMenu />
					<a className="nav-link active bg-warning rounded-2 ms-2" aria-current="page" href="/login" onClick={handleLogout}>Logout</a>
				</Nav>
			</div>
		</Navbar>
	);
};

export default NavbarTop;
