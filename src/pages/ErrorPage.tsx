import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={30}>
        <Heading>404</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page not found."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};
export default ErrorPage;
