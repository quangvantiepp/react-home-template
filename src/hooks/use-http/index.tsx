import axios from "axios";
import React, { useCallback, useState } from "react";

export const UseHttp = <T = any,>() => {
  const [isLoading, setIdLoading] = useState<boolean>(false);
  let cancelToken: any;
  cancelToken = axios.CancelToken.source();

  const sendRequest = useCallback(
    async (requestFn: any, applyData: any, params: T) => {
      setIdLoading(true);
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("cancel the request");
      }
      try {
        const response = params
          ? await requestFn(params, cancelToken)
          : await requestFn(cancelToken.token);
        if (response?.status && Math.floor(response.status / 100) !== 2) {
          throw new Error("Request failed!");
        }
        if (applyData) {
          const data = response?.data;
          applyData(data);
        }
      } catch (error: any) {
        // error logic here
        alert(error?.message || "error");
      }
      setIdLoading(false);
    },
    []
  );

  return {
    isLoading,
    sendRequest,
  };
};
