// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import { autoPlay } from "react-swipeable-views-utils";
// import SwipeableViews from "react-swipeable-views";
// import buildingfront from "./ChurchPictures/buildingfront.jpg";
// import propertyenttrance from "./ChurchPictures/propertyenttrance.jpg";
// import streetview from "./ChurchPictures/streetview.jpg";
// import inside from "./ChurchPictures/inside.jpg";
// import inside2 from "./ChurchPictures/inside2.jpg";
// import sideexterior from "./ChurchPictures/sideexterior.jpg";
// import exeriorrearview from "./ChurchPictures/exeriorrearview.jpg";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
// 	{
// 		label: "The outside of the front of the building",
// 		imgPath: buildingfront,
// 	},
// 	{
// 		label: "The gates to the property",
// 		imgPath: propertyenttrance,
// 	},
// 	{
// 		label: "view from the street",
// 		imgPath: streetview,
// 	},
// 	{
// 		label: "Inside the venue",
// 		imgPath: inside,
// 	},
// 	{
// 		label: "Another view inside",
// 		imgPath: inside2,
// 	},
// 	{
// 		label: "Rear of the building including carpark",
// 		imgPath: exeriorrearview,
// 	},
// 	{
// 		label: "side of the building path from carpark",
// 		imgPath: sideexterior,
// 	},
// ];

// function PictureCarousel() {
// 	const theme = useTheme();
// 	const [activeStep, setActiveStep] = React.useState(0);
// 	const maxSteps = images.length;

// 	const handleNext = () => {
// 		setActiveStep((prevActiveStep) => prevActiveStep + 1);
// 	};

// 	const handleBack = () => {
// 		setActiveStep((prevActiveStep) => prevActiveStep - 1);
// 	};

// 	const handleStepChange = (step: number) => {
// 		setActiveStep(step);
// 	};

// 	return (
// 		<Box sx={{ maxWidth: 800, flexGrow: 1, bgcolor: "#92CBA9" }}>
// 			<Paper
// 				square
// 				elevation={0}
// 				sx={{
// 					display: "flex",
// 					alignItems: "center",
// 					height: 50,
// 					pl: 2,
// 					bgcolor: "#92CBA9",
// 				}}
// 			></Paper>
// 			<AutoPlaySwipeableViews
// 				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
// 				index={activeStep}
// 				onChangeIndex={handleStepChange}
// 				enableMouseEvents
// 			>
// 				{images.map((step, index) => (
// 					<div key={step.label}>
// 						{Math.abs(activeStep - index) <= 2 ? (
// 							<Box
// 								component="img"
// 								sx={{
// 									height: 510,
// 									display: "block",
// 									maxWidth: 800,
// 									overflow: "hidden",
// 									width: "100%",
// 								}}
// 								src={step.imgPath}
// 								alt={step.label}
// 							/>
// 						) : null}
// 					</div>
// 				))}
// 			</AutoPlaySwipeableViews>
// 			<MobileStepper
// 				steps={maxSteps}
// 				position="static"
// 				activeStep={activeStep}
// 				sx={{
// 					bgcolor: "#92CBA9",
// 					color: "white",
// 					// ".MuiMobileStepper-dot": { backgroundColor: "#ffffff" },
// 					".MuiMobileStepper-dotActive": { backgroundColor: "#ffffff" },
// 				}}
// 				nextButton={
// 					<Button
// 						size="small"
// 						onClick={handleNext}
// 						disabled={activeStep === maxSteps - 1}
// 						sx={{ color: "white" }}
// 					>
// 						Next
// 						{theme.direction === "rtl" ? (
// 							<KeyboardArrowLeft />
// 						) : (
// 							<KeyboardArrowRight />
// 						)}
// 					</Button>
// 				}
// 				backButton={
// 					<Button
// 						size="small"
// 						onClick={handleBack}
// 						disabled={activeStep === 0}
// 						sx={{ color: "white" }}
// 					>
// 						{theme.direction === "rtl" ? (
// 							<KeyboardArrowRight />
// 						) : (
// 							<KeyboardArrowLeft />
// 						)}
// 						Back
// 					</Button>
// 				}
// 			/>
// 		</Box>
// 	);
// }

// export default PictureCarousel;
