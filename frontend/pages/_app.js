import Layout from "../components/Layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

//Components
import AdminProvider from "../components/context/AdminProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AdminProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AdminProvider>
    </ChakraProvider>
  );
}

export default MyApp;
