import { Card, Button, Badge } from "antd";
import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "./ProductListComp.css";

export const ProductListComp = () => {

  const { product, cartItems, addToCart, onAddCount,onRemoveCount,count} = useContext(ProductsContext);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-12">
        {product?.length > 0 && cartItems.length ? (
          <div className="cartSection">
            <div className="mb-2">Cart Items</div>
            {cartItems &&
              cartItems.map((product) => (
                <Card bordered={true} className="mb-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div>{product?.productName}</div>
                    <div>
                    <strong>
                      ${parseFloat(product?.cost * count)}</strong><span>(${parseFloat(product?.cost)}/item)</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="">
                      <strong>x{count}</strong>
                    </div>
                    <div className="d-flex gap-2">
                      <Button type="primary" onClick={() => onRemoveCount(product)}>-</Button>
                      <Button type="primary" onClick={() => onAddCount(product)}>+</Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        ) : null}
        {product.length ? (
          <>
            <div className="py-2 text-center">BUY PRODUCTS</div>
            <div>
              {product &&
                product.map((product) => (
                  <Card bordered={true} className="mb-2">
                    <div className="d-flex justify-content-between mb-3">
                      <div>{product?.productName}</div>
                      <div>
                        <Badge
                          count={`$${parseFloat(product?.cost)}`}
                          size="default"
                          color="#3F3B3C"
                        />
                      </div>
                      {/* <div>${parseFloat(product?.cost)}</div> */}
                    </div>
                    <div className="d-flex justify-content-end">
                      <Button type="primary" onClick={() => addToCart(product)}>
                        Add to cart
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
