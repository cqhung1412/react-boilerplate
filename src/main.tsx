import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./App";
import "./index.css";

const theme = {
  token: {
    colorPrimary: "#52C41A",
    borderRadius: 16,
  },
  components: {
    Menu: {
      radiusItem: 2,
    },
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
