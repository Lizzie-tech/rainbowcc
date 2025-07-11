import {
	Box,
	Container,
	IconButton,
	Link,
	Paper,
	Stack,
	Tooltip,
	Typography,
	styled,
} from "@mui/material";
import { Facebook } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
	return (
		<Paper
			sx={{
				bottom: 0,
				backgroundColor: "#DEE5D6",
				left: 0,
				right: 0,
				padding: 2,
			}}
		>
			<Container>
				<Stack
					direction="row"
					justifyContent="center"
					spacing={4}
				>
					<StyledBox>
						<Typography sx={{ color: "#3A4B40" }}>
							<b>
								Address: <br />{" "}
							</b>{" "}
							<Link
								sx={{ color: "#3A4B40", textDecoration: "none" }}
								href="https://g.co/kgs/jn5PstG"
							>
								11-13 Humphrey St,
								<br /> Crumpsall, <br /> Manchester, <br /> M8 9JS
							</Link>
						</Typography>
						<Typography sx={{ color: "#3A4B40" }}>
							<b>Call us:</b> 0161 740 1652
						</Typography>
						<Typography sx={{ color: "#3A4B40", wordWrap: "break-word" }}>
							<b>Email:</b>{" "}
							<a
								href="mailto:rainbowcentre1844@gmail.com"
								style={{ color: "#3A4B40" }}
							>
								<Typography sx={{ fontSize: 2 }}>
									rainbowcentre1844@gmail.com
								</Typography>
							</a>
						</Typography>
					</StyledBox>
					<StyledBox>
						<Typography sx={{ color: "#3A4B40" }}>
							<b>About Us:</b> <br /> We have been operating as a community
							centre serving the local area hosting events for over 24 years. As
							well as allowing members to host their own events with our
							facilites.
						</Typography>
					</StyledBox>
					<StyledBox>
						<Typography sx={{ color: "#3A4B40" }}>
							<b>Donate to us:</b> <br /> We are a non profit organisation and
							therefore we rely on donations for the running costs of the centre
							as well as funds to allow us to host activities for the community.
						</Typography>
						<form
							action="https://www.paypal.com/donate"
							method="post"
							target="_top"
						>
							<input
								type="hidden"
								name="hosted_button_id"
								value="TDAGFHT3Z8BVW"
							/>
							<input
								type="image"
								src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
							/>
							<img
								alt=""
								src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</StyledBox>
				</Stack>
				<Stack
					direction="row"
					justifyContent="center"
				>
					<Tooltip title="Follow us on Instagram">
						<Link href="https://www.instagram.com/rainbowcommunitycentre?igsh=MWZlbDRrbWFqMmxidQ==">
							<IconButton aria-label="instagram link">
								<InstagramIcon
									fontSize="large"
									sx={{ color: "#3A4B40" }}
								/>
							</IconButton>
						</Link>
					</Tooltip>

					<Tooltip title="Follow us on Facebook">
						<Link href="https://www.facebook.com/profile.php?id=61566871442491">
							<IconButton aria-label="facebook link">
								<Facebook
									fontSize="large"
									sx={{ color: "#3A4B40" }}
								/>
							</IconButton>
						</Link>
					</Tooltip>
				</Stack>
			</Container>
		</Paper>
	);
}

const StyledBox = styled(Box)({
	width: "25%",
	padding: 2,
	color: "white",
});

export default Footer;
