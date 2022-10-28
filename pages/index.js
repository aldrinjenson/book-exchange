import Head from "next/head";

import BooksList from "../components/BooksList";
import AddBookModal from "../components/AddBookModal";

export default function Home() {
  return (
    <div className={{}}>
      <Head>
        <title>TBT - BOOK Exchange</title>
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
