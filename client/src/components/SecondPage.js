import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions';
import logo from '../resources/logo.svg';
import cart from '../resources/cart.svg';
import line from '../resources/line.svg';
import tag from '../resources/tag.svg';
import line2 from '../resources/line2.svg';
import sort from '../resources/sort.svg';
import filter from '../resources/filter.svg';
import vector from '../resources/vector.svg';



class SecondPage extends React.Component{
    componentDidMount(){
        this.props.fetchProducts(); 
    }

    renderPage(){
        return this.props.products.map(product => {
            return (
                <div className='featured-product' key={product.id}>
                   <img src={product.image} alt={product.name}  className='product-image'/>
                   <img src={tag} alt='tag' className='photo-tag' />
                   <h4 className='photo-dday'>Photo of the day</h4>
                   <div className='product-name'>
                      {product.name}
                      <button className='add-product'>ADD TO CART</button>
                   </div>
                    <h4 className='about'>About the Samurai King Resting</h4>
                    <h4 className='recommendation'>People also buy</h4>
                   <div className='category'>
                       {product.category}
                   </div>
                   <div className='description'>
                       {product.description}
                   </div>
                   <div>
                   <img src={product.recommendation1} alt='recommendation1'  className='recommendation1'/>
                   <img src={product.recommendation2} alt='recommendation2'  className='recommendation2'/>
                   <img src={product.recommendation3} alt='recommendation3'  className='recommendation3'/>
                   <h4 className='details'>Details</h4>
                   <h5 className='dimension'>Size: 1020 x 1020 pixel</h5>
                   <h5 className='size'>Size: 15 mb</h5>
                   <img src={line2} alt='line2' className='line2'/>
                   <h3 className='photography'>Photography&nbsp;&nbsp;/</h3>
                   <h3 className='premium-photos'>Premium Photos</h3>
                   <img src={sort} alt='sort-icon' className='sort icon' />
                   <img src={filter} alt='filter' className='filter' />
                   <h4 className='sort-by'>Sort By</h4>
                   <img src={product.image7} alt={product.name7} className='product-image1'/>
                   <p className='product-category1'>{product.category7}</p>
                   <p className='product-name1'>{product.name7}</p>
                   <p className='product-price1'>$60.00</p>
                   <button className='add-product1' >ADD TO CART</button>
                   

                   <img src={product.image8} alt={product.name8} className='product-image2'/>
                   <p className='product-category2'>{product.category8}</p>
                   <p className='product-name2'>{product.name8}</p>
                   <p className='product-price2'>$70.00</p>
                   <button className='add-product2' >ADD TO CART</button>
                   <img src={tag} alt='tag' className='photo-tag1' />

                   <h4 className='best-seller'>Best Seller</h4>

                   <img src={product.image9} alt={product.name9} className='product-image3'/>
                   <p className='product-category3'>{product.category9}</p>
                   <p className='product-name3'>{product.name9}</p>
                   <p className='product-price3'>$45.00</p>
                   <button className='add-product3' >ADD TO CART</button>

                   <img src={product.image10} alt={product.name10} className='product-image4'/>
                   <p className='product-category4'>{product.category10}</p>
                   <p className='product-name4'>{product.name10}</p>
                   <p className='product-price4'>$95.00</p>
                   <button className='add-product4' >ADD TO CART</button>

                   <img src={product.image11} alt={product.name11} className='product-image5'/>
                   <p className='product-category5'>{product.category11}</p>
                   <p className='product-name5'>{product.name11}</p>
                   <p className='product-price5'>$110.00</p>
                   <button className='add-product5' >ADD TO CART</button>


                   <img src={product.image12} alt={product.name12} className='product-image6'/>
                   <p className='product-category6'>{product.category12}</p>
                   <p className='product-name6'>{product.name12}</p>
                   <p className='product-price6'>$130.00</p>
                   <button className='add-product6' >ADD TO CART</button>
                  


                   
                  </div>
                </div>
            )

            })
        }

     
        render(){
        
            return (
                <section>
                <header>
                <img src={logo} alt='logo' className='logo' />
                <img src={cart} alt='cart' className='cart' />
                <img src={line} alt='line' className='line' />
                </header>
                <div>{this.renderPage()}</div>
                <div>
                   <div>
                   <select name="select" className="select" >
                    <option value="alphabetically">Alphabetically</option>
                    <option value="price">Price</option>
                   </select>
                   </div>
                   <div className='category-select'>
                     <h4 className='category-type'>Category</h4>
                     <input className='people' type='checkbox' value='People'/>
                     <p className='people-select'>People</p>
                     <input className='premium' type='checkbox' value='Premium'/>
                     <p className='premium-select'>Premium</p>
                     <input className='pets' type='checkbox' value='Pets'/>
                     <p className='pets-select'>Pets</p>
                     <input className='food' type='checkbox' value='Food'/>
                     <p className='food-select'>Food</p>
                     <input className='landmarks' type='checkbox' value='Landmarks'/>
                     <p className='landmarks-select'>Landmarks</p>
                     <input className='cities' type='checkbox' value='Cities'/>
                     <p className='cities-select'>Cities</p>
                     <input className='nature' type='checkbox' value='Nature'/>
                     <p className='nature-select'>Nature</p>
                     <img src={vector} alt='vector' className='vector' />
                   </div>
                   <div className='price-range'>
                     <input className='lower-twenty' type='checkbox' value='<20'/>
                     <p className='twenty-lower'>Lower than $20</p>  
                     <input className='lower-hundred' type='checkbox' value='<100'/>
                     <p className='hundred-lower'>$20 - $100</p>  
                     <input className='lower-twohundred' type='checkbox' value='<200'/>
                     <p className='twohundred-lower'>$100 - $200</p>
                     <input className='greater-twohundred' type='checkbox' value='>200'/>
                     <p className='twohundred-greater'>More than $200</p>  
                   </div>
                   
                </div>
            </section>
            )
        }
}


    const mapStateToProps = (state) =>{

        return {products: state.products}
    }
    
    export default connect(mapStateToProps,{fetchProducts})(SecondPage);