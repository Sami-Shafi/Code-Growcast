import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./providers/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | GrowCast",
		default: "GrowCast - Modern AI Podcast",
	},
	description:
		"Growcast is a platform where you can explore and discover the latest prodcasts of popular creators and enrich your knowledge. Join us and access a vast library in a modern app UI and use features like AI Transcriptions, AI Summaries, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	);
}
