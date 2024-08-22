"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
	children: React.ReactNode;
	// themeProps?: ThemeProviderProps;
}

export const queryClient = new QueryClient();
export function Providers1({ children }: ProvidersProps) {
	return (
		<NextUIProvider>
			{/* <NextThemesProvider {...themeProps}> */}
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			{/* </NextThemesProvider> */}
		</NextUIProvider>
	);
}
