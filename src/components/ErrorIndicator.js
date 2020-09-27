import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const ErrorIndicator = () => (
   <Alert severity="error">
      <AlertTitle>ОШИБКА</AlertTitle>
      Что-то пошло не так <strong>попробуйте позже!</strong>
   </Alert>
);

export default ErrorIndicator;
