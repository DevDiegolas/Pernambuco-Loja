import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

type Props = LucideProps & { name: string };

// Renderiza dinamicamente um ícone do lucide pelo nome (string).
// Útil para guardar o nome do ícone em /data sem importar componentes lá.
export default function Icon({ name, ...props }: Props) {
  const Cmp =
    (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[
      name
    ] ?? Lucide.Square;
  return <Cmp {...props} />;
}
