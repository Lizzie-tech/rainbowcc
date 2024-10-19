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
import exeriorrearview from "../home/PictureCarousel/ChurchPictures/exeriorrearview.jpg";
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

				<Stack
					direction="row"
					spacing={4}
					sx={{ marginTop: 10 }}
				>
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
								<ListItemText primary="Capacity: 500 people sitting or 100 standing" />
								<hr />
								<ListItemText primary="Dimensions: 18m x 9m" />
								<hr />
								{/* <ListItemText primary="16 tables  plus 3 tables (6ft x 2.6ft) and 120 chairs" /> */}
								<hr />
								<ListItemText primary="small kitchen available for use equipped with 2 microwaves and fridge" />
								<hr />
								<ListItemText primary="Tables and chairs available for use upon request" />
							</List>
						</CardContent>
					</Card>
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
								<ListItemText primary="kitchen available for use" />
								<hr />
								<ListItemText primary="fridges and microwaves ailable on request" />
								<hr />
								<ListItemText primary="toilets and disabled toilets(wheelchair accesible)" />
								<hr />
								<ListItemText primary="speakers available for hire on request" />
							</List>
						</CardContent>
					</Card>
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
									<ListItemText primary=" we have a gravel carpark that can accomodate upto 12 cars" />
									<hr />
									<ListItemText primary="there is a ramp entrance to the building" />
								</List>
							</Typography>
						</CardContent>
					</Card>
				</Stack>
				<StandardImageList />
			</Container>
		</Box>
	);
}
export default TheVenue;
