import {
	Box,
	Container,
	Divider,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import circuitclass from "./circuitclass.png";

function CircuitClass() {
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
					Circuit Class
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
					Join our beginner friendly circuit class, with a variety of low impact
					exercises you can work at a pace that suits you in a friendly and
					supportive environment.
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
								src={circuitclass}
								alt=" A poster with information on the strength class."
							/>
						</Grid>
					</Paper>
				</Box>
			</Stack>
		</Container>
	);
}
export default CircuitClass;
