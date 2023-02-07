import "./_certificate.scss"

const CertInfo = ({ title, img, link }) => {
    return (
        <li className="certificate">
            <h3 className="certificate__title"><span>{title}</span></h3>
            <a href={link} target="_blank" rel="noreferrer" className="certificate__link"><img src={img} alt={title} className="certificate__img" /></a>
        </li>
    );
};

export { CertInfo };
