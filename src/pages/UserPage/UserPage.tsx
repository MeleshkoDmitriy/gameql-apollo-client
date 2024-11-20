import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/shared/Spinner/Spinner";
import { UserProfile } from "../../components/profiles/UserProfile/UserProfile";

export default function UserPage() {
  const { id } = useParams();

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <UserProfile id={id} />
      </Suspense>
    </div>
  );
}
