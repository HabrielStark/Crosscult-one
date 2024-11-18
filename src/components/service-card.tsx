interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-muted-foreground">
            <span className="mr-2 text-primary">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}