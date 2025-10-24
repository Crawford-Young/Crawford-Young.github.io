import Card from "./Card";
import { Badge } from "@/components/ui/badge";

type ClubCardProps = {
  name: string;
  role?: string;
};

export default function ClubCard({ name, role }: ClubCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium tracking-tight text-foreground">{name}</h3>
          {role && (
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {role}
            </p>
          )}
        </div>
        <Badge variant="secondary" className="ml-3 text-xs">
          Club
        </Badge>
      </div>
    </Card>
  );
}
