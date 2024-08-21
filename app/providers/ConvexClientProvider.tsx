"use Client";
// import { ClerkProvider, useAuth } from "@clerk/clerk-react";
// import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
	return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};

export default ConvexClientProvider;
