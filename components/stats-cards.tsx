import { FileAudio, Clock, CheckCircle2, TrendingUp } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      name: "Всего записей",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: FileAudio,
    },
    {
      name: "Общая длительность",
      value: "4ч 32м",
      change: "+8%",
      trend: "up",
      icon: Clock,
    },
    {
      name: "Транскрибировано",
      value: "18",
      change: "+4",
      trend: "up",
      icon: CheckCircle2,
    },
    {
      name: "На этой неделе",
      value: "6",
      change: "+2",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.name} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <span
                className={`text-xs font-medium ${
                  stat.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
