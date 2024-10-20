import { Box, Stack, Typography, Divider, Card } from "@mui/material";
import "../FindUs/index.css";

function FindUs() {
	return (
		<Card
			id="findus"
			className="anchor"
		>
			<Box sx={{ margin: 1 }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={5}
				>
					<Typography
						gutterBottom
						variant="h2"
						sx={{
							fontSize: 30,
							color: "black",
						}}
					>
						{" "}
						Find Us
						<Divider
							orientation="horizontal"
							variant="middle"
							sx={{
								backgroundColor: "#8BBEAB",
								borderWidth: "thick",
								margin: 1,
								// width: "30%",
							}}
						/>
					</Typography>
				</Stack>
				<Stack
					spacing={2}
					alignItems="center"
				>
					<div className="google-maps">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.91220849660579!2d-2.242419605980571!3d53.511841531907024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1002223644b%3A0x8a0cb51ddd57d7ea!2sRainbow%20Community%20Centre!5e0!3m2!1sen!2suk!4v1712005042342!5m2!1sen!2suk"
							width="550"
							height="330"
							allowFullScreen
							loading="lazy"
						></iframe>
					</div>
					<Typography sx={{ color: "black" }}>
						<b style={{ color: "#BE8541" }}>Call us:</b> 0161 740 1652
					</Typography>
					<Typography sx={{ color: "black" }}>
						<b style={{ color: "#BE8541" }}>Email:</b>
						<a
							href="mailto:rainbowcentre1844@gmail.com"
							// style={{ color: "white" }}
						>
							{""} rainbowcentre1844@gmail.com
						</a>
					</Typography>
				</Stack>
			</Box>
		</Card>
	);
}
export default FindUs;
