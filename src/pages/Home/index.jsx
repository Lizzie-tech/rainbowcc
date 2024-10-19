import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import PictureCarousel from "./PictureCarousel";
import OurPartners from "../../components/OurPartners";
import { ContactForm } from "./ContactForm";
import FindUs from "./FindUs";
import logo from "./logo.png";

function Home() {
	return (
		<Box
			sx={{
				background: "#92CBA9",
			}}
		>
			<Container>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
				>
					<Typography
						gutterBottom
						variant="h1"
						sx={{
							fontSize: 35,
							paddingTop: 5,
							color: "white",
							fontFamily: "monospace",
						}}
					>
						{" "}
						<img
							src={logo}
							alt="Rainbow Centre Logo"
							width="250"
							height="150"
						/>
						<Divider
							orientation="horizontal"
							variant="middle"
							sx={{
								backgroundColor: "#ffffff",
								borderWidth: "thick",
								margin: 5,
							}}
						/>
					</Typography>

					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{ width: "80%", textAlign: "center" }}
					>
						<Typography sx={{ marginBottom: -2, color: "white" }}>
							hello sThe Rainbow Centre Community Centre located between
							Cheethamhill and crumpsall. The centre is available for community,
							charity and voluntary group hire, and private hire, and we have
							events and activities year-round. That are available for anyone to
							attend.
						</Typography>
					</Stack>
					{/* <PictureCarousel /> */}
				</Stack>

				<Grid
					container
					lg={12}
					spacing={2}
				>
					<Grid
						item
						lg={6}
						md={6}
						sm={10}
						xs={12}
					>
						<ContactForm />
					</Grid>
					<Grid
						item
						lg={6}
						md={6}
						sm={10}
						xs={12}
					>
						<FindUs />
					</Grid>
				</Grid>
			</Container>
			<OurPartners />
		</Box>
	);
}
export default Home;
