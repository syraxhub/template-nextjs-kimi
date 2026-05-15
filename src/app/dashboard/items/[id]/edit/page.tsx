import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { mockItems } from "@/lib/mock-data";
import { EditItemForm } from "./EditItemForm";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return mockItems.map((item) => ({ id: item.id }));
}

interface EditItemPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditItemPage({ params }: EditItemPageProps) {
  const { id } = await params;
  const item = mockItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  return (
    <DashboardLayout>
      <EditItemForm item={item} />
    </DashboardLayout>
  );
}
