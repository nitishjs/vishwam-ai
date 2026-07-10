import Badge from "@/components/ui/Badge";

type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {badge && (
        <Badge className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-muted">
          {description}
        </p>
      )}
    </div>
  );
}