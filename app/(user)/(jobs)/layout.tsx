import { NavBar } from "@/app/(user)/sections";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
