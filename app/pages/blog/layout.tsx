import { HeaderBlog } from "@/app/_components/header";
import { HOME_OG_IMAGE_URL } from "@/app/pages/blog/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Eric Wang's Blog`,
  description: `The Blog of Eric Wang.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <HeaderBlog />
        <div className="absolute w-screen top-12 min-h-[calc(100vh-48px)]">{children}</div>
      </>
  );
}
