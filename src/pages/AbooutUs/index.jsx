import { Container, Stack, Typography, Box } from "@mui/material";

function AboutUs() {
	return (
		<>
			<Container>
				<Stack
					justifyContent="center"
					alignItems="center"
					// sx={{ paddingBottom: 1, width: "80%", textAlign: "center" }}
				>
					<Typography
						variant="h1"
						gutterBottom
						sx={{ fontSize: 35, paddingTop: 5 }}
					>
						About Us
					</Typography>
					<Typography>
						The Rainbow Centre is a Caribbean and African user led
						intergenerational volunteer project, serving Crumpsall and Cheetham
						Hill which are considered some of the most ethnically diverse places
						in Europe and two of the most deprived areas of Manchester. Our main
						purpose is to offer services run for and by local people, ensuring;
						equality, empowerment and enablement which is evident in the
						intergenerational presence of our participants, who determine and
						implement our activities, designed to increase training, education
						and employability with health and wellbeing at the heart of all we
						do to develop social connections, build resilience and independence
						to meet individual needs and aspirations.{" "}
					</Typography>
				</Stack>
				<Box height={600} />
			</Container>
		</>
	);
}
export default AboutUs;
