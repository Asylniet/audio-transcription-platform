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
    { id: "profile", label: "Профиль", icon: User },
    { id: "notifications", label: "Уведомления", icon: Bell },
    { id: "security", label: "Безопасность", icon: Shield },
    { id: "billing", label: "Оплата", icon: CreditCard },
    { id: "language", label: "Язык", icon: Globe },
    { id: "appearance", label: "Внешний вид", icon: Palette },
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
                <h1 className="text-2xl font-semibold">Настройки</h1>
                <p className="text-muted-foreground">Управляйте аккаунтом и предпочтениями</p>
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
                      <CardTitle>Фото профиля</CardTitle>
                      <CardDescription>Обновите вашу фотографию профиля</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-6">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder-user.jpg" alt="Иван Иванов" />
                        <AvatarFallback className="text-xl">ИИ</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Загрузить новое</Button>
                          <Button variant="ghost" size="sm">Удалить</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          JPG, GIF или PNG. Макс. размер 2МБ.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Personal Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Личная информация</CardTitle>
                      <CardDescription>Обновите ваши личные данные</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Имя</label>
                          <Input defaultValue="Иван" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Фамилия</label>
                          <Input defaultValue="Иванов" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email адрес</label>
                        <Input type="email" defaultValue="ivan.ivanov@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">О себе</label>
                        <textarea 
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Расскажите о себе..."
                          defaultValue="Продакт-менеджер в TechCorp. Использую AudioScribe для транскрибации встреч и интервью."
                        />
                      </div>
                      <Button>Сохранить изменения</Button>
                    </CardContent>
                  </Card>

                  {/* Danger Zone */}
                  <Card className="border-destructive/50">
                    <CardHeader>
                      <CardTitle className="text-destructive">Опасная зона</CardTitle>
                      <CardDescription>Необратимые действия для вашего аккаунта</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Скачать все данные</p>
                          <p className="text-sm text-muted-foreground">Экспортировать все транскрипции и данные аккаунта</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Экспорт
                        </Button>
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <p className="font-medium">Удалить аккаунт</p>
                          <p className="text-sm text-muted-foreground">Навсегда удалить аккаунт и все данные</p>
                        </div>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Удалить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}

              {activeTab === "notifications" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки уведомлений</CardTitle>
                    <CardDescription>Выберите, как вы хотите получать уведомления</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { title: "Транскрипция готова", description: "Получать уведомление, когда аудио транскрибировано", email: true, push: true },
                      { title: "Еженедельный отчет", description: "Получать еженедельную сводку вашей активности", email: true, push: false },
                      { title: "Оповещения о хранилище", description: "Получать уведомление при нехватке места", email: true, push: true },
                      { title: "Обновления продукта", description: "Узнавать о новых функциях и улучшениях", email: false, push: false },
                      { title: "Маркетинговые письма", description: "Получать советы и рекламный контент", email: false, push: false },
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
                    <Button>Сохранить настройки</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === "security" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Пароль</CardTitle>
                      <CardDescription>Измените пароль для безопасности аккаунта</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Текущий пароль</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Новый пароль</label>
                        <Input type="password" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Подтвердите новый пароль</label>
                        <Input type="password" />
                      </div>
                      <Button>Обновить пароль</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Двухфакторная аутентификация</CardTitle>
                      <CardDescription>Добавьте дополнительный уровень защиты аккаунта</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <Key className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Приложение-аутентификатор</p>
                            <p className="text-sm text-muted-foreground">Используйте приложение типа Google Authenticator</p>
                          </div>
                        </div>
                        <Button variant="outline">Включить</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Активные сессии</CardTitle>
                      <CardDescription>Управляйте устройствами, на которых выполнен вход</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { device: "MacBook Pro - Chrome", location: "Москва, Россия", current: true },
                        { device: "iPhone 15 - Safari", location: "Москва, Россия", current: false },
                        { device: "Windows PC - Firefox", location: "Санкт-Петербург, Россия", current: false },
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {session.device}
                              {session.current && (
                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Текущая
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">{session.location}</p>
                          </div>
                          {!session.current && (
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              Отозвать
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
                      <CardTitle>Текущий тариф</CardTitle>
                      <CardDescription>Вы используете тариф Профессиональный</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div>
                          <p className="text-xl font-semibold">Профессиональный</p>
                          <p className="text-muted-foreground">$29/месяц</p>
                        </div>
                        <Button variant="outline">Сменить тариф</Button>
                      </div>
                      <div className="mt-4 space-y-2">
                        {["50 часов транскрибации/месяц", "Приоритетная обработка", "Расширенные опции экспорта", "Доступ к API", "Командная работа"].map((feature, index) => (
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
                      <CardTitle>Способ оплаты</CardTitle>
                      <CardDescription>Управляйте платежной информацией</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Visa **** 4242</p>
                            <p className="text-sm text-muted-foreground">Истекает 12/2026</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Изменить
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>История платежей</CardTitle>
                      <CardDescription>Просмотр прошлых счетов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { date: "1 янв. 2026", amount: "$29.00", status: "Оплачено" },
                          { date: "1 дек. 2025", amount: "$29.00", status: "Оплачено" },
                          { date: "1 ноя. 2025", amount: "$29.00", status: "Оплачено" },
                        ].map((invoice, index) => (
                          <div key={index} className="flex items-center justify-between py-2">
                            <div>
                              <p className="font-medium">{invoice.date}</p>
                              <p className="text-sm text-muted-foreground">Тариф Профессиональный</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-medium">{invoice.amount}</span>
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                {invoice.status}
                              </span>
                              <Button variant="ghost" size="sm">Скачать</Button>
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
                    <CardTitle>Язык и регион</CardTitle>
                    <CardDescription>Установите предпочтительный язык и региональные настройки</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Язык интерфейса</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Русский</option>
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Deutsch</option>
                        <option>Francais</option>
                        <option>Espanol</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Язык транскрибации по умолчанию</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Автоопределение</option>
                        <option>Русский</option>
                        <option>English</option>
                        <option>Deutsch</option>
                        <option>Francais</option>
                        <option>Espanol</option>
                        <option>Казахский</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Часовой пояс</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Москва (MSK)</option>
                        <option>Алматы (ALMT)</option>
                        <option>Санкт-Петербург (MSK)</option>
                        <option>Новосибирск (NOVT)</option>
                        <option>UTC</option>
                      </select>
                    </div>
                    <Button>Сохранить настройки</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === "appearance" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Внешний вид</CardTitle>
                    <CardDescription>Настройте внешний вид AudioScribe</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Тема</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: "Светлая", value: "Light" },
                          { name: "Темная", value: "Dark" },
                          { name: "Системная", value: "System" }
                        ].map((theme) => (
                          <button
                            key={theme.value}
                            className={`rounded-lg border-2 p-4 text-center transition-colors ${
                              theme.value === "System" ? "border-foreground" : "border-border hover:border-muted-foreground"
                            }`}
                          >
                            <div className={`mx-auto mb-2 h-8 w-8 rounded-full ${
                              theme.value === "Light" ? "bg-white border border-border" :
                              theme.value === "Dark" ? "bg-zinc-900" : "bg-gradient-to-r from-white to-zinc-900"
                            }`} />
                            <span className="text-sm font-medium">{theme.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Размер шрифта</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Маленький</option>
                        <option>Средний (по умолчанию)</option>
                        <option>Большой</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Отображение транскрипции</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Сплошной текст</option>
                        <option>С разбивкой на абзацы</option>
                        <option>Сегменты с таймкодами</option>
                      </select>
                    </div>
                    <Button>Сохранить настройки</Button>
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
