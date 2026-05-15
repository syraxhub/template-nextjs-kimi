"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your preferences and account settings
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Manage your basic account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="auto-save">Auto-save changes</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save form changes as you type
                    </p>
                  </div>
                  <Switch id="auto-save" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="confirm-delete">Confirm before delete</Label>
                    <p className="text-sm text-muted-foreground">
                      Show confirmation dialog before deleting items
                    </p>
                  </div>
                  <Switch id="confirm-delete" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Choose what notifications you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="email-notif">Email notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch id="email-notif" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="push-notif">Push notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive browser push notifications
                    </p>
                  </div>
                  <Switch id="push-notif" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the interface looks
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="compact-mode">Compact mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Reduce spacing for denser layout
                    </p>
                  </div>
                  <Switch id="compact-mode" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="show-tips">Show tips</Label>
                    <p className="text-sm text-muted-foreground">
                      Display helpful tips throughout the app
                    </p>
                  </div>
                  <Switch id="show-tips" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
