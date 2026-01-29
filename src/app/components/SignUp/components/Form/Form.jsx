import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";

const Form = () => {
  return (
    <form className="px-[125px] my-auto">
      <div className="mb-16">
        <h1 className="font-black text-[40px]">Create Your Account</h1>
        <p className="text-sm text-gray-700 mt-3">Join CareerMate AI and start your smart career journey</p>
      </div>
      <div className="space-y-6">
        <Field label={"Full Name"} placeholder={"Your Full Name"} />
        <Field label={"Email"} placeholder={"Your Email"} />
        <Field label={"Password"} placeholder={"Create Your Password"} />
      </div>

      <div className="mt-10 space-y-6">
          <Button >Create Account</Button>
          &nbsp;
          <LoginLink />
      </div>
    </form>
  );
}

export default Form;