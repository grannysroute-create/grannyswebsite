import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Set reasonable stale time to prevent unnecessary refetches
        staleTime: 5 * 60 * 1000, // 5 minutes
        // Cache data for longer to improve performance
        gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Preloaded data stays fresh for 5 minutes before refetch
    defaultPreloadStaleTime: 5 * 60 * 1000,
  });

  return router;
};
