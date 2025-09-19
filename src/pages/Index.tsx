import Header from "@/components/Header";
import PreparednessCard from "@/components/PreparednessCard";
import CourseModules from "@/components/CourseModules";
import AlertSystem from "@/components/AlertSystem";
import AchievementBadges from "@/components/AchievementBadges";
import EmergencyContacts from "@/components/EmergencyContacts";
import QuickStats from "@/components/QuickStats";
import { Shield, Brain, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI-Powered Disaster Preparedness
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced emergency education system with AI-driven risk assessment, real-time alerts, 
              and immersive training to enhance your safety readiness.
            </p>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Brain,
                title: "AI Assessment", 
                description: "Personalized risk analysis"
              },
              {
                icon: Shield,
                title: "Real-time Alerts",
                description: "Instant emergency notifications"
              },
              {
                icon: Users,
                title: "Community Learning",
                description: "Collaborative safety education"
              },
              {
                icon: Zap,
                title: "AR Training",
                description: "Immersive simulation drills"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 bg-card/30 backdrop-blur hover:shadow-float transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-emergency">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 pt-6">
            <Button size="lg" className="bg-gradient-hero text-white shadow-emergency">
              Start Assessment
            </Button>
            <Button size="lg" variant="outline">
              Take Virtual Tour
            </Button>
          </div>
        </section>

        {/* Quick Stats Overview */}
        <section>
          <QuickStats />
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

          {/* Middle Column - Courses & Training */}
          <div className="lg:col-span-2 space-y-8">
            <CourseModules />
            
            <AchievementBadges />
          </div>
        </div>

        {/* Emergency Contacts Section */}
        <section>
          <EmergencyContacts />
        </section>

        {/* Additional Resources */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Emergency Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick access to essential emergency information and preparedness guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Emergency Kit Checklist",
                description: "Essential supplies for home and workplace emergency kits",
                color: "bg-gradient-safety"
              },
              {
                title: "Evacuation Routes", 
                description: "Interactive maps showing optimal evacuation paths",
                color: "bg-gradient-info"
              },
              {
                title: "Communication Plan",
                description: "Templates for family and organizational emergency communication",
                color: "bg-gradient-warning"
              }
            ].map((resource, index) => (
              <Card key={index} className="border-0 hover:shadow-float transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-full h-32 ${resource.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">DisasterPrep AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AI-Powered Disaster Preparedness Education System
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;