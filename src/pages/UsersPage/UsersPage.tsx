import { Outlet } from "react-router-dom";
import { Layout } from "../../components/layout/Layout/Layout";
import { UsersList } from "../../components/lists/UsersList/UsersList";
import { Suspense } from "react";
import { Spinner } from "../../components/shared/Spinner/Spinner";

export default function UsersPage() {
  return (
    <Layout>
      <Outlet />
      <Suspense fallback={<Spinner />}>
        <UsersList />
      </Suspense>
    </Layout>
  );
}
