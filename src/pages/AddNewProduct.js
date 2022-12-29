
import React from "react";
import { AddProductForm } from "../component/AddNewProduct/AddProductForm";

export const AddNewProduct = () => {

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
            <div className="py-2 text-center">ADD PRODUCTS</div>
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};
