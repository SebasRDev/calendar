import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Loading...</h3>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {status === "not-authenticated" 
          ? (
            <>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )    
          : (
            <>
              <Route path="/" element={<CalendarScreen />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
        )}

      </Routes>
    </BrowserRouter>
  );
};
