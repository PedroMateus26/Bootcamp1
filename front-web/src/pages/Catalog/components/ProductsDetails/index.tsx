import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss'

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    console.log(productId)
    return (
        <div className="producs-details-container">
            <div className="card-base border-radius-20 producs-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">VOLTAR</h1>
                </Link>
                <div className="row product-details-card">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                            <ProductImage className="product-details-image" />
                        </div>
                        <h1 className="product-details-name">
                            Computador Desktop - Intel Core i7
                        </h1>
                        <ProductPrice price="2.779,00"/>
                    </div>
                    <div className="col-6 product-details-card">
                        <h1 className="product-description-title">
                            Decrição do Produto
                        </h1>
                        <p className="product-description-text">
                            Projetado para garantir a produtividade no seu dia a dia
                            O desempenho que você precisa para uma jornada eficiente
                            é garantido pelos processadores Intel da família Core.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;