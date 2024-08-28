import { useEffect } from "react";
import routeEmit from "../routeEmit";
import { CourrentRouteProvider } from "../../hook/useCurrentRoute";
import KeepAlive from "../KeepAlive";

const BrowserRouter: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const unsubscribe = routeEmit.on("popstate", (pathName) => {
      pathName !== location.pathname && history.pushState(null, "", pathName);
    });
    return unsubscribe;
  }, []);

  return (
    <CourrentRouteProvider initialValue={location.pathname}>
      <KeepAlive>{children}</KeepAlive>
    </CourrentRouteProvider>
  );
};

export default BrowserRouter;
