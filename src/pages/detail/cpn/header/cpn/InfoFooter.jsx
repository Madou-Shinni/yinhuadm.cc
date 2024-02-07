import FooterPlay from "./FooterPlay.jsx";
import FooterShare from "./FooterShare.jsx";
import styles from './Footer.module.scss';

const InfoFooter = () => {
    return <div className={`${styles.footer} relative`}>
        <FooterPlay />
        <FooterShare />
    </div>
}

export default InfoFooter;