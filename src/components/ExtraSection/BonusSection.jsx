import { Label, TextInput, Textarea } from "flowbite-react";

const BonusSection = () => {
  return (
    <div className="h-[400px] rounded-lg bg-blue-gray-100 mb-10">
      <div className="pl-[520px] pt-7">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <h1 className="text-center text-3xl my-6 font-serif font-bold">Send Your Feedback</h1>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email:" />
            </div>
            <TextInput
              id="email1"
              type="email"
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
        </form>
      </div>
    </div>
  );
};

export default BonusSection;
