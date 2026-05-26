import { FaGoogle, FaApple } from "react-icons/fa";

import Button from "../ui/Button.jsx";
import Divider from "../ui/Divider.jsx";

function SocialLogin() {

  const handleGoogleLogin = async () => {
    try {
      // Aquí irá Supabase OAuth Google
      console.log("Login con Google");
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      // Aquí irá Supabase OAuth Apple
      console.log("Login con Apple");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      
      {/* DIVIDER */}
      <Divider text="o continúa con" />

      {/* GOOGLE BUTTON */}
      <Button
        variant="secondary"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="text-lg" />
        Continuar con Google
      </Button>

      {/* APPLE BUTTON */}
      <Button
        variant="secondary"
        onClick={handleAppleLogin}
      >
        <FaApple className="text-lg" />
        Continuar con Apple
      </Button>
    </div>
  );
}

export default SocialLogin;