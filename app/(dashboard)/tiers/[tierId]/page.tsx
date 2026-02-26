import { Card } from "@/components/ui/card";

export default function TierDetailPage({
  params,
}: {
  params: { tierId: string };
}) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Tier: {params.tierId}</h1>
        <p className="text-sm text-slate-500">Tier detail scaffold.</p>
      </div>
      <Card>Tier capabilities and workflow builder will be implemented in later PRs.</Card>
    </div>
  );
}
