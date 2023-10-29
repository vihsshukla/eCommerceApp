import "./Product.scss";
import {useNavigate} from "react-router-dom";
const Product = (props) => {
    const navigate=useNavigate();
    return <div className="product-card" onClick={()=>{
        navigate("/product/"+props.id)
        }   
    }>
        <div className="thumbnail">
            <img src={
                process.env.REACT_APP_DEV_URL+
                props.data.img.data[0].attributes.url
            } alt="" />
        </div>
        <div className="prod-details">
            <span className="name">{props.data.title}</span>
            <span className="price">&#8377;{props.data.price}</span>
        </div>
    </div>;
};

export default Product;
