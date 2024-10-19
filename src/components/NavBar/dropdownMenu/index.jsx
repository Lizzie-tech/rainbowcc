import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
				<Link
					href="fitness"
					sx={{ textDecoration: "none" }}
				>
					<MenuItem onClick={handleClose}>Fitness</MenuItem>
				</Link>
				<Link
					href="bodyconditioning"
					sx={{ textDecoration: "none" }}
				>
					<MenuItem onClick={handleClose}>Body Conditioning</MenuItem>
				</Link>
				<Link
					href="boxfit"
					sx={{ textDecoration: "none" }}
				>
					<MenuItem onClick={handleClose}>BoxFit</MenuItem>
				</Link>
				<Link
					href="/socials"
					sx={{ textDecoration: "none" }}
				>
					<MenuItem onClick={handleClose}>Socials</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
