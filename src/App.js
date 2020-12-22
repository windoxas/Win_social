import './App.css';
import Header from "./components/header/Header";
import Navigation from "./components/navagition/Navigation";
import Content from "./components/main-content/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Content
                name="Nick Lengars"
                birth="12 December 1996 year"
                city="Tashkent"
                work="Web developer Dream House"
                site="www.jullies.com"
            />


        </div>
    );
}

export default App;
