import Card from "./Card";

type ClubCardProps = {
  name: string;
  role?: string;
};

export default function ClubCard({ name, role }: ClubCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium tracking-[-0.01em]">{name}</h3>
          {role && <p className="text-sm text-foreground/70 mt-1">{role}</p>}
        </div>
        <span className="text-xs text-foreground/50">Club</span>
      </div>
    </Card>
  );
}


