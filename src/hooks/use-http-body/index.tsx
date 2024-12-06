import { useCallback, useState } from "react";

export const UseHttpBody = <T = any, T2 = any>() => {
  const [isLoading, setIdLoading] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (requestFn: any, applyData: any, params: T, bodyParams?: T2) => {
      setIdLoading(true);

      try {
        const response = params
          ? await requestFn(params, bodyParams)
          : await requestFn(bodyParams);

        if (response?.status && Math.floor(response.status / 100) !== 2) {
          throw new Error("Request failed!");
        }

        const data = response?.data;
        applyData(data);
      } catch (error: any) {
        applyData(error?.response);
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
