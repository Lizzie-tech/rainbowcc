import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = [
	{ name: "Fitness", href: "fitness" },
	{ name: "Body Conditioning", href: "bodyconditioning" },
	{ name: "BoxFit", href: "boxfit" },
	{ name: "Socials", href: "/socials" },
];

export default function ActivitesButton() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				endIcon={<ExpandMoreIcon />}
				sx={{ my: 2, color: "white" }}
			>
				Activites
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{pages.map((page) => (
					<Link
						key={page.name}
						href={page.href}
						sx={{ textDecoration: "none", color: "black" }}
					>
						<MenuItem onClick={handleClose}>{page.name}</MenuItem>
					</Link>
				))}
			</Menu>
		</div>
	);
}

export function ActivitesButtonMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				endIcon={<ExpandMoreIcon />}
				sx={{
					my: 2,
					color: "black",
					textTransform: "none",
					textAlign: "center",
					paddingLeft: 2,
				}}
			>
				Activites
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{pages.map((page) => (
					<Link
						key={page.name}
						href={page.href}
						sx={{ textDecoration: "none", color: "black" }}
					>
						<MenuItem onClick={handleClose}>{page.name}</MenuItem>
					</Link>
				))}
			</Menu>
		</div>
	);
}
