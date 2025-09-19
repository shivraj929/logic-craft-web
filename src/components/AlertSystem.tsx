import { AlertTriangle, CheckCircle, Clock, MapPin, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Alert {
  id: string;
  type: "emergency" | "warning" | "info" | "drill";
  title: string;
  message: string;
  location: string;
  timestamp: string;
  priority: "critical" | "high" | "medium" | "low";
  status: "active" | "resolved" | "acknowledged";
}

const AlertSystem = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "1",
      type: "warning",
      title: "Weather Alert",
      message: "Severe thunderstorm warning in effect. Take shelter immediately and avoid windows.",
      location: "Downtown Campus",
      timestamp: "5 minutes ago",
      priority: "high",
      status: "active"
    },
    {
      id: "2", 
      type: "drill",
      title: "Fire Drill Scheduled",
      message: "Monthly fire evacuation drill scheduled for tomorrow at 2:00 PM. Please prepare accordingly.",
      location: "All Buildings",
      timestamp: "1 hour ago", 
      priority: "medium",
      status: "active"
    },
    {
      id: "3",
      type: "info",
      title: "Safety Equipment Check",
      message: "Fire extinguishers and smoke detectors in Building A have been inspected and are operational.",
      location: "Building A",
      timestamp: "3 hours ago",
      priority: "low", 
      status: "acknowledged"
    }
  ]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "emergency": return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "drill": return <Clock className="h-5 w-5 text-accent" />;
      case "info": return <CheckCircle className="h-5 w-5 text-success" />;
      default: return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "bg-destructive text-destructive-foreground animate-pulse";
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getAlertCardStyle = (priority: string, status: string) => {
    if (status === "resolved") return "opacity-60 border-success/20 bg-success/5";
    if (status === "acknowledged") return "opacity-80 border-muted bg-muted/20";
    
    switch (priority) {
      case "critical": return "border-destructive bg-destructive/10 shadow-emergency";
      case "high": return "border-destructive/50 bg-destructive/5";
      case "medium": return "border-warning/50 bg-warning/5"; 
      case "low": return "border-accent/50 bg-accent/5";
      default: return "border-muted bg-card";
    }
  };

  const dismissAlert = (alertId: string) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  const acknowledgeAlert = (alertId: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId 
        ? { ...alert, status: "acknowledged" as const }
        : alert
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Emergency Alerts</h2>
          <p className="text-muted-foreground">Real-time safety notifications and emergency updates</p>
        </div>
        <Button variant="outline" className="bg-gradient-warning text-white">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Report Emergency
        </Button>
      </div>

      <div className="space-y-4">
        {alerts.length === 0 ? (
          <Card className="border-success/20 bg-success/5">
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">All Clear</h3>
                <p className="text-sm text-muted-foreground">No active alerts at this time</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          alerts.map((alert) => (
            <Card key={alert.id} className={getAlertCardStyle(alert.priority, alert.status)}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getAlertIcon(alert.type)}
                    <div>
                      <CardTitle className="text-lg">{alert.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getPriorityColor(alert.priority)}>
                          {alert.priority.toUpperCase()}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {alert.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dismissAlert(alert.id)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {alert.message}
                </p>
                
                {alert.status === "active" && (
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => acknowledgeAlert(alert.id)}
                      className="bg-accent text-accent-foreground hover:bg-accent/80"
                    >
                      Acknowledge
                    </Button>
                    {alert.type === "emergency" && (
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AlertSystem;