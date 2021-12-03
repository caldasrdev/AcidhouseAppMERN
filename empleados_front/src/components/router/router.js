import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../login/login';
import ClientesBuscar from '../Clientes/buscar';
import Contact from '../contact/contact';
import QuienesSomos from '../quienes_somos/quienes_somos';
import Home from '../home/home';
import Terminos from '../terminos/terminos';
import Dashboard from '../../components/dashboard/dashboard'
import PrivateRoute from "../auth/privateroute";
import Product from "../Product/Product"
import Clientes from '../Clientes/Clientes'
import Proveedores from '../Proveedores/Proveedores'
import Empleados from '../Empleados/Empleados';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={ ["/", "/home"] } component={ Home } />
                <Route exact path={["/login"]} component={ Login } />
                <Route exact path={["/dashboard"]} component={Dashboard} />
                <Route exact path={["/contact"]} component={Contact} />
                <Route exact path={ ["/quienes_somos"] } component={ QuienesSomos } />
                <Route exact path={["/terminos"]} component={Terminos} />  
                <Route exact path={["/product"]} component={Product} /> 
                <Route exact path={["/clientesbuscar"]} component={ClientesBuscar} />
                <Route exact path={["/clientes"]} component={Clientes} /> 
                <Route exact path={["/proveedores"]} component={Proveedores} /> 
                <Route exact path={["/empleados"]} component={Empleados} /> 

                <Route path={ "*" } component={() => (
                    <h1 style={{ marginTop: 200 }}>
                     404
                    <br />
                    PAGINA NO ENCONTRADA
                    </h1>
                    )}
                />
            </Switch>
        </Router>
    );
}
