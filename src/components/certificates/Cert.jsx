import { certificatetList } from "./certificateList";
import { CertInfo } from "./CertInfo";
import "./_certificate.scss"

const Cert = () => {
    return (
        <div className="certificates">
            <div className="container">
                <h2 className="certificates__title">My certificates</h2>
                <ul className="certificates__list">
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
                </ul>
            </div>
        </div>
    );
}

export { Cert };