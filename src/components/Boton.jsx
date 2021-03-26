import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Boton extends Component {

constructor(props) {
   
}

render () {
    return (
        <div className="Boton">
          <Link to ="/facturas/:id" className="item">Ver detalle de factura</Link>
        </div>
      );
}
 
}
