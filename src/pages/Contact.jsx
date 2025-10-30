import InputField from "../components/InputField";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="pt-24 pb-20 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-2">Contact us</h2>
          <p className="text-sm text-gray-500 mb-6">Have questions? Send us a message and we'll get back to you.</p>

          <form className="grid grid-cols-1 gap-4">
            <InputField label="Your name" name="name" placeholder="Full name" required />
            <InputField label="Email" type="email" name="email" placeholder="you@company.com" required />
            <InputField label="Message" textarea name="message" placeholder="Write your message..." required />
            <div className="mt-2">
              <Button type="submit">Send message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
