function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="card p-4">
      <div className="text-sm text-[--color-muted]">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  // mock values (replace with context/backend later)
  const totalIncome = "$4,800";
  const totalExpenses = "$3,250";
  const balance = "$1,550";

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard title="Total Income" value={totalIncome} />
        <SummaryCard title="Total Expenses" value={totalExpenses} />
        <SummaryCard title="Balance" value={balance} />
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <span className="text-sm text-[--color-muted]">Last 7 days</span>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[--color-muted] border-b border-[--color-border]">
              <tr>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Description</th>
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                { d: "Oct 05", t: "Groceries", c: "Food", a: "-$58.12" },
                { d: "Oct 04", t: "Salary", c: "Income", a: "+$2,400.00" },
                { d: "Oct 03", t: "Uber", c: "Transport", a: "-$12.90" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[--color-border]/60">
                  <td className="py-2 pr-4">{row.d}</td>
                  <td className="py-2 pr-4">{row.t}</td>
                  <td className="py-2 pr-4">{row.c}</td>
                  <td className="py-2 pl-4 text-right font-medium">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
