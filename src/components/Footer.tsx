import { Mic, Lightbulb, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            {/* Red CTA Section */}
            <div className={styles.ctaSection}>
                <div className={styles.ctaBackground} />
                <div className={styles.ctaContainer}>
                    {/* Left Icon (Mic) */}
                    <div className={`${styles.floatingIcon} ${styles.iconLeft}`}>
                        <Mic size={120} strokeWidth={1.5} />
                    </div>
                    
                    {/* Right Icon (Lightbulb) */}
                    <div className={`${styles.floatingIcon} ${styles.iconRight}`}>
                        <Lightbulb size={120} strokeWidth={1.5} />
                    </div>

                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Prêt à créer l'inoubliable ?</h2>
                        <p className={styles.ctaSubtitle}>Contactez-nous pour transformer votre vision en réalité.</p>
                        <button className={styles.ctaButton}>
                            DISCUTONS DE VOTRE PROJET
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className={styles.mainFooter}>
                <div className={styles.footerContainer}>
                    {/* Column 1: Brand */}
                    <div className={styles.colBrand}>
                        <div className={styles.logo}>
                            <span className={styles.logoMain}>CRB</span>
                            <span className={styles.logoSig}>Réjean B.</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Créateur d'événements marquants et de souvenirs impérissables depuis plus de 20 ans.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className={styles.colNav}>
                        <h3 className={styles.colTitle}>NAVIGATION</h3>
                        <ul className={styles.links}>
                            <li><a href="#home">Accueil</a></li>
                            <li><a href="#about">À Propos</a></li>
                            <li><a href="#services-preview">Services</a></li>
                            <li><a href="#vision-mission">Vision</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className={styles.colContact}>
                        <h3 className={styles.colTitle}>CONTACT</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <Phone size={18} className={styles.contactIcon} />
                                <span>+1 514 123 4567</span>
                            </li>
                            <li>
                                <Mail size={18} className={styles.contactIcon} />
                                <span>contact@rejeanbouthillette.com</span>
                            </li>
                            <li>
                                <MapPin size={18} className={styles.contactIcon} />
                                <span>Montréal, Québec</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Réjean Bouthillette. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
