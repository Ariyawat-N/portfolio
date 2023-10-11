import React from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <main className="bg-[url('./assets/5171481.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500 bg-black/50'>
        <Navbar />
        <section className="h-[91.2%] w-[100%] items-center justify-center flex">
          <div className="w-[35%] h-[80%] rounded-3xl border-2 border-cyan-500 flex flex-col items-center gap-10">
            <h1 className="text-white text-4xl  mt-16 font-medium tracking-wide">Contact Me</h1>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="rounded-lg w-[50%] bg-blue-200"
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              className="rounded-lg w-[50%] bg-blue-200"
              
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Your Message"
              multiline
              maxRows={6}
              className="rounded-lg w-[50%] bg-blue-200"
            />
            <Button variant="contained" endIcon={<SendIcon />} className="w-[15%] hover:scale-125">
              Send
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
