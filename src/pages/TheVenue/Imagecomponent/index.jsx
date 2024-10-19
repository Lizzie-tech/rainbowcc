import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import pic7 from "./pic7.jpg";

export default function StandardImageList() {
	return (
		<Box sx={{ margin: 2 }}>
			<ImageList
				// sx={{ width: 500, height: 450 }}
				cols={3}
				// rowHeight={164}
			>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={item.img}
							src={item.img}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

const itemData = [
	{
		img: pic1,
		title: "Breakfast",
	},
	{
		img: pic2,
		title: "Burger",
	},
	{
		img: pic3,
		title: "Camera",
	},
	{
		img: pic4,
		title: "Coffee",
	},
	{
		img: pic5,
		title: "Hats",
	},
	{
		img: pic6,
		title: "Honey",
	},
	{
		img: pic7,
		title: "Basketball",
	},
	// {
	// 	img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
	// 	title: "Fern",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
	// 	title: "Mushrooms",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
	// 	title: "Tomato basil",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
	// 	title: "Sea star",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
	// 	title: "Bike",
	// },
];
