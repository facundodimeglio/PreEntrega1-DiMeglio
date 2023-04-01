import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h1 className="text-center fs-1 fw-bold text-primary">{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
