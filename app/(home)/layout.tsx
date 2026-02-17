import { Sidebar } from "@/components/sidebar";
import { CursorGlow } from "@/components/cursor-glow";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />

      <div
        className="dot-grid pointer-events-none fixed inset-0"
        aria-hidden="true"
      />

      {/* Ambient orbs */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]"
          style={{ animation: "float-slow 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-48 top-2/3 h-[350px] w-[350px] rounded-full bg-primary/[0.02] blur-[80px]"
          style={{ animation: "float-slower 25s ease-in-out infinite" }}
        />
      </div>

      <Sidebar />

      <main className="relative pt-14 lg:pt-0 lg:pl-[280px]">
        {children}
      </main>
    </div>
  );
}
