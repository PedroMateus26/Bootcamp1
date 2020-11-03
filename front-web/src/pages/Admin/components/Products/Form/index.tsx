import React, { useState } from "react";
import { makePrivateRequest} from "core/utils/request";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState={
  name:string;
  price:string;
  category:string;
  description:string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name:'',
    price:'',
    category:'1',
    description:''

  });

  type FormEvent=HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement;

  const handleOnChange=(event: React.ChangeEvent<FormEvent>)=>{
    const name=event.target.name;
    const value=event.target.value;
    setFormData(data=>({...data,[name]:value}))
    
  }

  const handleOnSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const payload={
      ...formData,
      imgUrl:'https://images5.kabum.com.br/produtos/fotos/128245/console-sony-playstation-5-digital-edition_1600364532_gg.jpg',
      categories:[{id:formData.category}]
    }
    makePrivateRequest({url:'/products', method:'POST', data:payload}).then(()=>{
      setFormData({
        name:'',
        category:'',
        price:'',
        description:''
      })
    })
    
  }

  return (
    <form onSubmit={handleOnSubmit}>
    <BaseForm title="cadastrar um produto">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            value={formData.name}
            name="name"
            className="form-control mb-5"
            onChange={handleOnChange}
            placeholder="Nome"
          />
           <input
            type="text"
            value={formData.price}
            name="price"
            className="form-control mb-5"
            onChange={handleOnChange}
            placeholder="Price"
          />
          <select className="form-control mb-5"
          value={formData.category}
          name="category"
          onChange={handleOnChange}
          
          >
            <option value="3">Computadores</option>
            <option value="2">Eletrônicos</option>
            <option value="1">Livros</option>
            
          </select>
        </div>
        <div className="col-6">
          <textarea
           name="description"
           value={formData.description}
           className='form-control'
           onChange={handleOnChange}
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
