"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";

export const LoadingSpiner = () => {
	return (
		<Spinner size="lg" label="Loading..." color="danger" labelColor="danger" />
	);
};
