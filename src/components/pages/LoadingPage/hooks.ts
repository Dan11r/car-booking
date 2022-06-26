import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { rootStore } from "@store";

const useRedirectToSuccessPage = () => {
  const [id, setId] = useState<string | number>();
  const navigate = useNavigate();
  const { processing, currentRequestStatus, getRequestStatus } =
    rootStore.requestStore;

  useEffect(() => {
    if (processing.id) {
      setId(processing.id);
    }
    if (id) {
      getRequestStatus(id);
    }
    if (currentRequestStatus === "SUCCESS") {
      navigate(`/success/${id}`);
    }
  }, [processing.id, currentRequestStatus]);
};
export default useRedirectToSuccessPage;
