import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import PictureCarousel from "./PictureCarousel";
import OurPartners from "../../components/OurPartners/index";
import { ContactForm } from "./ContactForm";
import FindUs from "./FindUs";
import logo from "./logo.png";
import buildingfront from "./PictureCarousel/ChurchPictures/buildingfront.jpg";

function Home() {
	const image = {
		label: "The outside of the front of the building",
		imgPath: buildingfront,
	};

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
					paddingBottom={5}
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
						<Typography sx={{ marginBottom: 2, color: "white" }}>
							The Rainbow Community Centre is a registered community
							organisation located between Cheetham Hill and Crumpsall. Our hall
							is available for community, charity and and private hire. We also
							host a variety of events and activities all year-round, that are
							available for anyone to attend.
						</Typography>
					</Stack>
					{/* <PictureCarousel /> */}

					<Box
						sx={{
							maxWidth: 800,
							flexGrow: 1,
							bgcolor: "#92CBA9",
							marginTop: 2,
						}}
					>
						<Box
							component="img"
							sx={{
								height: "auto",
								display: "block",
								maxWidth: "100%",
								overflow: "hidden",
								// width: "100%",
							}}
							src={image.imgPath}
							alt={image.label}
						/>
					</Box>
				</Stack>

				<Grid
					container
					spacing={2}
					columns={{ sm: 8, lg: 16 }}
				>
					<Grid size={{ xs: 8, sm: 4, md: 8, lg: 8 }}>
						<ContactForm />
					</Grid>
					<Grid size={{ xs: 8, sm: 4, md: 8, lg: 8 }}>
						<FindUs />
					</Grid>
				</Grid>
			</Container>
			<OurPartners />
		</Box>
	);
}
export default Home;
