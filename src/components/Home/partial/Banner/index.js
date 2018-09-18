import React, { Component } from "react";
import { injectIntl, intlShape } from "react-intl";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import BannerTag from "./partial/BannerTag";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState(
      {
        data: [
          {
            bg: bg1,
            title: formatMessage({ id: "banner_1_title" }),
            word: [
              { title: formatMessage({ id: "banner_1_word_1" }) },
              { title: formatMessage({ id: "banner_1_word_2" }) },
              { title: formatMessage({ id: "banner_1_word_3" }) },
              { title: formatMessage({ id: "banner_1_word_4" }) },
              { title: formatMessage({ id: "banner_1_word_5" }) }
            ]
          },
          {
            bg: bg2,
            title: formatMessage({ id: "banner_2_title" }),
            word: [
              {
                title: formatMessage({ id: "banner_2_word_1" }),
                desc: [
                  formatMessage({ id: "banner_2_word_1_desc_1" }),
                  formatMessage({ id: "banner_2_word_1_desc_2" })
                ]
              },
              { title: formatMessage({ id: "banner_2_word_2" }) },
              {
                title: formatMessage({ id: "banner_2_word_3" }),
                desc: [
                  formatMessage({ id: "banner_2_word_3_desc_1" }),
                  formatMessage({ id: "banner_2_word_3_desc_2" })
                ]
              }
            ]
          }
        ]
      },
      () => {
        this.updateSwiper();
      }
    );
  }

  updateSwiper = () => {
    new Swiper(this.swiperID, {
      slidesPerView: 1,
      autoplay: {
        delay: 6000
      },
      loop: true,
      autoplayDisableOnInteraction: false
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div
        className="swiper-container"
        style={{ height: "782px" }}
        ref={self => (this.swiperID = self)}
      >
        <div className="swiper-wrapper">
          {data.map((item, key) => (
            <BannerTag key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Banner);
