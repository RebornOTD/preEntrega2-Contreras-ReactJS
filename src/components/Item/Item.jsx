import React from "react";
import Button from "../ButtonDetalle/ButtonDetalle";
import "./item.css";

import { Link } from "react-router-dom";

function Item({ id, titulo, imagen, stock, precio }) {
  const urlDetail = `/item/${id}`;

  return (
    <div className="producto">
        <img src={imagen} alt={titulo}></img>
        <div className="producto-descripcion">
            <p><b>{titulo}</b></p>
            <p>${precio}</p>
            <p><b>Stock disponible:</b> {stock}</p>
            <Link to={urlDetail}>
                <Button nombre="Ver Detalle"></Button>
            </Link>
        </div>
    </div>
  );
}

export default Item;