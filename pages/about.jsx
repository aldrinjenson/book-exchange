import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div>
      <h2>About TBT - Book Exchange</h2>
      <Typography>
        A platform for those interested in books to share and exchange books of
        all sorts✨
      </Typography>
      <Typography>Add prize if you really want to..</Typography>
      <br />
      <Typography>Created by the students of MEC✨</Typography>
      <Box m={20} />
      <hr />
      <Typography className='mt-6'>
        Made with ❤️ by
        <Link href='https://github.com/tbtMEC/book-exchange'>TBT MEC</Link>
      </Typography>
    </div>
  );
};

export default about;
