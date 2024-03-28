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
				<SwiperSlide className="flex items-center justify-center text-center text-lg">
					<img
						className="block object-cover "
						src="https://www.arsenal.com/sites/default/files/styles/large/public/images/community-shield-lift-2023.png?auto=webp&itok=VTGQrvwH"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center text-center text-lg">
					<img
						className="block object-cover"
						src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/wenger_trophies.jpg?auto=webp&itok=NLaOkQsy"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center text-center text-lg">
					<img
						className="block object-cover"
						src="https://www.arsenal.com/sites/default/files/styles/link_image_extra_large/public/images/Stadium-outside.png?auto=webp&itok=nGTfR7W2"
					/>
				</SwiperSlide>

				<SwiperSlide className="flex items-center justify-center text-center text-lg">
					<img
						className="block object-cover "
						src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/2018-conti-cup-winners.png?auto=webp&itok=9SAq8WfZ"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center text-center text-lg">
					<img
						className="block object-cover "
						src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/goal-luton.png?auto=webp&itok=StFHp7ZJ"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
