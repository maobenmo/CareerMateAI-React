import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = () => {
    return (
        <header className="fixed p-8">
            <Image src={logo} alt="CareerMate AI Logo" width={184} height={24}/>
        </header>
    );
}

export default Header;