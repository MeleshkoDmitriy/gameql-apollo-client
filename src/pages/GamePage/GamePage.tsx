import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout/Layout/Layout";
import { GameProfile } from "../../components/profiles/GameProfile/GameProfile";
import { Suspense } from "react";
import { Spinner } from "../../components/shared/Spinner/Spinner";

export default function GamePage() {
  const { id } = useParams();

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <GameProfile id={id} />
      </Suspense>
    </Layout>
  );
}
