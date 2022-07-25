import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.use(initReactI18next).init({
	interpolation: { escapeValue: false },
	lng: "vi",
	resources: {
		en: {
			common: common_en,
		},
		vi: {
			common: common_vi,
		},
	},
});

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
