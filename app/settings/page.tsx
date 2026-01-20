"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Palette,
  Key,
  Download,
  Trash2,
  ChevronRight,
  Check
} from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "language", label: "Language", icon: Globe },
    { id: "appearance", label: "Appearance", icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        <main className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <Settings className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-6">
              {activeTab === "profile" && (
                <>
                  {/* Profile Picture */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Picture</CardTitle>
                      <CardDescription>Update your profile photo</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-6">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                        <AvatarFallback className="text-xl">JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Upload new</Button>
                          <Button variant="ghost" size="sm">Remove</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          JPG, GIF or PNG. Max size 2MB.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Personal Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First name</label>
                          <Input defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last name</label>
                          <Input defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email address</label>
                        <Input type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bio</label>
                        <textarea 
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Tell us about yourself..."
                          defaultValue="Product Manager at TechCorp. I use AudioScribe to transcribe meetings and interviews."
                        />
                      </div>
                      <Button>Save changes</Button>
                    </CardContent>
                  </Card>

                  {/* Danger Zone */}
                  <Card className="border-destructive/50">
                    <CardHeader>
                      <CardTitle className="text-destructive">Danger Zone</CardTitle>
                      <CardDescription>Irreversible actions for your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Download all data</p>
                          <p className="text-sm text-muted-foreground">Export all your transcriptions and account data</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </Button>
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <p className="font-medium">Delete account</p>
                          <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                        </div>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {activeTab === "notifications" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to be notified</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { title: "Transcription complete", description: "Get notified when your audio is transcribed", email: true, push: true },
                      { title: "Weekly summary", description: "Receive a weekly digest of your activity", email: true, push: false },
                      { title: "Storage alerts", description: "Get notified when storage is running low", email: true, push: true },
                      { title: "Product updates", description: "Learn about new features and improvements", email: false, push: false },
                      { title: "Marketing emails", description: "Receive tips and promotional content", email: false, push: false },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" defaultChecked={item.email} className="rounded" />
                            Email
                          </label>
                          <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" defaultChecked={item.push} className="rounded" />
                            Push
                          </label>
                        </div>
                      </div>
                    ))}
                    <Button>Save preferences</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === "security" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Change your password to keep your account secure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current password</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New password</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm new password</label>
                        <Input type="password" />
                      </div>
                      <Button>Update password</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                      <CardDescription>Add an extra layer of security to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <Key className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Authenticator app</p>
                            <p className="text-sm text-muted-foreground">Use an app like Google Authenticator</p>
                          </div>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                      <CardDescription>Manage devices where you are logged in</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { device: "MacBook Pro - Chrome", location: "San Francisco, CA", current: true },
                        { device: "iPhone 15 - Safari", location: "San Francisco, CA", current: false },
                        { device: "Windows PC - Firefox", location: "New York, NY", current: false },
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {session.device}
                              {session.current && (
                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Current
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">{session.location}</p>
                          </div>
                          {!session.current && (
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              Revoke
                            </Button>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </>
              )}

              {activeTab === "billing" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Plan</CardTitle>
                      <CardDescription>You are currently on the Professional plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div>
                          <p className="text-xl font-semibold">Professional</p>
                          <p className="text-muted-foreground">$29/month</p>
                        </div>
                        <Button variant="outline">Change plan</Button>
                      </div>
                      <div className="mt-4 space-y-2">
                        {["50 hours of transcription/month", "Priority processing", "Advanced export options", "API access", "Team collaboration"].map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Manage your payment information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing History</CardTitle>
                      <CardDescription>View your past invoices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { date: "Jan 1, 2026", amount: "$29.00", status: "Paid" },
                          { date: "Dec 1, 2025", amount: "$29.00", status: "Paid" },
                          { date: "Nov 1, 2025", amount: "$29.00", status: "Paid" },
                        ].map((invoice, index) => (
                          <div key={index} className="flex items-center justify-between py-2">
                            <div>
                              <p className="font-medium">{invoice.date}</p>
                              <p className="text-sm text-muted-foreground">Professional Plan</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-medium">{invoice.amount}</span>
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                {invoice.status}
                              </span>
                              <Button variant="ghost" size="sm">Download</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {activeTab === "language" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Language & Region</CardTitle>
                    <CardDescription>Set your preferred language and regional settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Interface language</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Default transcription language</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Auto-detect</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                        <option>Chinese (Mandarin)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time zone</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                        <option>UTC</option>
                      </select>
                    </div>
                    <Button>Save preferences</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === "appearance" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize how AudioScribe looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Theme</label>
                      <div className="grid grid-cols-3 gap-4">
                        {["Light", "Dark", "System"].map((theme) => (
                          <button
                            key={theme}
                            className={`rounded-lg border-2 p-4 text-center transition-colors ${
                              theme === "System" ? "border-foreground" : "border-border hover:border-muted-foreground"
                            }`}
                          >
                            <div className={`mx-auto mb-2 h-8 w-8 rounded-full ${
                              theme === "Light" ? "bg-white border border-border" :
                              theme === "Dark" ? "bg-zinc-900" : "bg-gradient-to-r from-white to-zinc-900"
                            }`} />
                            <span className="text-sm font-medium">{theme}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Font size</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Small</option>
                        <option>Medium (Default)</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Transcript display</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Continuous text</option>
                        <option>Paragraph breaks</option>
                        <option>Timestamped segments</option>
                      </select>
                    </div>
                    <Button>Save preferences</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
