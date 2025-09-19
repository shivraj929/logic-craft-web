import { TrendingUp, TrendingDown, Minus, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface PreparednessCardProps {
  score: number;
  trend: "up" | "down" | "stable";
  riskLevel: "low" | "medium" | "high" | "critical";
  lastAssessment: string;
}

const PreparednessCard = ({ 
  score = 78, 
  trend = "up", 
  riskLevel = "medium", 
  lastAssessment = "2 hours ago" 
}: PreparednessCardProps) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "bg-success text-success-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "high": return "bg-destructive text-destructive-foreground";
      case "critical": return "bg-destructive text-destructive-foreground animate-pulse";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-success" />;
      case "down": return <TrendingDown className="h-4 w-4 text-destructive" />;
      case "stable": return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getScoreGradient = () => {
    if (score >= 80) return "from-success/20 to-success/5";
    if (score >= 60) return "from-warning/20 to-warning/5";
    return "from-destructive/20 to-destructive/5";
  };

  return (
    <Card className={`bg-gradient-to-br ${getScoreGradient()} border-0 shadow-card`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Preparedness Score</span>
          </div>
          <Badge className={getRiskColor(riskLevel)}>
            {riskLevel.toUpperCase()} RISK
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Score Display */}
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-bold text-foreground">{score}</span>
            <span className="text-xl text-muted-foreground">/100</span>
            <div className="flex items-center ml-2">
              {getTrendIcon()}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress 
              value={score} 
              className="h-3"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Unprepared</span>
              <span>Expert Ready</span>
            </div>
          </div>

          {/* Assessment Info */}
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              Last assessment: <span className="font-medium text-foreground">{lastAssessment}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreparednessCard;