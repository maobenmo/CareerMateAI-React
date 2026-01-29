import Form from "./components/Form";
import Showcase from "./components/Showcase";

const SignUp = () => {
    return (
        <div className="flex *:flex-1 p-8 min-h-dvh">
            <Form />
            <Showcase />
        </div>
    );
}

export default SignUp;