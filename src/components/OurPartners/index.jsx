import { Divider, Box, Typography, Stack } from "@mui/material";

function OurPartners() {
	const images = [
		{
			label: "The Tesco logo",
			imgPath:
				"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Tesco_Logo.svg/320px-Tesco_Logo.svg.png",
		},
		{
			label: "The Manchester active logo ",
			imgPath:
				"https://static.loadstodo.co.uk/app/uploads/2021/08/d522a7e8ee5a439d730e2fd194caae43.jpg",
		},
		{
			label: "GMVC logo",
			imgPath: "https://www.gmcvo.org.uk/sites/default/files/gmcvo-logo.png",
		},
	];
	return (
		<Box
			sx={{
				// backgroundColor: "#F7F1F4",
				width: "initial",
				margin: 0,
				padding: 5,
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Typography
					gutterBottom
					variant="h3"
					sx={{ fontSize: 30, color: "white", fontFamily: "monospace" }}
				>
					{" "}
					Our Partner&apos;s
					<Divider
						orientation="horizontal"
						variant="middle"
						sx={{ backgroundColor: "white", borderWidth: "thick" }}
					/>
				</Typography>

				<Stack
					justifyContent="center"
					alignItems="center"
					sx={{ width: "80%", textAlign: "center" }}
				>
					<Typography
						variant="body2"
						gutterBottom
						sx={{ color: "white" }}
					>
						Displayed below are some of our partner&apos;s, if you are
						interested in becoming a partner with our please get in touch.
					</Typography>
				</Stack>
			</Stack>
			<Stack
				direction="row"
				spacing={5}
				justifyContent="center"
				sx={{ marginTop: 5 }}
			>
				{images.map((step) => (
					<Box
						key={step.label}
						component="img"
						sx={{
							height: "80%",
							display: "block",
							maxWidth: 250,
							overflow: "hidden",
							width: "80%",
							// marginTop: 5,
						}}
						src={step.imgPath}
						alt={step.label}
					/>
				))}
			</Stack>
		</Box>
	);
}

export default OurPartners;
