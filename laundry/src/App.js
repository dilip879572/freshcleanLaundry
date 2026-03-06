import logo from './logo.svg';
import './App.css';
import Header from "./Components/Common/Header/Header"
import AppRouter from "./Components/Common/Router/Router";
import CookieConsent from "./Components/Common/CookieConsent/CookieConsent"
function App() {
  return (
    <div className="App">
<AppRouter/>
    </div>
  );
}

export default App;
