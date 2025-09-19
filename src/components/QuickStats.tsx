import { Users, Target, Clock, TrendingUp, Book, Shield, Award, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickStats = () => {
  const stats = [
    {
      title: "Course Progress",
      value: "75%",
      description: "3 of 4 courses completed",
      icon: Book,
      color: "text-accent",
      bgColor: "bg-accent/10",
      trend: "+12%"
    },
    {
      title: "Emergency Drills",
      value: "12", 
      description: "Participated this year",
      icon: Target,
      color: "text-success",
      bgColor: "bg-success/10",
      trend: "+3 this month"
    },
    {
      title: "Response Time",
      value: "45s",
      description: "Average evacuation time",
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning/10",
      trend: "15s improvement"
    },
    {
      title: "Safety Score",
      value: "A+",
      description: "Current safety rating",
      icon: Shield,
      color: "text-success", 
      bgColor: "bg-success/10",
      trend: "Top 5%"
    },
    {
      title: "Badges Earned",
      value: "8",
      description: "Achievement badges",
      icon: Award,
      color: "text-warning",
      bgColor: "bg-warning/10", 
      trend: "+2 this week"
    },
    {
      title: "Risk Level",
      value: "Low",
      description: "Current assessment", 
      icon: AlertTriangle,
      color: "text-success",
      bgColor: "bg-success/10",
      trend: "Improved"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 bg-card/50 backdrop-blur hover:shadow-card transition-all duration-300">
          <CardContent className="p-4">
            <div className="space-y-3">
              {/* Icon and Value */}
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
              
              {/* Title and Description */}
              <div>
                <p className="font-medium text-foreground text-sm">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
              
              {/* Trend */}
              <div className="flex items-center space-x-1">
                <TrendingUp className={`h-3 w-3 ${stat.color}`} />
                <span className={`text-xs font-medium ${stat.color}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;