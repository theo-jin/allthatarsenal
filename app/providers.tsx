"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export const queryClient = new QueryClient();
export function Providers1({ children, themeProps }: ProvidersProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider {...themeProps}>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>{children}</Provider>
				</QueryClientProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
