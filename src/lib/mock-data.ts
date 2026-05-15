import { User, Item, Activity } from "@/types";

export const mockUsers: User[] = [
  {
    id: "usr_001",
    email: "ozan@example.com",
    name: "Ozan",
    image: null,
    createdAt: "2026-01-01T00:00:00Z",
    updatedAt: "2026-05-15T08:00:00Z",
  },
];

export const mockItems: Item[] = [
  {
    id: "itm_001",
    title: "Sample Item Alpha",
    description: "This is the first sample item for testing.",
    status: "active",
    userId: "usr_001",
    createdAt: "2026-05-10T10:00:00Z",
    updatedAt: "2026-05-10T10:00:00Z",
  },
  {
    id: "itm_002",
    title: "Sample Item Beta",
    description: "Second item, currently inactive.",
    status: "inactive",
    userId: "usr_001",
    createdAt: "2026-05-12T14:30:00Z",
    updatedAt: "2026-05-14T09:00:00Z",
  },
  {
    id: "itm_003",
    title: "Sample Item Gamma",
    description: null,
    status: "archived",
    userId: "usr_001",
    createdAt: "2026-04-01T08:00:00Z",
    updatedAt: "2026-04-15T16:00:00Z",
  },
];

export const mockActivities: Activity[] = [
  {
    id: "act_001",
    action: "Item created",
    details: "Sample Item Alpha",
    timestamp: "2026-05-10T10:00:00Z",
  },
  {
    id: "act_002",
    action: "Item updated",
    details: "Sample Item Beta status changed",
    timestamp: "2026-05-14T09:00:00Z",
  },
  {
    id: "act_003",
    action: "Item archived",
    details: "Sample Item Gamma",
    timestamp: "2026-04-15T16:00:00Z",
  },
];

// Helper functions for mock CRUD operations
export function getItemById(id: string): Item | undefined {
  return mockItems.find((item) => item.id === id);
}

export function getItemsByStatus(status: Item["status"]): Item[] {
  return mockItems.filter((item) => item.status === status);
}

export function getItemCount(): number {
  return mockItems.length;
}

export function getStatusCounts(): Record<Item["status"], number> {
  return {
    active: mockItems.filter((i) => i.status === "active").length,
    inactive: mockItems.filter((i) => i.status === "inactive").length,
    archived: mockItems.filter((i) => i.status === "archived").length,
  };
}
