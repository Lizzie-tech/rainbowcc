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
// import pic1 from "./pic1.jpg";
// import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";
// import pic4 from "./pic4.jpg";
// import pic5 from "./pic5.jpg";
// import pic6 from "./pic6.jpg";
// import pic7 from "./pic7.jpg";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
// 	{
// 		label: "The outside of the front of the building",
// 		imgPath: pic1,
// 	},
// 	{
// 		label: "The gates to the property",
// 		imgPath: pic2,
// 	},
// 	{
// 		label: "view from the street",
// 		imgPath: pic3,
// 	},
// 	{
// 		label: "Inside the venue",
// 		imgPath: pic4,
// 	},
// 	{
// 		label: "Another view inside",
// 		imgPath: pic5,
// 	},
// 	{
// 		label: "Rear of the building including carpark",
// 		imgPath: pic6,
// 	},
// 	{
// 		label: "side of the building path from carpark",
// 		imgPath: pic7,
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
// 		<Box sx={{ maxWidth: 800 }}>
// 			<Paper
// 				square
// 				elevation={0}
// 				sx={{
// 					display: "flex",
// 					alignItems: "center",
// 					height: 50,
// 					pl: 2,
// 					bgcolor: "background.default",
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
// 				nextButton={
// 					<Button
// 						size="small"
// 						onClick={handleNext}
// 						disabled={activeStep === maxSteps - 1}
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
