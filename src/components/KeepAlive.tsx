import { useRef } from "react";
import { KeepAliveProvider } from "../hook/useKeepalive";

const KeepAlive: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <KeepAliveProvider initialValue={ref}>
      {children}
      <div ref={ref} style={{ display: "none" }}></div>
    </KeepAliveProvider>
  );
};

export default KeepAlive;
