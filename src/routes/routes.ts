export const routes = {
  HOME: '/',
  GAMES: '/games',
  GAME: '/games/:id',
  USERS: '/users',
  USER: '/users/:id',
}

export const navigationRoutes = [
  {
    path: routes.HOME,
    label: 'Home',
  },
  {
    path: routes.GAMES,
    label: 'Games',
  },
  {
    path: routes.USERS,
    label: 'Users',
  }
]
