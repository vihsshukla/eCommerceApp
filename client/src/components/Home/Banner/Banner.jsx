import "./Banner.scss";

import BannerImg from '../../../assets/banner-img.png';
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique optio nihil voluptate illo fugiat consequatur ab nisi nostrum maiores ullam repellendus adipisci praesentium aspernatur, provident ducimus necessitatibus cum vitae.
                </p>
                <div className="ctas">
                    <div className="banner-cta">
                        Read More
                    </div>
                    <div className="banner-cta v2">
                        Shop now
                    </div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
