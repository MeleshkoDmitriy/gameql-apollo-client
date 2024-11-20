import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import GamesPage from "./pages/GamesPage/GamesPage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import UsersPage from "./pages/UsersPage/UsersPage.tsx";
import UserPage from "./pages/UserPage/UserPage.tsx";
import GamePage from "./pages/GamePage/GamePage.tsx";
import client from "./apollo/client.ts";

const router = createBrowserRouter(
  [
    {
      path: routes.HOME,
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: routes.GAMES,
      element: <GamesPage />,
    },
    {
      path: routes.GAME,
      element: <GamePage />,
    },
    {
      path: routes.USERS,
      element: <UsersPage />,
      children: [
        {
          path: routes.USER,
          element: <UserPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ApolloProvider>
  </StrictMode>
);
