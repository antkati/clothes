import React from "react";
import Slider from "react-slick";
import "../styles/SimilarProductsCarousel.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function ProductItem(props) {
    const { product } = props;
    return (
        <div className="recommendation-item">
            <a className="recommendation__img__link" href="#">
                <img className="recommendation-item__img" src={product.image} />
            </a>
            <div className="recommendation-item__header">
                <a href="#">
                    <h4 className="font--lato-bold">{product.name}</h4>
                </a>
                <p className="recommendation-item__price">{"€" + product.price}</p>
            </div>
        </div> 
    )
}

class SimilarProductsCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
            appendDots: dots => (
                <ul style={{ position: "static" }}> {dots} </ul>
            ),
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };

        const { products } = this.props;
        const productsList = products.map((product) => {
            return <ProductItem key={product.name} product={product}/>
        })

        return (
            <React.Fragment>
                <Slider {...settings}>
                    {productsList}
                </Slider>
            </React.Fragment>
        )
    }
}

export default SimilarProductsCarousel;


