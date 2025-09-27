import Header from "@/components/Header";
import { Globe, Building2, Users, Shield, Server, Database, Activity, Settings, TrendingUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

const SuperAdminDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, {profile?.display_name || 'Super Admin'}!
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor system-wide performance, manage all schools, and oversee the global emergency preparedness initiative.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2">
              <Database className="h-4 w-4" />
              System Administration
            </Button>
            <Button variant="outline" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Global Analytics
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              System Broadcast
            </Button>
          </div>
        </section>

        {/* System Overview */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Building2, label: "Active Schools", value: "1,547", color: "text-primary" },
            { icon: Users, label: "Total Users", value: "2.4M", color: "text-accent" },
            { icon: Shield, label: "System Uptime", value: "99.9%", color: "text-success" },
            { icon: Activity, label: "Active Sessions", value: "45.2K", color: "text-warning" }
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
          {/* Regional Performance */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">Regional Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { region: "North America", schools: 485, users: "845K", completion: 87, growth: "+12%" },
                { region: "Europe", schools: 392, users: "672K", completion: 91, growth: "+8%" },
                { region: "Asia Pacific", schools: 428, users: "756K", completion: 82, growth: "+15%" },
                { region: "Latin America", schools: 156, users: "234K", completion: 74, growth: "+22%" },
                { region: "Africa", schools: 86, users: "145K", completion: 68, growth: "+35%" }
              ].map((region, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{region.region}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-success">
                        {region.growth}
                      </Badge>
                      <Badge variant={region.completion >= 85 ? 'default' : region.completion >= 75 ? 'secondary' : 'destructive'}>
                        {region.completion}%
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <span>{region.schools} schools</span>
                    <span>{region.users} users</span>
                  </div>
                  <Progress value={region.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-foreground">System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { service: "Authentication Service", status: "healthy", uptime: "99.98%", response: "45ms" },
                { service: "Database Cluster", status: "healthy", uptime: "99.95%", response: "12ms" },
                { service: "Content Delivery", status: "healthy", uptime: "99.99%", response: "28ms" },
                { service: "AI Processing", status: "warning", uptime: "99.87%", response: "156ms" },
                { service: "Real-time Alerts", status: "healthy", uptime: "99.96%", response: "34ms" }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      service.status === 'healthy' ? 'bg-success' :
                      service.status === 'warning' ? 'bg-warning' :
                      'bg-destructive'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{service.service}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Uptime: {service.uptime}</span>
                        <span>Response: {service.response}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={
                    service.status === 'healthy' ? 'default' :
                    service.status === 'warning' ? 'secondary' :
                    'destructive'
                  }>
                    {service.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Schools */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">Top Performing Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Roosevelt High School", location: "New York, NY", students: 1247, score: 96 },
                { name: "Cambridge International", location: "London, UK", students: 892, score: 94 },
                { name: "Tokyo Preparatory", location: "Tokyo, Japan", students: 1534, score: 93 },
                { name: "Sydney Grammar", location: "Sydney, Australia", students: 756, score: 92 },
                { name: "Berlin International", location: "Berlin, Germany", students: 1089, score: 91 },
                { name: "São Paulo Academy", location: "São Paulo, Brazil", students: 943, score: 89 }
              ].map((school, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{school.name}</h4>
                      <p className="text-sm text-muted-foreground">{school.location}</p>
                    </div>
                    <Badge className="bg-gradient-hero text-white">
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Safety Score</span>
                      <span className="font-medium text-foreground">{school.score}%</span>
                    </div>
                    <Progress value={school.score} className="h-2" />
                    <p className="text-xs text-muted-foreground">{school.students} students</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Administrative Tools */}
        <Card className="border-0 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-foreground">System Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Database className="h-6 w-6" />
                <span>Database Admin</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Server className="h-6 w-6" />
                <span>Server Management</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>User Management</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>System Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;