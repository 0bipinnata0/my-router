import { useRef, useCallback } from "react";
import createStateContext from "../utils/createStateContext";
import ReactDOM from "react-dom";

const useKeepAliveContext = (ref: React.RefObject<HTMLDivElement>) => {
  const mapElRef = useRef(new Map<string, React.ReactNode>());

  // const [activeSet, updateActiveSet] = useState(new Set<string>());
  const addNewAliveItem = useCallback(
    (key: string, el: React.ReactNode) => {
      mapElRef.current.set(key, el);
      ref.current && ReactDOM.createPortal(el, ref.current, key);
    },
    [ref]
  );

  const getAliveItem = useCallback((key: string) => {
    return mapElRef.current.get(key);
  }, []);

  return { addNewAliveItem, getAliveItem };
};

const [KeepAliveProvider, useKeepAlive] =
  createStateContext(useKeepAliveContext);

export { KeepAliveProvider };

export default useKeepAlive;
