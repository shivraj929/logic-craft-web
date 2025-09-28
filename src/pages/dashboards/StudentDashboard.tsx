import Header from "@/components/Header";
import PreparednessCard from "@/components/PreparednessCard";
import CourseModules from "@/components/CourseModules";
import AlertSystem from "@/components/AlertSystem";
import AchievementBadges from "@/components/AchievementBadges";
import QuickStats from "@/components/QuickStats";
import { BookOpen, Trophy, Clock, Target, Play, Calendar, Bell, Users, MessageSquare, Star, Award, Brain, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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

        {/* Study Plan & Additional Student Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">This Week's Study Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { day: "Monday", topic: "Fire Safety Basics", status: "completed", icon: Flame },
                { day: "Tuesday", topic: "Earthquake Preparedness", status: "completed", icon: Target },
                { day: "Wednesday", topic: "First Aid Essentials", status: "current", icon: BookOpen },
                { day: "Thursday", topic: "Flood Response", status: "upcoming", icon: Bell },
                { day: "Friday", topic: "Emergency Communication", status: "upcoming", icon: MessageSquare }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <item.icon className={`h-5 w-5 ${
                      item.status === 'completed' ? 'text-success' :
                      item.status === 'current' ? 'text-primary' :
                      'text-muted-foreground'
                    }`} />
                    <div>
                      <span className="font-medium text-foreground">{item.day}</span>
                      <p className="text-sm text-muted-foreground">{item.topic}</p>
                    </div>
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

          {/* Study Buddy & Social Features */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Groups & Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Class Leaderboard</h4>
                {[
                  { name: "Alex Chen", score: 95, rank: 1, badge: "Fire Expert" },
                  { name: "You", score: 85, rank: 2, badge: "Safety Star", highlight: true },
                  { name: "Emma Wilson", score: 82, rank: 3, badge: "First Aid Pro" },
                  { name: "Mike Davis", score: 79, rank: 4, badge: "Emergency Ready" }
                ].map((student, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                    student.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-muted/20'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <Badge variant={student.rank === 1 ? 'default' : 'outline'}>
                        #{student.rank}
                      </Badge>
                      <div>
                        <span className={`font-medium ${student.highlight ? 'text-primary' : 'text-foreground'}`}>
                          {student.name}
                        </span>
                        <p className="text-xs text-muted-foreground">{student.badge}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {student.rank === 1 && <Trophy className="h-4 w-4 text-yellow-500" />}
                      <span className="text-sm font-medium">{student.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full gap-2">
                  <Users className="h-4 w-4" />
                  Join Study Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personalized Learning Recommendations */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Recommended for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  title: "Advanced First Aid", 
                  description: "Based on your interest in medical emergencies", 
                  difficulty: "Intermediate",
                  time: "30 min",
                  icon: BookOpen
                },
                { 
                  title: "Emergency Communication", 
                  description: "You haven't started this module yet", 
                  difficulty: "Beginner",
                  time: "20 min",
                  icon: MessageSquare
                },
                { 
                  title: "Leadership in Crisis", 
                  description: "Your leadership score suggests you'd excel here", 
                  difficulty: "Advanced",
                  time: "45 min",
                  icon: Award
                }
              ].map((recommendation, index) => (
                <Card key={index} className="bg-muted/30 border-0 hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <recommendation.icon className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {recommendation.difficulty}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">{recommendation.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{recommendation.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{recommendation.time}</span>
                      <Button size="sm" variant="outline">Start</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;