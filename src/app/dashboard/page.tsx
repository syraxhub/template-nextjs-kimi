import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { mockItems, mockActivities, getStatusCounts } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Activity, TrendingUp, TrendingDown, Archive } from "lucide-react";

export default function DashboardPage() {
  const counts = getStatusCounts();
  const totalItems = mockItems.length;

  const stats = [
    {
      label: "Total Items",
      value: totalItems,
      icon: Package,
      variant: "default" as const,
    },
    {
      label: "Active",
      value: counts.active,
      icon: TrendingUp,
      variant: "default" as const,
    },
    {
      label: "Inactive",
      value: counts.inactive,
      icon: TrendingDown,
      variant: "secondary" as const,
    },
    {
      label: "Archived",
      value: counts.archived,
      icon: Archive,
      variant: "secondary" as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Items</CardTitle>
              <CardDescription>Latest items in your collection</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {mockItems.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Package className="size-4 text-muted-foreground shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {item.description || "No description"}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      item.status === "active"
                        ? "default"
                        : item.status === "inactive"
                        ? "outline"
                        : "ghost"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions performed</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {mockActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <Activity className="size-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.details}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(activity.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
