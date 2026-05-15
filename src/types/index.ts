// Types matching SCHEMA.md exactly

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export type ItemStatus = "active" | "inactive" | "archived";

export interface Item {
  id: string;
  title: string;
  description: string | null;
  status: ItemStatus;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  action: string;
  details: string | null;
  timestamp: string;
}
