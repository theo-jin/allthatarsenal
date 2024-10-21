import React from "react";
import { Metadata } from "next";
import Funnel from "@/app/_components/Funnels/Funnel";
import { title } from "@/app/_components/primitives";

export const metadata: Metadata = {
	title: "Quiz",
	description: "Quiz",
};

export default async function Page() {
	return (
		<main>
			<h1 className={`${title()} mx-10px`}>Arsenal Quiz</h1>
			<Funnel />
		</main>
	);
}
