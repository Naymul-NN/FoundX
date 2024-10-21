import { Navbar } from "@/src/components/ui/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
