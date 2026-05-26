import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";

function LoginForm() {

  // NAVIGATION
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // VALIDATION
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      // FUTURO LOGIN REAL (SUPABASE)
      console.log({
        email,
        password,
      });

      // SIMULACIÓN LOGIN
      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      // REDIRECT
      navigate("/homepage");

    } catch (err) {

      setError(
        "Ha ocurrido un error al iniciar sesión"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        flex-col
        gap-6
        mt-8
      "
    >
      {/* EMAIL */}
      <Input
        label="Correo electrónico"
        type="email"
        placeholder="Introduce tu correo"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      {/* PASSWORD */}
      <div>
        <Input
          label="Contraseña"
          type="password"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* FORGOT PASSWORD */}
        <div className="flex justify-end mt-3">
          <button
            type="button"
            className="
              text-sm
              text-lime-400
              hover:text-lime-300
              transition-colors
              duration-300
            "
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div
          className="
            bg-red-500/10
            border
            border-red-500/20
            text-red-400
            text-sm
            rounded-2xl
            px-4
            py-3
          "
        >
          {error}
        </div>
      )}

      {/* BUTTON */}
      <div className="pt-2">
        <Button
          type="submit"
          loading={loading}
          variant="primary"
          size="lg"
        >
          Iniciar sesión
        </Button>
      </div>

      {/* REGISTER */}
      <div className="text-center pt-2">
        <span
          className="
            text-zinc-500
            text-sm
          "
        >
          ¿No tienes cuenta?
        </span>

        <Link
          to="/register"
          className="
            ml-2
            text-lime-400
            hover:text-lime-300
            font-semibold
            transition-colors
            duration-300
          "
        >
          Regístrate
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;