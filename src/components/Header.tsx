import { Shield, AlertTriangle, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const alertCount = 2; // Simulated active alerts

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg shadow-emergency">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">DisasterPrep AI</h1>
            <p className="text-sm text-muted-foreground">Emergency Education Platform</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#training" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            AR Training
          </a>
          <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Emergency Alert Button */}
          <Button
            variant="outline"
            size="sm"
            className="relative bg-destructive/10 border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency
          </Button>

          {/* Notifications */}
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            {alertCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {alertCount}
              </Badge>
            )}
          </Button>

          {/* User Profile */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;