import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onChecking, onLogin, onFailedLogin, clearErrorMsg } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post("/auth", { email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onFailedLogin("El email/contraseña son incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMsg());
      }, 100);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post("/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      const { msg } = error.response?.data;

      dispatch(
        onFailedLogin(
          msg || "---Error en el registro, contacte al administrador"
        )
      );
      setTimeout(() => {
        dispatch(clearErrorMsg());
      }, 100);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onFailedLogin());

    try {
      const { data } = await calendarApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onFailedLogin());
    }
  };

  const startLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');
    dispatch( onFailedLogin() );
  }

  return {
    //*propiedas
    status,
    user,
    errorMessage,

    //*Métodos
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
