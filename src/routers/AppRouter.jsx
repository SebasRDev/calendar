import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  console.log(authStatus);

  return (
    <BrowserRouter>
      <Routes>
        {authStatus === "not-authenticated" ? (
          <Route path="/login" element={<LoginScreen />} />
        ) : (
          <Route path="/*" element={<CalendarScreen />} />
        )}

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
