"use client";

import React from "react";
declare global {
	interface Window {
		toggleDevtools: () => void;
	}
}
// function isServer() {
// 	return typeof window === "undefined";
// }
export const ReactQueryDevtoolsBtn = () => {
	return (
		<button
			onClick={() => {
				// isServer() ? null : window.toggleDevtools();
				window.toggleDevtools();
			}}
		>asdfadsfd</button>
	);
};
