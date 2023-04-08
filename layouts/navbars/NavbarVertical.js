// import node module libraries
import { Fragment, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive';
import {
	ListGroup,
	Accordion,
	Card,
	Image,
	Badge,
	useAccordionButton,
	AccordionContext
} from 'react-bootstrap';

// import simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import routes file
import { DashboardMenu } from 'routes/DashboardRoutes';

const NavbarVertical = (props) => {
	const location = useRouter();

	const CustomToggle = ({ children, eventKey, icon }) => {
		const { activeEventKey } = useContext(AccordionContext);
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			console.log('totally custom!')
		);
		const isCurrentEventKey = activeEventKey === eventKey;
		return (
			<li className="nav-item">
				<Link
					href="#"
					className="nav-link "
					onClick={decoratedOnClick}
					data-bs-toggle="collapse"
					data-bs-target="#navDashboard"
					aria-expanded={isCurrentEventKey ? true : false}
					aria-controls="navDashboard">
					{icon ? <i className={`nav-icon fe fe-${icon} me-2`}></i> : ''}{' '}
					{children}
				</Link>
			</li>
		);
	};
	const CustomToggleLevel2 = ({ children, eventKey, icon }) => {
		const { activeEventKey } = useContext(AccordionContext);
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			console.log('totally custom!')
		);
		const isCurrentEventKey = activeEventKey === eventKey;
		return (
			(<Link
				href="#"
				className="nav-link "
				onClick={decoratedOnClick}
				data-bs-toggle="collapse"
				data-bs-target="#navDashboard"
				aria-expanded={isCurrentEventKey ? true : false}
				aria-controls="navDashboard">
				{children}
			</Link>)
		);
	};

	const generateLink = (item) => {
		return (
			(<Link
				href={item.link}
				className={`nav-link ${location.pathname === item.link ? 'active' : ''
					}`}
				onClick={(e) =>
					isMobile ? props.onClick(!props.showMenu) : props.showMenu
				}>

				{item.name}
				{''}
				{item.badge ? (
					<Badge
						className="ms-1"
						bg={item.badgecolor ? item.badgecolor : 'primary'}
					>
						{item.badge}
					</Badge>
				) : (
					''
				)}

			</Link>)
		);
	};

	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<Fragment>
			<SimpleBar style={{ maxHeight: '100vh' }}>
				<div className="nav-scroller">
					<Link href="/" className="navbar-brand">
						<Image src="/images/brand/logo/logo.svg" alt="" />
					</Link>
				</div>
				{/* Dashboard Menu */}
				<Accordion
					defaultActiveKey="0"
					as="ul"
					className="navbar-nav flex-column"
				>
					{DashboardMenu.map(function (menu, index) {
						if (menu.grouptitle) {
							return (
								<Card bsPrefix="nav-item" key={index}>
									{/* group title item */}
									<div className="navbar-heading">{menu.title}</div>
									{/* end of group title item */}
								</Card>
							);
						} else {
							if (menu.children) {
								return (
									<Fragment key={index}>
										{/* main menu / menu level 1 / root items */}
										<CustomToggle eventKey={index} icon={menu.icon}>
											{menu.title}
											{menu.badge ? (
												<Badge
													className="ms-1"
													bg={menu.badgecolor ? menu.badgecolor : 'primary'}
												>
													{menu.badge}
												</Badge>
											) : (
												''
											)}
										</CustomToggle>
										<Accordion.Collapse
											eventKey={index}
											as="li"
											bsPrefix="nav-item"
										>
											<ListGroup
												as="ul"
												bsPrefix=""
												className="nav flex-column"
											>
												{menu.children.map(function (menuItem, menuItemIndex) {
													if (menuItem.children) {
														return (
															<ListGroup.Item
																as="li"
																bsPrefix="nav-item"
																key={menuItemIndex}
															>
																{/* second level menu started  */}
																<Accordion
																	defaultActiveKey="0"
																	className="navbar-nav flex-column"
																>
																	<CustomToggleLevel2 eventKey={0}>
																		{menuItem.title}
																		{menuItem.badge ? (
																			<Badge
																				className="ms-1"
																				bg={
																					menuItem.badgecolor
																						? menuItem.badgecolor
																						: 'primary'
																				}
																			>
																				{menuItem.badge}
																			</Badge>
																		) : (
																			''
																		)}
																	</CustomToggleLevel2>
																	<Accordion.Collapse
																		eventKey={0}
																		bsPrefix="nav-item"
																	>
																		<ListGroup
																			as="ul"
																			bsPrefix=""
																			className="nav flex-column"
																		>
																			{/* third level menu started  */}
																			{menuItem.children.map(function (
																				subMenuItem,
																				subMenuItemIndex
																			) {
																				return (
																					<ListGroup.Item
																						key={subMenuItemIndex}
																						as="li"
																						bsPrefix="nav-item"
																					>
																						{generateLink(subMenuItem)}
																					</ListGroup.Item>
																				);
																			})}
																			{/* end of third level menu  */}
																		</ListGroup>
																	</Accordion.Collapse>
																</Accordion>
																{/* end of second level menu */}
															</ListGroup.Item>
														);
													} else {
														return (
															<ListGroup.Item
																as="li"
																bsPrefix="nav-item"
																key={menuItemIndex}
															>
																{/* first level menu items */}
																{generateLink(menuItem)}
																{/* end of first level menu items */}
															</ListGroup.Item>
														);
													}
												})}
											</ListGroup>
										</Accordion.Collapse>
										{/* end of main menu / menu level 1 / root items */}
									</Fragment>
								);
							} else {
								return (
									<Card bsPrefix="nav-item" key={index}>
										{/* menu item without any childern items like Documentation and Changelog items*/}
										<Link
											href={menu.link}
											className={`nav-link ${location.pathname === menu.link ? 'active' : ''
												}`}>

											{typeof menu.icon === 'string' ? (
												<i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
											) : (
												menu.icon
											)}
											{menu.title}
											{menu.badge ? (
												<Badge
													className="ms-1"
													bg={menu.badgecolor ? menu.badgecolor : 'primary'}
												>
													{menu.badge}
												</Badge>
											) : (
												''
											)}

										</Link>
										{/* end of menu item without any childern items */}
									</Card>
								);
							}
						}
					})}
				</Accordion>
				{/* end of Dashboard Menu */}
				
			</SimpleBar>
		</Fragment>
	);
};

export default NavbarVertical;
