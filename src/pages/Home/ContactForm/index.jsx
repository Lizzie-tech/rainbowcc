import { useState } from "react";
import {
	Button,
	TextField,
	Typography,
	FormLabel,
	Box,
	Stack,
	Divider,
	Card,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export function ContactForm() {
	const initialFormState = {
		name: "",
		email: "",
		message: "",
	};

	const [contactData, setContactData] = useState({ ...initialFormState });

	const handleChange = ({ target }) => {
		setContactData({
			...contactData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_0q31t6g",
				"template_b4wyqdt",
				e.target,
				"MWKPVOK-3dNO3rnzf"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
				alert("Email sent successfully!")
			);

		//reset the form after submission
		setContactData({ ...initialFormState });
	};
	return (
		<Card id="contactus">
			<Box sx={{ margin: 1 }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={4}
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
						Contact Us
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
					<Typography
						variant="body2"
						color="GrayText"
						gutterBottom
					>
						Fill out the form below and our team will get back to you.
					</Typography>
				</Stack>
				<form
					onSubmit={handleSubmit}
					style={{ marginTop: "20px" }}
				>
					<Stack
						direction="row"
						spacing={2}
						sx={{}}
					>
						<div>
							<FormLabel sx={{ color: "#BE8541", fontWeight: "bold" }}>
								Your Name
							</FormLabel>
							<TextField
								type="text"
								name="name"
								value={contactData.name}
								onChange={handleChange}
								required
								label="Name"
								placeholder="Enter your name"
								variant="outlined"
								fullWidth
							/>
						</div>
						<div>
							<FormLabel sx={{ color: "#BE8541", fontWeight: "bold" }}>
								Your Email Address
							</FormLabel>
							<TextField
								value={contactData.email}
								onChange={handleChange}
								required
								type="email"
								name="email"
								label="Email"
								placeholder="Enter your email"
								variant="outlined"
								fullWidth
							/>
						</div>
					</Stack>
					<Box sx={{ marginTop: 5 }}>
						<FormLabel sx={{ color: "#BE8541", fontWeight: "bold" }}>
							Your Message
						</FormLabel>
						<TextField
							fullWidth
							placeholder="please enter your inquiry"
							value={contactData.message}
							onChange={handleChange}
							required
							name="message"
							label="Message"
							variant="outlined"
							multiline
							rows={4}
						/>
					</Box>
					<Button
						variant="contained"
						type="submit"
						sx={{ background: "#8bbeab", width: "100%", marginTop: 5 }}
					>
						Submit
					</Button>
				</form>
			</Box>
		</Card>
	);
}
