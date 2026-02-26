import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="max-w-lg space-y-4 text-center">
        <h1 className="text-3xl font-bold">CSAI</h1>
        <p className="text-slate-600">
          Customer Support Advanced Intelligence multi-tenant SaaS platform.
        </p>
        <Button asChild>
          <Link href="/tiers">Open dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
