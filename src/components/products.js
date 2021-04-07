import React from 'react'
import parse from 'html-react-parser'

    const Products = ({ products }) => {
      return (
        <div>
          {products.map((product) => (
            <div key={product.id} className="card mb-2">
              <div className="card-header">
              {product.title}<span class="badge badge-info ml-5 float-right">{product.vendor}</span>
              <span class="badge badge-warning float-right">{product.product_type}</span>
              </div>
              <div className="d-flex justify-content-center mt-2">
              <img className="card-img-top" alt={product.image.alt} style={{width:'242px',height:'242px'}} src={product.image.src} />
              </div>
              <div className="card-body">                
                <div className="card-text">{parse(product.body_html)}</div>
                <div className="d-flex justify-content-center mt-2">
                <div>
                {product.images.map((i) => <img key={i.id} className="card-img-top" style={{width:'242px',height:'242px'}}  src={i.src} alt={i.alt} />)}  
                </div></div>         
             </div>
            </div>
          ))}
        </div>
      )
    };

    export default Products