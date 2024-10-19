/* eslint-disable react/jsx-key */
import {
	Box,
	Card,
	CardContent,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function WhatsOn() {
	const events = [
		{
			name: "Youth & Family Club",
			date: "Every Saturday/quarterly",
			time: "18:30pm-21:30pm",
			description:
				" Join us for an evening of games such as Table Tennis, Team Games, bar football, Board games, Dominoes, Cultural games, Who sell out? and more.",
		},
		{
			name: "Tea & Toast/ Afternoon Tea",
			date: "Mondays",
			time: "11:00am-13:00pm",
			description:
				"Tea, Toast, chit and chat. social activities, board games and support services top tips from tea specialists",
		},
		{
			name: "Xtream Hip Hop – Steps",
			date: "Monday's",
			time: "19:00pm-20:00pm",
			description:
				"Step and step some more to the grove which keeps on moving. Not for the fait hearted. Step class led by experts Charge Made at Class",
		},
		{
			name: "Beginners Box Fit",
			date: "Tuesdays",
			time: "11:00am-12:00pm",
			description:
				"Beginners session, challenging and fun, non-contact sport suitable for all levels £3per session only.",
		},
		{
			name: "Body Conditioning",
			date: "Tuesdays",
			time: "12:00-13:00",
			description:
				"High energy workout that combines cardio and resistance training. This is a full-body workut",
		},
	];
	return (
		<Box sx={{ bgcolor: "#F4E482" }}>
			<Container sx={{ padding: 5 }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
					sx={{ margin: 2 }}
				>
					<Typography
						gutterBottom
						variant="h1"
						sx={{ fontSize: 35, paddingTop: 5, color: "#3C3800" }}
					>
						{" "}
						What&apos;s on
						<Divider
							orientation="horizontal"
							variant="middle"
							sx={{ backgroundColor: "#3C3800", borderWidth: "thick" }}
						/>
					</Typography>
				</Stack>
				<Typography
					sx={{ color: "#3C3800" }}
					noWrap
				>
					Please find below a series of events that we host throughout the week.
					If you are interested in helping out in hosting/volunteering at these
					classes or holding your own classes, please contact us.
				</Typography>
				<Grid
					container
					spacing={2}
					lg={12}
					md={10}
					sm={8}
					xs={6}
					direction="row"
					width="100%"
				>
					{events.map((event) => (
						<Grid lg={4}>
							<Card
								sx={{ padding: 1, margin: 2, width: "300px", height: "300px" }}
							>
								<CardContent>
									<Stack
										direction="column"
										spacing={2}
									>
										<Typography color="text.secondary">
											<b>Date: </b>
											{event.date}
										</Typography>
										<Typography
											sx={{ fontSize: 25 }}
											color="#BEAB8B"
											gutterBottom
											variant="h2"
										>
											{event.name}
										</Typography>

										<Typography variant="body2">
											<b>Time: </b>
											{event.time}
										</Typography>
										<Typography variant="body2">
											<b>Decsription: </b>
											{event.description}
										</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Divider />
				{/* <Grid>
				<Typography>
					Below is our Calendar of events, you can add the calendar invites into
					your own or share them. Clicking on the links will give you further
					information regarding the event.
				</Typography>
				<Stack alignItems="center">
					<iframe
						src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FLondon&bgcolor=%23ffffff&showTitle=0&hl=en_GB&title&src=cmFpbmJvd2NlbnRyZTE4NDRAZ21haWwuY29t&color=%23039BE5"
						width="850"
						height="600"
						title="hi"
					></iframe>
				</Stack>
			</Grid> */}
			</Container>
		</Box>
	);
}
export default WhatsOn;
