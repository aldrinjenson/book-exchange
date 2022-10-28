import DrawerAppbarLayout from "../components/DrawerAppBarLayout";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <DrawerAppbarLayout>
      <Component {...pageProps} />
    </DrawerAppbarLayout>
  );
}

export default MyApp;
