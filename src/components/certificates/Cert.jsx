import { certificatetList } from "./certificateList";
import { CertInfo } from "./CertInfo";
import "./_certificate.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Cert = () => {
    return (
        <div className="certificates">
            <div className="container">
                <h2 className="certificates__title">My certificates</h2>
                <Carousel className="certificates__list" autoPlay interval="5000" transitionTime="2000" infiniteLoop>
                    {certificatetList.map((certificate, index) => {
                        return (
                            <CertInfo
                                key={index}
                                title={certificate.title}
                                img={certificate.img}
                                link={certificate.link}
                            />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export { Cert };