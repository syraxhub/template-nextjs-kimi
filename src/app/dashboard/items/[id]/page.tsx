import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { getItemById } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

interface ItemDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/items"
              className="p-2 rounded-md hover:bg-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{item.title}</h1>
              <p className="text-muted-foreground mt-1">
                Item details
              </p>
            </div>
          </div>
          <Link
            href={`/dashboard/items/${item.id}/edit`}
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors text-sm font-medium"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </Link>
        </div>

        <div className="bg-card border rounded-lg shadow-sm p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">ID</p>
              <p className="text-sm font-mono">{item.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
              <span
                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === "active"
                    ? "bg-green-100 text-green-700"
                    : item.status === "inactive"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Created</p>
              <p className="text-sm">{new Date(item.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Updated</p>
              <p className="text-sm">{new Date(item.updatedAt).toLocaleString()}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Description</p>
            <p className="text-sm">
              {item.description || "No description provided"}
            </p>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Owner</p>
            <p className="text-sm font-mono">{item.userId}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
