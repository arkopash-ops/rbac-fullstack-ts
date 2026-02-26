import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme/darkTheme";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout from "./component/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
