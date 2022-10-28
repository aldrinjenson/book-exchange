import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BooksList from "../components/BooksList";
import AddBookModal from "../components/AddBookModal";

export default function Home() {
  return (
    <div className={{}}>
      <Head>
        <title>TBT - BOOK Exchange</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />

        <meta
          name='description'
          content='Book exchange website created by TBT MEC'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-center'>
        <AddBookModal />
      </div>

      <BooksList />
    </div>
  );
}
