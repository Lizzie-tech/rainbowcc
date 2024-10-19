import * as React from "react";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import FoundationIcon from "@mui/icons-material/Foundation";
import ActivitesButton from "./dropdownMenu/index";
import logo from "./logo.png";

const pages = [
	{ name: "Home", href: "/" },
	{ name: "Whats on", href: "/whatson" },
	{ name: "The Venue", href: "thevenue" },
	{ name: "About us", href: "aboutus" },
];

function NavBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	// const element = document.getElementById("box");
	// const handleClick = () => {
	// 	element?.scrollIntoView({ behavior: "smooth" });
	// };

	const handleOpenNavMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorEl(null);
	};

	// gradient color sx={{ background: 'linear-gradient(to right bottom, #430089, #82ffa1)' }}

	return (
		<AppBar
			position="static"
			sx={{ background: "#92CBA9" }}
		>
			{/* <Container> */}
			<Toolbar>
				{/* <FoundationIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
				{/* <Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: "none", md: "flex" },
						color: "inherit",
						textDecoration: "none",
						flexGrow: 1,
						my: 2,
					}}
				>
					<img
						src={logo}
						alt="Rainbow Centre Logo"
						width="250"
						height="150"
					/>
				</Typography> */}
				{/*  */}
				<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorEl)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					>
						{pages.map((page) => (
							<Link
								key="menulink"
								href={page.href}
								sx={{ textDecoration: "none", color: "black" }}
							>
								<MenuItem
									key={page.name}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">{page.name}</Typography>
								</MenuItem>
							</Link>
						))}
						<MenuItem>
							<ActivitesButton />
						</MenuItem>
					</Menu>
				</Box>
				{/*  */}

				{/* <FoundationIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
				<Typography
					variant="h5"
					noWrap
					component="a"
					href="#app-bar-with-responsive-menu"
					sx={{
						mr: 2,
						display: { xs: "flex", md: "none" },
						flexGrow: 1,
						color: "inherit",
						textDecoration: "none",
						my: 2,
					}}
				>
					<img
						src={logo}
						alt="Rainbow Centre Logo"
						width="150"
						height="150"
					/>
				</Typography>
				<Stack justifyContent="center">
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Link
								key="menu-link"
								href={page.href}
								sx={{ textDecoration: "none" }}
							>
								<Button
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{page.name}
								</Button>
							</Link>
						))}
						<ActivitesButton />
						{/* <a href="#about"> */}
						<Button
							// onClick={handleClick}
							href="/#about"
							sx={{ my: 2, color: "white", display: "block" }}
						>
							contact us
						</Button>
						{/* </a> */}
					</Box>
				</Stack>
			</Toolbar>
			{/* </Container> */}
		</AppBar>
	);
}
export default NavBar;
