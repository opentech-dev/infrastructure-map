import { Provider } from "react-redux";
import Router from "./routes";
import { store } from "./store";
import LanguageProvider from "./components/language-provider";
import "external-svg-loader";

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </Provider>
  );
}

export default App;
