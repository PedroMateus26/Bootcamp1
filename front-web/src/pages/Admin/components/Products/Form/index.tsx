import React, { useState } from "react";
import { makePrivateRequest } from "core/utils/request";
import BaseForm from "../../BaseForm";
import "./styles.scss";
import { useForm } from "react-hook-form";

type FormState = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

const Form = () => {

  const {register, handleSubmit} = useForm<FormState>();

  const onSubmit = (data:FormState) => {
    makePrivateRequest({ url: "/products", method: "POST", data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <input
              ref={register({ required: "Campo obrigatório" })}
              type="text"
              name="name"
              className="form-control margin-bottom-30 input-base"
              placeholder="Nome do Produto"
            />
            <input
              ref={register({ required: "Campo obrigatório" })}
              type="text"
              name="price"
              className="form-control margin-bottom-30 input-base"
              placeholder="Price"
            />
            <input
              ref={register({ required: "Campo obrigatório" })}
              type="text"
              name="imageUrl"
              className="form-control margin-bottom-30 input-base"
              placeholder="Imagem do Produto"
            />
          </div>
          <div className="col-6">
            <textarea
              ref={register({ required: "Campo obrigatório" })}
              name="description"
              placeholder="Descrição"
              className="form-control input-base"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
