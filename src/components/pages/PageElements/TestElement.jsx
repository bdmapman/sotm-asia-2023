import { Image, Card } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const { Meta } = Card;

export const TestElement = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div>
            <Carousel style={{width: '100%'}}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={true}
            >
                <div>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: 240,
                            alignItems: "center",
                            margin: 10,
                        }}
                        cover={<img style={{ height: 160, padding: 10 }} alt="example" src='https://picsum.photos/200/300' />}
                    >
                        <Meta style={{ textAlign: "center" }} title="PRESENTATION" description="25 Minutes" />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: 240,
                            alignItems: "center",
                            margin: 10,
                        }}
                        cover={<img style={{ height: 160, padding: 10 }} alt="example" src='https://picsum.photos/700/600' />}
                    >
                        <Meta style={{ textAlign: "center" }} title="PRESENTATION" description="25 Minutes" />
                    </Card>
                </div>
                <div>
                    <Card
                        hoverable
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: 240,
                            alignItems: "center",
                            margin: 10,
                        }}
                        cover={<img style={{ height: 160, padding: 10 }} alt="example" src='https://picsum.photos/500/400' />}
                    >
                        <Meta style={{ textAlign: "center" }} title="PRESENTATION" description="25 Minutes" />
                    </Card>
                </div>
                {/* <div>
                    <Image height={200} preview={false} src="https://picsum.photos/600/500"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/700/600"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/500/400"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/600/500"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/700/600"></Image>
                </div>
                <div>
                    <Image height={200} preview={false} src="https://picsum.photos/500/400"></Image>
                </div> */}
            </Carousel>
        </div>
    );
};
