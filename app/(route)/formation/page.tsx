"use client";
import { useState } from "react";
import Pitch from "@/app/_components/Pitch";
import FormationSelector from "@/app/_components/FormationSelector";

export default function Home() {
	const [formation, setFormation] = useState("4-3-3");

	return (
		<main className="min-h-screen p-4 bg-green-100 text-center">
			<h1 className="text-xl font-bold mb-4">전술 선택기</h1>
			<FormationSelector current={formation as "4-3-3" | "4-4-2" | "4-2-3-1"} onChange={setFormation} />
			<Pitch formation={formation as "4-3-3" | "4-4-2" | "4-2-3-1"} />
		</main>
	);
}
