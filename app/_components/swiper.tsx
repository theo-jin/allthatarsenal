"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const images = [
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/allthatarsenal.appspot.com/o/wallPaper%2Finvincibles.webp?alt=media&token=79df3a6d-3b56-4116-80e6-a56fb849b9a6",
		alt: "invincible",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/allthatarsenal.appspot.com/o/wallPaper%2Fcommunity-shield-celebs.webp?alt=media&token=9e55e204-bd33-449d-abd6-d9adcba0d995",
		alt: "communityShield",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/allthatarsenal.appspot.com/o/wallPaper%2FStadium-outside.webp?alt=media&token=589eb7da-d49e-4b53-91cb-738c8f64b742",
		alt: "stadium",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/allthatarsenal.appspot.com/o/wallPaper%2Fwenger_trophies.webp?alt=media&token=fedb63b3-bee4-44ba-9b15-07a5625b4563",
		alt: "wenger",
	},
	{
		image:
			"https://firebasestorage.googleapis.com/v0/b/allthatarsenal.appspot.com/o/wallPaper%2FGabriel-Spurs.webp?alt=media&token=2e188b03-68bb-400f-9ac7-80eed25273ce",
		alt: "gabriel",
	},
];

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper w-5/6 h-4/6 "
			>
				{images.map((image, index) => (
					<SwiperSlide
						key={index}
						className="flex items-center justify-center text-center text-lg"
					>
						<Image
							className="block object-cover "
							key={index}
							src={image.image}
							alt={image.alt}
							width={1027}
							height={500}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
