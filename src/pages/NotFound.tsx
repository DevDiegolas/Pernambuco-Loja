import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink-900">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-sm text-stone-600">
        Essa página pode ter sido movida ou nunca existiu. Vamos te levar de
        volta para o começo.
      </p>
      <div className="mt-6 flex gap-3">
        <Button as="link" to="/" variant="primary">
          Voltar para o início
        </Button>
        <Link
          to="/produtos"
          className="text-sm font-semibold text-ink-700 hover:text-brand-700"
        >
          Ver produtos →
        </Link>
      </div>
    </Container>
  );
}
