import Link from "next/link";

const nav = [
  { href: "/tiers", label: "Tiers" },
  { href: "/integrations", label: "Integrations" },
  { href: "/analytics", label: "Analytics" },
  { href: "/llms", label: "LLMs" },
  { href: "/audit", label: "Audit Logs" },
  { href: "/settings", label: "Settings" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 border-r bg-white p-4">
        <div className="mb-8 text-xl font-semibold">CSAI</div>
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        <header className="flex items-center justify-between border-b bg-white px-6 py-3">
          <div className="text-sm text-slate-500">Tenant: CSAI Demo Tenant</div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
              Demo Mode
            </span>
            <button className="rounded border px-3 py-1 text-sm">User Menu</button>
          </div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
