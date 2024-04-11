"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
	const [wallPaperData, setWallPaperData]: any = useState([]);
	useEffect(() => {
		fetch("/api/wallpaper/list")
			.then((r) => r.json())
			.then((result) => {
				setWallPaperData(result);
			});
	}, []);

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
				{wallPaperData.map(function (a: any, i: string | number) {
					return (
						<SwiperSlide
							key={i}
							className="flex items-center justify-center text-center text-lg"
						>
							<img
								className="block object-cover "
								alt={wallPaperData[i].picName}
								src={wallPaperData[i].pic}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
