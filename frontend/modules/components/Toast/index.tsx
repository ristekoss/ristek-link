import { createStandaloneToast } from "@chakra-ui/react";

const Toast = (title: string, description: string, isError: boolean) => {
  const toast = createStandaloneToast();
  const status = isError ? "error" : "success";
  toast({
    title: title,
    description: description,
    status: status,
  });
};

export default Toast;
