import React, { Component } from "react";
import Boton from "./components/Boton";
import axios from "axios";

export default class Tabla extends Component {

constructor(props) {
    super(props);
    this.state = {
      facturas: [],
    };
}

    componentDidMount() {
        axios.get("http://localhost:8000/facturas").then((res) =>
          this.setState({
            facturas: res.data,
          })
        );
        }
    
    render() {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nº factura</th>
                  <th>Cliente</th>
                  <th>Cantidad</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>

                {this.state.facturas.map((factura, i) => (

                  <tr key={i}>
                    <td>{factura.id}</td>
                    <td>{factura.cliente}</td>
                    <td>{factura.cantidad}</td>
                    <td>{factura.fecha}</td>
                    <td><Boton></Boton></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    }
    