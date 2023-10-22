import React from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#06b6d4',
      white: '#ffff'
    },
  },
});

const Contact = () => {
  return (
    <main className="bg-[url('./assets/5171481.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500 bg-black/50'>
        <Navbar />
        <section className="h-[91.2%] w-[100%] items-center justify-center flex">
          <div className="w-[35%] h-[80%] rounded-3xl border-2 border-cyan-500">
            <h1 className="text-white text-4xl  mt-16 font-fontTwo tracking-wide text-center">Contact Me</h1>
            <form action="https://getform.io/f/ce3cd1d6-954d-4dec-abec-33aec4ac971b" method="POST" className=" flex flex-col items-center gap-12 pt-12">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="rounded-lg w-[50%] bg-blue-200"
              name="fullname"
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              className="rounded-lg w-[50%] bg-blue-200"
              name="email"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Your Message"
              multiline
              maxRows={6}
              className="rounded-lg w-[50%] bg-blue-200"
              name="message"
            />
            <ThemeProvider theme={theme}>
            <Button  type="submit" variant="contained" endIcon={<SendIcon />} color="ochre" className="w-[15%] hover:scale-110">
              Send
            </Button>
            </ThemeProvider>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
