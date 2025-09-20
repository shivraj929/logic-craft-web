import Header from "@/components/Header";
import { School, Users, Shield, BarChart3, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SchoolAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            School Administration Dashboard
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oversee school-wide emergency preparedness, manage staff, and ensure compliance across all grades.
          </p>
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

        {/* Quick Actions */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">Administrative Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SchoolAdminDashboard;