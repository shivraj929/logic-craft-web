import Header from "@/components/Header";
import { School, Users, Shield, BarChart3, AlertTriangle, CheckCircle, MessageSquare, FileText, Calendar, Clock, DollarSign, TrendingUp, UserCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

const SchoolAdminDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, {profile?.display_name || 'Administrator'}!
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oversee school-wide emergency preparedness at {profile?.school_name || 'your school'}, manage staff, and ensure compliance across all grades.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2">
              <Shield className="h-4 w-4" />
              Schedule Emergency Drill
            </Button>
            <Button variant="outline" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Generate Reports
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Send School Alert
            </Button>
          </div>
        </section>

        {/* School Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: School, label: "Total Students", value: "1,247", color: "text-primary" },
            { icon: Users, label: "Teachers", value: "42", color: "text-accent" },
            { icon: Shield, label: "Safety Compliance", value: "94%", color: "text-success" },
            { icon: AlertTriangle, label: "Active Alerts", value: "3", color: "text-warning" }
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
          {/* Grade-wise Progress */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Progress by Grade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { grade: "Grade 6", students: 210, completion: 78, teachers: 8 },
                { grade: "Grade 7", students: 195, completion: 82, teachers: 7 },
                { grade: "Grade 8", students: 188, completion: 75, teachers: 8 },
                { grade: "Grade 9", students: 176, completion: 88, teachers: 6 },
                { grade: "Grade 10", students: 165, completion: 71, teachers: 7 }
              ].map((gradeData, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{gradeData.grade}</h4>
                    <Badge variant={gradeData.completion >= 80 ? 'default' : gradeData.completion >= 70 ? 'secondary' : 'destructive'}>
                      {gradeData.completion}% complete
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <span>{gradeData.students} students</span>
                    <span>{gradeData.teachers} teachers</span>
                  </div>
                  <Progress value={gradeData.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Emergency Preparedness Status */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Emergency Preparedness</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { item: "Fire Drill Compliance", status: "complete", date: "Last conducted: March 15" },
                { item: "Emergency Kit Inventory", status: "complete", date: "Last updated: March 10" },
                { item: "Evacuation Route Updates", status: "pending", date: "Due: March 25" },
                { item: "Staff Safety Training", status: "in-progress", date: "85% completed" },
                { item: "Communication System Test", status: "overdue", date: "Due: March 20" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-3">
                    {item.status === 'complete' ? 
                      <CheckCircle className="h-5 w-5 text-success" /> :
                      item.status === 'pending' ? 
                      <AlertTriangle className="h-5 w-5 text-warning" /> :
                      item.status === 'in-progress' ?
                      <BarChart3 className="h-5 w-5 text-accent" /> :
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    }
                    <div>
                      <p className="font-medium text-foreground">{item.item}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <Badge variant={
                    item.status === 'complete' ? 'default' :
                    item.status === 'pending' ? 'secondary' :
                    item.status === 'in-progress' ? 'outline' :
                    'destructive'
                  }>
                    {item.status.replace('-', ' ')}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Teacher Management */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">Teacher Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Ms. Johnson", subject: "Science", classes: 4, engagement: 92 },
                { name: "Mr. Smith", subject: "Mathematics", classes: 3, engagement: 88 },
                { name: "Mrs. Davis", subject: "English", classes: 5, engagement: 95 },
                { name: "Dr. Wilson", subject: "Social Studies", classes: 3, engagement: 79 },
                { name: "Ms. Brown", subject: "PE", classes: 6, engagement: 91 },
                { name: "Mr. Garcia", subject: "Art", classes: 2, engagement: 86 }
              ].map((teacher, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-medium text-foreground">{teacher.name}</h4>
                  <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Engagement Rate</span>
                      <span>{teacher.engagement}%</span>
                    </div>
                    <Progress value={teacher.engagement} className="h-1" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{teacher.classes} classes</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget & Resource Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Budget Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { category: "Emergency Equipment", allocated: 25000, spent: 18500, percentage: 74 },
                { category: "Safety Training", allocated: 15000, spent: 12000, percentage: 80 },
                { category: "Drill Coordination", allocated: 8000, spent: 5200, percentage: 65 },
                { category: "Technology Systems", allocated: 35000, spent: 28000, percentage: 80 }
              ].map((budget, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{budget.category}</span>
                    <span className="text-sm text-muted-foreground">
                      ${budget.spent.toLocaleString()} / ${budget.allocated.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={budget.percentage} className="h-2" />
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View Full Budget Report
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events & Deadlines */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { event: "Fire Safety Drill", date: "Tomorrow", type: "drill", priority: "high" },
                { event: "Safety Equipment Inspection", date: "March 28", type: "inspection", priority: "medium" },
                { event: "Emergency Response Training", date: "April 2", type: "training", priority: "high" },
                { event: "Parent Safety Workshop", date: "April 8", type: "workshop", priority: "low" },
                { event: "Quarterly Safety Review", date: "April 15", type: "review", priority: "medium" }
              ].map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      event.priority === 'high' ? 'bg-destructive' :
                      event.priority === 'medium' ? 'bg-warning' :
                      'bg-muted-foreground'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{event.event}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <Badge variant={event.priority === 'high' ? 'destructive' : event.priority === 'medium' ? 'secondary' : 'outline'}>
                    {event.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Administrative Actions */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">Administrative Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Shield className="h-6 w-6" />
                <span>Schedule Drill</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Manage Staff</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Send Alert</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>School Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SchoolAdminDashboard;