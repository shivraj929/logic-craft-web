import Header from "@/components/Header";
import PreparednessCard from "@/components/PreparednessCard";
import CourseModules from "@/components/CourseModules";
import AlertSystem from "@/components/AlertSystem";
import AchievementBadges from "@/components/AchievementBadges";
import QuickStats from "@/components/QuickStats";
import { BookOpen, Trophy, Clock, Target, Play, Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";

const StudentDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {profile?.display_name || 'Student'}!
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continue your emergency preparedness journey. Complete modules, earn achievements, and build vital safety skills.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Continue Learning
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              View Schedule
            </Button>
          </div>
        </section>

        {/* Quick Progress Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, label: "Modules Completed", value: "12/20", progress: 60 },
            { icon: Trophy, label: "Achievements", value: "8", progress: 100 },
            { icon: Clock, label: "Study Hours", value: "24.5", progress: 80 },
            { icon: Target, label: "Safety Score", value: "85%", progress: 85 }
          ].map((stat, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Preparedness & Alerts */}
          <div className="space-y-8">
            <PreparednessCard
              score={78}
              trend="up"
              riskLevel="medium"
              lastAssessment="2 hours ago"
            />
            
            <Card className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <AlertSystem />
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Courses & Achievements */}
          <div className="lg:col-span-2 space-y-8">
            <CourseModules />
            <AchievementBadges />
          </div>
        </div>

        {/* Study Plan */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">This Week's Study Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { day: "Monday", topic: "Fire Safety Basics", status: "completed" },
              { day: "Tuesday", topic: "Earthquake Preparedness", status: "completed" },
              { day: "Wednesday", topic: "First Aid Essentials", status: "current" },
              { day: "Thursday", topic: "Flood Response", status: "upcoming" },
              { day: "Friday", topic: "Emergency Communication", status: "upcoming" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="font-medium text-foreground">{item.day}</span>
                  <p className="text-sm text-muted-foreground">{item.topic}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'completed' ? 'bg-success/20 text-success' :
                  item.status === 'current' ? 'bg-primary/20 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {item.status === 'completed' ? 'Done' : 
                   item.status === 'current' ? 'Current' : 'Coming up'}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;