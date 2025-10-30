import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup = () => {
  return (
    <section className="pt-24 pb-20 min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto w-full px-6">
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-1">Create account</h2>
          <p className="text-sm text-gray-500 mb-6">Get started with a free account</p>

          <form className="space-y-4">
            <InputField label="Full name" name="name" placeholder="Your full name" required />
            <InputField label="Email" type="email" name="email" placeholder="you@company.com" required />
            <InputField label="Password" type="password" name="password" placeholder="Choose a password" required />
            <Button type="submit" className="w-full">Create account</Button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-primary font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
