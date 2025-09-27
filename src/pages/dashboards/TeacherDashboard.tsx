import Header from "@/components/Header";
import { Users, BookOpen, AlertTriangle, TrendingUp, Calendar, FileText, MessageSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

const TeacherDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, {profile?.display_name || 'Teacher'}!
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor student progress, manage classes, and coordinate emergency preparedness education.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              Create Assignment
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule Drill
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Message Students
            </Button>
          </div>
        </section>

        {/* Class Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "Total Students", value: "127", color: "text-primary" },
            { icon: BookOpen, label: "Active Courses", value: "8", color: "text-accent" },
            { icon: TrendingUp, label: "Avg. Progress", value: "76%", color: "text-success" },
            { icon: AlertTriangle, label: "Need Help", value: "12", color: "text-warning" }
          ].map((stat, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Progress Overview */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Class Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { class: "Grade 7A", students: 28, progress: 82, status: "on-track" },
                { class: "Grade 7B", students: 32, progress: 75, status: "on-track" },
                { class: "Grade 8A", students: 30, progress: 65, status: "needs-attention" },
                { class: "Grade 8B", students: 25, progress: 88, status: "ahead" },
                { class: "Grade 9A", students: 22, progress: 45, status: "behind" }
              ].map((classData, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{classData.class}</h4>
                    <Badge variant={
                      classData.status === 'ahead' ? 'default' :
                      classData.status === 'on-track' ? 'secondary' :
                      classData.status === 'needs-attention' ? 'destructive' :
                      'outline'
                    }>
                      {classData.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{classData.students} students</span>
                    <span>{classData.progress}% complete</span>
                  </div>
                  <Progress value={classData.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Student Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { student: "Emma Johnson", action: "Completed Fire Safety module", time: "2 hours ago", type: "completion" },
                { student: "Alex Chen", action: "Scored 95% on Emergency Quiz", time: "4 hours ago", type: "achievement" },
                { student: "Sarah Wilson", action: "Requested help with First Aid", time: "6 hours ago", type: "help" },
                { student: "Mike Davis", action: "Started Earthquake Preparedness", time: "1 day ago", type: "start" },
                { student: "Lisa Brown", action: "Earned Safety Expert badge", time: "2 days ago", type: "badge" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'completion' ? 'bg-success' :
                    activity.type === 'achievement' ? 'bg-primary' :
                    activity.type === 'help' ? 'bg-warning' :
                    activity.type === 'badge' ? 'bg-accent' :
                    'bg-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.student}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  {activity.type === 'help' && (
                    <Button size="sm" variant="outline">Respond</Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Schedule Drill</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Create Assignment</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Message Students</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeacherDashboard;