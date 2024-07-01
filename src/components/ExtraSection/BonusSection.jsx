import { Button, Label, TextInput, Textarea } from "flowbite-react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const BonusSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ikq8lw4', 'template_ns308dl', form.current, 'f8OiDj-w70sXgI4zP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="h-[500px] rounded-lg bg-blue-gray-100 mb-10">
      <div className="lg:pl-[520px] lg:p-0 p-4 pt-5">
        <form ref={form} onSubmit={sendEmail} className="flex max-w-md flex-col gap-4">
          <div>
            <h1 className="text-center text-3xl my-6 font-serif font-bold">Send Your Feedback</h1>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your Name:" />
            </div>
            <TextInput
              id="email1"
              type="text"
              name="name"
              placeholder="Input your Name"
              required
            />
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email:" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="Input your email"
              required
            />
          </div>       
          
          <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your feedback:" />
      </div>
      <Textarea id="comment" placeholder="Leave a feedback..." required rows={4} />
    </div>
    <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default BonusSection;
