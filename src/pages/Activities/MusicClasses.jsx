import {
	Container,
	Typography,
	Box,
	Divider,
	Paper,
	Stack,
} from "@mui/material";
import PercussionOrchestra from "./PercussionOrchestra.jpg";
import Grid from "@mui/material/Grid2";

function Percussion() {
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
					Percussion Orchestra
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
					If you play a percussion instrument or would like to learn, see below
					for more information!
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
									height: "auto",
									display: "block",
									overflow: "hidden",
									width: "100%",
									marginBottom: 5,
								}}
								src={PercussionOrchestra}
								alt=" A poster with information on the percussion orchestra"
							/>
						</Grid>
					</Paper>
				</Box>
			</Stack>
		</Container>
	);
}
export default Percussion;
