import {
	Container,
	Typography,
	Box,
	Divider,
	Paper,
	Stack,
} from "@mui/material";
import FitnessClasses from "./FitnessClasses.png";
import Grid from "@mui/material/Grid2";

function Fitness() {
	return (
		<Container sx={{ height: "100%" }}>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Typography
					gutterBottom
					variant="h1"
					sx={{ fontSize: 35, paddingTop: 5 }}
				>
					{" "}
					Fitness
					<Divider
						orientation="horizontal"
						variant="middle"
						sx={{ backgroundColor: "#8BBEAB", borderWidth: "thick" }}
					/>
				</Typography>
				<Typography
					variant="body2"
					color="GrayText"
					gutterBottom
				>
					Join us for some fitness classes, see below for more information!
				</Typography>
				<Box>
					<Paper sx={{ width: "fit-content" }}>
						<Grid
							lg={12}
							md={8}
							sm={6}
							xs={4}
						>
							<Box
								component="img"
								sx={{
									height: 1200,
									display: "block",
									maxWidth: 800,
									overflow: "hidden",
									width: "100%",
									marginBottom: 5,
								}}
								src={FitnessClasses}
								alt=" A poster with information on body conditoning"
							/>
						</Grid>
					</Paper>
				</Box>
			</Stack>
		</Container>
	);
}
export default Fitness;
