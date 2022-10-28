import DrawerAppbarLayout from "../components/DrawerAppBarLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DrawerAppbarLayout>
      <Component {...pageProps} />
    </DrawerAppbarLayout>
  );
}

export default MyApp;
