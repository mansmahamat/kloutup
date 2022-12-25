import { IRoute } from "../types/navigation"

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined"

export const findCurrentRoute = (routes: IRoute[]): IRoute => {
  //@ts-ignore
  const foundRoute: IRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  )

  return foundRoute
}

export const getActiveRoute = (routes: IRoute[]): string => {
  const route = findCurrentRoute(routes)
  return route?.name || "All your links"
}

export const getActiveNavbar = (routes: IRoute[]): boolean => {
  const route = findCurrentRoute(routes)
  //@ts-ignore
  return route?.secondary
}

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return getActiveRoute(routes) || false
}
