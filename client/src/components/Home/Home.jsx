import "./Home.scss";

import { useEffect,useContext } from "react";
import {fetchDataFromApi} from '../../utils/app';
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from '../Products/Products';
import { Context } from "../../utils/context";

const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(Context);

    useEffect(()=>{
        getProducts();
        getCategories();
    },[]);

    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((value)=>{
                console.log(value);
                setCategories(value);
            },
            (error)=>{
                console.error(error);
            }
        );
    }

    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((value)=>{
                console.log(value);
                setProducts(value);
            },
            (error)=>{
                console.error(error);
            }
        );
    }

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories}/>
                <Products headingText="Popular Products" products={products}/>
            </div>
        </div> 
    </div>;
};

export default Home;
