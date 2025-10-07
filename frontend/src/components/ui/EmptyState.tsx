import Button from "@/components/ui/Button";
import Link from "next/link";

export default function EmptyState({
  title = "Nothing here yet",
  message = "Add your first item to get started.",
  actionHref,
  actionText,
}: {
  title?: string;
  message?: string;
  actionHref?: string;
  actionText?: string;
}) {
  return (
    <div className="card p-6 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[--color-muted]">{message}</p>
      {actionHref && actionText && (
        <div className="mt-4">
          <Button asChild variant="secondary">
            <Link href={actionHref}>{actionText}</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
