import { useEffect, useState } from "react";
import { rootStore } from "../store";

const useCheckProcessing = () => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const { getProcessing, processing, requests } = rootStore.requestStore;
  useEffect(() => {
    getProcessing();
  }, [requests]);
  useEffect(() => {
    if (processing.isProcessing && intervalId === undefined) {
      const interval = setInterval(() => {
        if (!processing.isProcessing) {
          clearInterval(interval);
        }
        getProcessing();
      }, 3000);
      setIntervalId(interval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [processing.isProcessing]);
};

export default useCheckProcessing;
