"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
	return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};

export default ConvexClientProvider;
