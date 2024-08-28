import { useEffect } from "react";
import useKeepAlive from "../hook/useKeepalive";

const KeepAliveItem: React.FC<React.PropsWithChildren<{ key: string }>> = ({
  children,
  key,
}) => {
  const { addNewAliveItem } = useKeepAlive();
  useEffect(() => {
    addNewAliveItem(key, children);
  }, []);
  return null;
};

export default KeepAliveItem;
