import { Button, notification } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";

export const Header = () => {
  let navigate = useNavigate();
  const { login,addProduct ,removeCartItems } = useContext(ProductsContext);

  const onLogout = () => {
    addProduct([])
    removeCartItems([])
    login(false);
    localStorage.removeItem("userData");
    navigate("/");
    notification.success({ message: "Logout successful" });
  };
  return (
    <div>
      {" "}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-12">
          <div className="d-flex w-100 justify-content-between p-2">
            <div className=""><h2>eCommerce</h2></div>
            <div className="logOut">
              <Button
                onClick={onLogout}
                type="primary"
                style={{ justifyContent: "flex-end" }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
