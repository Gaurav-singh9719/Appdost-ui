import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  return (
    <section className="pt-24 pb-20 min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto w-full px-6">
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-sm text-gray-500 mb-6">Sign in to continue to AppDost</p>

          <form className="space-y-4">
            <InputField label="Email" type="email" placeholder="you@company.com" required />
            <InputField label="Password" type="password" placeholder="Your password" required />
            <Button type="submit" className="w-full">Sign in</Button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
