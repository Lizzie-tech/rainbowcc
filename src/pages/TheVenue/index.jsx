import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Divider,
	List,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import exeriorrearview from "./Imagecomponent/exeriorrearview.jpg";
import pic5 from "./Imagecomponent/pic5.jpg";
import pic7 from "./Imagecomponent/pic7.jpg";
import StandardImageList from "./Imagecomponent";

function TheVenue() {
	return (
		<Box sx={{ bgcolor: "#85C7ED" }}>
			<Container sx={{ padding: 5 }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
				>
					<Typography
						gutterBottom
						variant="h1"
						sx={{ fontSize: 40, paddingTop: 5, mb: 5, color: "white" }}
					>
						{" "}
						The Venue
						<Divider
							orientation="horizontal"
							variant="middle"
							sx={{ backgroundColor: "#8BBEAB", borderWidth: "thick" }}
						/>
					</Typography>
				</Stack>

				<Grid
					container
					justifyContent="center"
					alignItems="flex-start"
					sx={{ marginTop: 10 }}
					spacing={2}
					columns={{ sm: 8, lg: 15 }}
				>
					<Grid size={{ xs: 10, sm: 4, md: 8, lg: 5 }}>
						<Card
							sx={{
								width: 500,
								maxWidth: "100%",
								borderRadius: "12px",
								padding: 1.5,
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardMedia
								image={pic5}
								sx={{
									borderRadius: "6px",
									width: "100%",
									height: 0,
									paddingBottom: "min(75%, 240px)",
									backgroundColor: "rgba(0,0,0,0.08)",
								}}
							/>
							<CardContent>
								<Typography
									variant="h4"
									gutterBottom
								>
									The Hall
								</Typography>

								<List>
									<ListItemText primary="Capacity: 100 people sitting or 130 standing" />
									<hr />
									{/* <ListItemText primary="Dimensions: 18m x 9m" /> */}
									{/* <hr /> */}
									<ListItemText primary="12 tables and 100 chairs" />
									<hr />
									<ListItemText primary="Tables and chairs available for use upon request" />
								</List>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 10, sm: 4, md: 8, lg: 5 }}>
						<Card
							sx={{
								width: 500,
								maxWidth: "100%",
								borderRadius: "12px",
								padding: 1.5,
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardMedia
								image={pic7}
								sx={{
									borderRadius: "6px",
									width: "100%",
									height: 0,
									paddingBottom: "min(75%, 240px)",
									backgroundColor: "rgba(0,0,0,0.08)",
								}}
							/>
							<CardContent>
								<Typography
									variant="h4"
									gutterBottom
								>
									Facilities
								</Typography>
								<List>
									<ListItemText primary="Free wifi on request" />
									<hr />
									<ListItemText primary="Small kitchen available to use for warming foods" />
									<hr />
									<ListItemText primary="There is a fridge, microwave and cooker " />
									<hr />
									<ListItemText primary="Toilets and disabled toilets(wheelchair accesible)" />
									<hr />
									<ListItemText primary="speakers can be avaialable for use if discussed prior" />
								</List>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 10, sm: 4, md: 8, lg: 5 }}>
						<Card
							sx={{
								width: 500,
								maxWidth: "100%",
								borderRadius: "12px",
								padding: 1.5,
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardMedia
								image={exeriorrearview}
								sx={{
									borderRadius: "6px",
									width: "100%",
									height: 0,
									paddingBottom: "min(75%, 240px)",
									backgroundColor: "rgba(0,0,0,0.08)",
								}}
							/>
							<CardContent>
								<Typography
									variant="h4"
									gutterBottom
								>
									Parking
									<List>
										<ListItemText primary="The carpark can accomodate up to 12 cars" />
										<hr />
										<ListItemText primary="There is a ramp entrance to the building for wheelchair access" />
									</List>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<StandardImageList />
			</Container>
		</Box>
	);
}
export default TheVenue;
