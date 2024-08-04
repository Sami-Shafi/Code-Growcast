import LeftSidebar from "@/components/LeftSidebar";
import type { Metadata } from "next";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
            <main>
                <LeftSidebar />
                {children}
                <p className="text-white-1">RIGHT SIDE</p>
            </main>
        </div>
	);
}