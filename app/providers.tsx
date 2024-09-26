"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
	children: React.ReactNode;
}

export const queryClient = new QueryClient();
export function Providers1({ children }: ProvidersProps) {
	return (
		<NextUIProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</NextUIProvider>
	);
}
