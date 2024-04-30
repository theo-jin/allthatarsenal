"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import invincible from "../../public/Images/invincibles.webp";
import gabriel from "../../public/Images/Gabriel-Spurs.webp";
import communityShield from "../../public/Images/community-shield-celebs.webp";
import stadium from "../../public/Images/Stadium-outside.webp";
import wenger from "../../public/Images/wenger_trophies.webp";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const images = [
	{ image: invincible, alt: "invincible" },
	{ image: communityShield, alt: "communityShield" },
	{ image: stadium, alt: "stadium" },
	{ image: wenger, alt: "wenger" },
	{ image: gabriel, alt: "gabriel" },
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
