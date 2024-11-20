import { Layout } from "../../components/layout/Layout/Layout";
import { GamesList } from "../../components/lists/GamesList/GamesList";
import { Suspense } from "react";
import { Spinner } from "../../components/shared/Spinner/Spinner";

export default function GamesPage() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <GamesList />
      </Suspense>
    </Layout>
  );
}
