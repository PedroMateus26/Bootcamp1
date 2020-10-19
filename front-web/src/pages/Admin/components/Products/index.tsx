import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BaseForm from '../BaseForm';

const Products=()=>{
    return (
        <div>
            <Link to="/admin/products" className="mr-5">
                Listar produtos
            </Link>
            <Link to="/admin/products/create" className="mr-5">
                Criar produto
            </Link>
            <Link to="/admin/products/:productId" className="mr-5">
                Editar produtos
            </Link>
            <Switch>
                <Route path="/admin/products" exact>
                    <h1>Exibir a listagem de produtos</h1>
                </Route>
                <Route path="/admin/products/create">
                    <BaseForm title="cadastrar um produto">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </BaseForm>
                </Route>
                <Route path="/admin/products/:productId">
                    
                </Route>
            </Switch>
        </div>
    )
}

export default Products;