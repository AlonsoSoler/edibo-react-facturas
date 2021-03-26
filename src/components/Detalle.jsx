import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Detalle extends Component {

constructor(props) {
    super(props);
    this.state = {
      factura: [],
    };
}

componentDidMount() {
    axios.get("http://localhost:8000/facturas/:id").then((res) =>
      this.setState({
        factura: res.data,
      })
    );
    }

render () {
    return (
        <div className="Boton">
          <Link to ="/facturas/:id" className="item">Ver detalle de factura</Link>
        </div>
      );
}
 
}
