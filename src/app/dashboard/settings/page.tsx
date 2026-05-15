import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your preferences
          </p>
        </div>

        <div className="bg-card border rounded-lg shadow-sm p-8">
          <p className="text-muted-foreground">
            Settings page placeholder. Add your settings form here.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
