'use client'
// import node module libraries
import { Fragment, useContext } from 'react';
import Link from 'next/link';
import { usePathname   } from 'next/navigation'
import { useMediaQuery } from 'react-responsive';
import {
	ListGroup,
	Card,
	Image,
	Badge,
} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

// import simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import routes file
import { DashboardMenu } from 'routes/DashboardRoutes';

const NavbarVertical = (props) => {
	const location = usePathname ()
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
				className={`nav-link ${location === item.link ? 'active' : ''
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
				<Accordion defaultActiveKey="0" as="ul" className="navbar-nav flex-column">
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
										{/* main menu / root menu level / root items */}
										<CustomToggle eventKey={index} icon={menu.icon}>
											{menu.title}
											{menu.badge ? (
												<Badge className="ms-1" bg={menu.badgecolor ? menu.badgecolor : 'primary'}>
													{menu.badge}
												</Badge>
											) : ('')}
										</CustomToggle>
										<Accordion.Collapse eventKey={index} as="li" bsPrefix="nav-item">
											<ListGroup as="ul" bsPrefix="" className="nav flex-column">
												{menu.children.map(function (menuLevel1Item, menuLevel1Index) {
													if (menuLevel1Item.children) {
														return (
															<ListGroup.Item as="li" bsPrefix="nav-item" key={menuLevel1Index}>
																{/* first level menu started  */}
																<Accordion defaultActiveKey="0" className="navbar-nav flex-column">
																	<CustomToggleLevel2 eventKey={0}>
																		{menuLevel1Item.title}
																		{menuLevel1Item.badge ? (
																			<Badge className="ms-1" bg={
																					menuLevel1Item.badgecolor ? menuLevel1Item.badgecolor : 'primary'
																				}>
																				{menuLevel1Item.badge}
																			</Badge>
																		) : ('')}
																	</CustomToggleLevel2>
																	<Accordion.Collapse eventKey={0} bsPrefix="nav-item">
																		<ListGroup as="ul" bsPrefix="" className="nav flex-column">
																			{/* second level menu started  */}
																			{menuLevel1Item.children.map(function (menuLevel2Item,menuLevel2Index) {
																				if (menuLevel2Item.children) {
																					return (
																						<ListGroup.Item as="li" bsPrefix="nav-item" key={menuLevel2Index}>
																							{/* second level accordion menu started  */}
																							<Accordion defaultActiveKey="0" className="navbar-nav flex-column">
																								<CustomToggleLevel2 eventKey={0}>
																									{menuLevel2Item.title}
																									{menuLevel2Item.badge ? (
																										<Badge className="ms-1" bg={
																												menuLevel2Item.badgecolor ? menuLevel2Item.badgecolor : 'primary'
																											}>
																											{menuLevel2Item.badge}
																										</Badge>
																									) : ('')}
																								</CustomToggleLevel2>
																								<Accordion.Collapse eventKey={0} bsPrefix="nav-item">
																									<ListGroup as="ul" bsPrefix="" className="nav flex-column">
																										{/* third level menu started  */}
																										{menuLevel2Item.children.map(function (menuLevel3Item,menuLevel3Index) {
																											return (
																												<ListGroup.Item key={menuLevel3Index} as="li" bsPrefix="nav-item">
																													{generateLink(menuLevel3Item)}
																												</ListGroup.Item>
																											);
																										})}
																										{/* end of third level menu  */}
																									</ListGroup>
																								</Accordion.Collapse>
																							</Accordion>
																							{/* end of second level accordion */}
																						</ListGroup.Item>
																					);
																				} else {
																					return (
																						<ListGroup.Item key={menuLevel2Index} as="li" bsPrefix="nav-item">
																							{generateLink(menuLevel2Item)}
																						</ListGroup.Item>
																					);
																				}
																				
																			})}
																			{/* end of second level menu  */}
																		</ListGroup>
																	</Accordion.Collapse>
																</Accordion>
																{/* end of first level menu */}
															</ListGroup.Item>
														);
													} else {
														return (
															<ListGroup.Item as="li" bsPrefix="nav-item" key={menuLevel1Index}>
																{/* first level menu items */}
																{generateLink(menuLevel1Item)}
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
										<Link href={menu.link} className={`nav-link ${location === menu.link ? 'active' : ''} ${menu.title === 'Download' ? 'bg-primary text-white' : ''}`}>
											{typeof menu.icon === 'string' ? (
												<i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
											) : (menu.icon)}
											{menu.title} 
											{menu.badge ? (
												<Badge className="ms-1" bg={menu.badgecolor ? menu.badgecolor : 'primary'}>
													{menu.badge}
												</Badge>
											) : ('')}
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
