import { Shield, AlertTriangle, Bell, User, LogOut, Search, Menu, BookOpen, Users, Settings, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const Header = () => {
  const { profile, signOut, hasRole } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const alertCount = 2; // Simulated active alerts
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleEmergencyToggle = () => {
    setIsEmergencyActive(!isEmergencyActive);
    // Here you would typically trigger emergency protocols
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality
    }
  };

  // Dynamic navigation based on user role
  const getNavigationItems = () => {
    const baseItems = [
      { name: "Dashboard", href: "#dashboard" },
      { name: "Courses", href: "#courses", 
        submenu: [
          { name: "Emergency Response", href: "#emergency-response" },
          { name: "Fire Safety", href: "#fire-safety" },
          { name: "First Aid", href: "#first-aid" },
          { name: "AR Training", href: "#ar-training" }
        ]
      }
    ];

    if (hasRole('teacher') || hasRole('school_admin') || hasRole('super_admin')) {
      baseItems.push({ 
        name: "Management", 
        href: "#management",
        submenu: [
          { name: "Students", href: "#students" },
          { name: "Classes", href: "#classes" },
          { name: "Reports", href: "#reports" }
        ]
      });
    }

    if (hasRole('school_admin') || hasRole('super_admin')) {
      baseItems.push({ 
        name: "Administration", 
        href: "#admin",
        submenu: [
          { name: "School Settings", href: "#school-settings" },
          { name: "User Management", href: "#user-management" },
          { name: "Analytics", href: "#analytics" }
        ]
      });
    }

    baseItems.push({ name: "Community", href: "#community" });
    
    return baseItems;
  };

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
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {getNavigationItems().map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={subItem.href}
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.name}
                    </a>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search courses, modules..."
              className="pl-10 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Emergency Alert Button */}
          <Button
            variant={isEmergencyActive ? "destructive" : "outline"}
            size="sm"
            className={`relative ${!isEmergencyActive ? 'bg-destructive/10 border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground' : 'animate-pulse'}`}
            onClick={handleEmergencyToggle}
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            {isEmergencyActive ? 'ACTIVE' : 'Emergency'}
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Emergency Drill Scheduled</p>
                  <p className="text-xs text-muted-foreground">Fire drill planned for tomorrow at 10:00 AM</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Course Progress Update</p>
                  <p className="text-xs text-muted-foreground">You've completed 3 new modules this week</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-muted-foreground">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Quick Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                Start New Course
              </DropdownMenuItem>
              {hasRole('teacher') && (
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Manage Students
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <div className="text-sm hidden sm:block text-left">
                  <div className="font-medium">{profile?.display_name || 'User'}</div>
                  <div className="text-xs text-muted-foreground">{profile?.school_name}</div>
                </div>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;