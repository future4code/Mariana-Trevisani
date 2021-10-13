import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/paginas/Autenticacao";
import Home from "./components/paginas/Home";
import CadastroViagem from "./components/paginas/CadastroDeViagens";
import HomeAdministrativa from "./components/paginas/HomeAdministrativa";
import ListaViagens from "./components/paginas/ListaViagens";
import InscricaoViagens from "./components/paginas/InscricaoViagens";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/CadastroViagem" component={CadastroViagem} />
        <Route
          exact
          path="/HomeAdministrativa"
          component={HomeAdministrativa}
        />
        <Route exact path="/ListaViagens" component={ListaViagens} />
        <Route exact path="/InscricaoViagens" component={InscricaoViagens} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
