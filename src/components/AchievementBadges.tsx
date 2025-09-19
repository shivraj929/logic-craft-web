import { Award, Shield, Star, Target, Users, Zap, Trophy, Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  points: number;
  isUnlocked: boolean;
  progress?: number;
  maxProgress?: number;
  unlockedDate?: string;
}

const AchievementBadges = () => {
  const achievements: Achievement[] = [
    {
      id: "1",
      name: "First Responder",
      description: "Complete basic emergency response course",
      icon: "shield",
      rarity: "common",
      points: 100,
      isUnlocked: true,
      unlockedDate: "2 days ago"
    },
    {
      id: "2", 
      name: "Evacuation Expert",
      description: "Perfect score on three evacuation drills",
      icon: "target",
      rarity: "rare",
      points: 250,
      isUnlocked: true,
      unlockedDate: "1 week ago"
    },
    {
      id: "3",
      name: "Disaster Detective", 
      description: "Identify ten safety hazards in training scenarios",
      icon: "star",
      rarity: "epic",
      points: 200,
      isUnlocked: false,
      progress: 7,
      maxProgress: 10
    },
    {
      id: "4",
      name: "Guardian Angel",
      description: "Help five peers improve their preparedness scores",
      icon: "users",
      rarity: "rare",
      points: 300,
      isUnlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: "5",
      name: "Lightning Response",
      description: "Complete emergency drill in under 60 seconds",
      icon: "zap",
      rarity: "epic", 
      points: 400,
      isUnlocked: false,
      progress: 0,
      maxProgress: 1
    },
    {
      id: "6",
      name: "Safety Champion",
      description: "Achieve 90+ preparedness score for 30 days",
      icon: "trophy",
      rarity: "legendary",
      points: 1000,
      isUnlocked: false,
      progress: 12,
      maxProgress: 30
    }
  ];

  const getIcon = (iconName: string) => {
    const iconMap = {
      shield: Shield,
      target: Target,
      star: Star,
      users: Users,
      zap: Zap,
      trophy: Trophy,
      award: Award,
      medal: Medal
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Award;
    return <IconComponent className="h-6 w-6" />;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "from-muted/50 to-muted/20 border-muted";
      case "rare": return "from-accent/30 to-accent/10 border-accent/50";
      case "epic": return "from-warning/30 to-warning/10 border-warning/50";
      case "legendary": return "from-primary/30 to-primary/10 border-primary/50";
      default: return "from-muted/50 to-muted/20 border-muted";
    }
  };

  const getRarityBadgeColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-muted text-muted-foreground";
      case "rare": return "bg-accent text-accent-foreground";
      case "epic": return "bg-warning text-warning-foreground";
      case "legendary": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const totalPoints = achievements.filter(a => a.isUnlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
          <p className="text-muted-foreground">Track your progress and unlock special badges</p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <Medal className="h-5 w-5 text-warning" />
            <span className="font-bold text-lg text-foreground">{totalPoints}</span>
            <span className="text-sm text-muted-foreground">points</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {unlockedCount}/{achievements.length} unlocked
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id} 
            className={`relative bg-gradient-to-br ${getRarityColor(achievement.rarity)} ${
              achievement.isUnlocked ? '' : 'opacity-75'
            } hover:shadow-float transition-all duration-300`}
          >
            {achievement.isUnlocked && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 text-success-foreground" />
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${
                  achievement.isUnlocked 
                    ? 'bg-background/80 text-foreground' 
                    : 'bg-muted/50 text-muted-foreground'
                }`}>
                  {getIcon(achievement.icon)}
                </div>
                <Badge className={getRarityBadgeColor(achievement.rarity)}>
                  {achievement.rarity}
                </Badge>
              </div>
              <CardTitle className={`text-lg ${
                achievement.isUnlocked ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {achievement.name}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <p className={`text-sm ${
                achievement.isUnlocked ? 'text-muted-foreground' : 'text-muted-foreground/80'
              }`}>
                {achievement.description}
              </p>
              
              {achievement.isUnlocked ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-success font-medium">Unlocked!</span>
                    <span className="text-warning font-bold">+{achievement.points} pts</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {achievement.unlockedDate}
                  </p>
                </div>
              ) : achievement.progress !== undefined && achievement.maxProgress ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      {achievement.progress}/{achievement.maxProgress}
                    </span>
                  </div>
                  <Progress 
                    value={(achievement.progress / achievement.maxProgress) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-warning font-medium">
                    +{achievement.points} pts when unlocked
                  </p>
                </div>
              ) : (
                <div className="pt-2">
                  <p className="text-xs text-warning font-medium">
                    +{achievement.points} pts when unlocked
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;