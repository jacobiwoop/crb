import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { 
  Menu, X, MapPin, Clock, Search, 
  Facebook, Twitter, Linkedin, Instagram, ChevronDown 
} from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.topBarLeft}>
                        <span>Créateur d'émotions et d'expériences inoubliables</span>
                    </div>
                    <div className={styles.topBarRight}>
                        <div className={styles.infoItem}>
                            <MapPin size={14} />
                            <span>Montréal, Québec</span>
                        </div>
                        <div className={styles.infoItem}>
                            <Clock size={14} />
                            <span>Lun - Ven: 9:00 - 18:00</span>
                        </div>
                        <div className={styles.socials}>
                            <span>Suivez-nous:</span>
                            <a href="#"><Facebook size={14} /></a>
                            <a href="#"><Twitter size={14} /></a>
                            <a href="#"><Linkedin size={14} /></a>
                            <a href="#"><Instagram size={14} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header (Logo & Search) */}
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logoSection}>
                        <div className={styles.logoIcon}>
                            <span>CRB</span>
                        </div>
                        <div className={styles.logoText}>
                            <h1>CRB EVENTS</h1>
                            <span>Animation & Événementiel</span>
                        </div>
                    </div>

                    <div className={styles.headerActions}>
                        <div className={styles.contactInfo}>
                            <span>Besoin d'aide?</span>
                            <strong>Demandez un rappel</strong>
                        </div>
                        
                        <div className={styles.searchBox}>
                            <input type="text" placeholder="Rechercher..." />
                            <button><Search size={18} /></button>
                        </div>

                        <HashLink smooth to="/#contact" className={styles.ctaButton}>
                            RÉSERVER
                        </HashLink>
                    </div>

                    <button 
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Bottom Bar (Navigation) */}
            <nav className={`${styles.navBar} ${isSticky ? styles.sticky : ''}`}>
                <div className={styles.container}>
                    <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                        <li><HashLink smooth to="/#home" className={styles.active}>ACCUEIL</HashLink></li>
                        
                        {/* Services Dropdown */}
                        <li 
                            className={styles.dropdownTrigger}
                            onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('services')}
                            onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
                            onClick={() => mobileMenuOpen && toggleDropdown('services')}
                        >
                            <span className={styles.navItem}>
                                SERVICES <ChevronDown size={14} className={styles.chevron} />
                            </span>
                            <ul className={`${styles.dropdownMenu} ${activeDropdown === 'services' ? styles.show : ''}`}>
                                <li><HashLink smooth to="/#services-commercial">Animation Commerciale</HashLink></li>
                                <li><HashLink smooth to="/#services-private">Événements Privés</HashLink></li>
                                <li><HashLink smooth to="/#services-production">Production & Spectacles</HashLink></li>
                                <li><HashLink smooth to="/#services-weddings">Mariages & Surprises</HashLink></li>
                            </ul>
                        </li>

                        <li><Link to="/realisations">RÉALISATIONS</Link></li>

                        {/* About Dropdown */}
                        <li 
                            className={styles.dropdownTrigger}
                            onMouseEnter={() => !mobileMenuOpen && setActiveDropdown('about')}
                            onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
                            onClick={() => mobileMenuOpen && toggleDropdown('about')}
                        >
                            <span className={styles.navItem}>
                                À PROPOS <ChevronDown size={14} className={styles.chevron} />
                            </span>
                            <ul className={`${styles.dropdownMenu} ${activeDropdown === 'about' ? styles.show : ''}`}>
                                <li><HashLink smooth to="/a-propos#about">Le Fondateur</HashLink></li>
                                <li><HashLink smooth to="/a-propos#vision-mission">Vision & Mission</HashLink></li>
                                <li><HashLink smooth to="/a-propos#team">Notre Équipe</HashLink></li>
                                <li><HashLink smooth to="/#contact">Nous Joindre</HashLink></li>
                            </ul>
                        </li>

                        <li><HashLink smooth to="/#contact">CONTACT</HashLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
