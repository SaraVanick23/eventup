import "./Login.css";
function Login() {
  return (
    <main className="pagina-login">
      <form className="formulario-de-login">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <p className="texto-criar-conta">
          Ainda não tem uma conta? Cadastre-se!
        </p>
      </form>
    </main>
  );
}

export default Login;
