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
import ActivitesButton, { ActivitesButtonMenu } from "./dropdownMenu/index";

const pages = [
	{ name: "Home", href: "/" },
	{ name: "Whats on", href: "/whatson" },
	{ name: "The Venue", href: "thevenue" },
	{ name: "About us", href: "aboutus" },
];

function NavBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

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
			<Toolbar>
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
								key={page.href}
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
						<MenuItem sx={{ padding: 0, margin: 0 }}>
							<ActivitesButtonMenu />
						</MenuItem>
					</Menu>
				</Box>
				<Stack justifyContent="center">
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Link
								key={page.href}
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
							href="/#contactus"
							sx={{ my: 2, color: "white", display: "block" }}
						>
							contact us
						</Button>
						{/* </a> */}
					</Box>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
export default NavBar;
