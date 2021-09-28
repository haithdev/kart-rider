import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "reactstrap";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider1.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settings = {
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <div style={{ display: "flex" }}>
        <div className="slide">
          <Button onClick={this.previous}>
            <img
              src="static/assets/img/Button-frames/btn-arrow.png"
              alt=""
              srcset=""
            />
          </Button>
          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          <Button onClick={this.next}>
            {" "}
            <img
              src="static/assets/img/Button-frames/btn-arrow.png"
              alt=""
              srcset=""
            />
          </Button>
        </div>
        <div className="slide-preview">
          <Slider
            {...settings}
            asNavFor={this.state.nav2}
            ref={(slider) => {
              this.slider1 = slider;
            }}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
