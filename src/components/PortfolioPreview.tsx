import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram } from 'lucide-react';
import styles from './PortfolioPreview.module.css';

import img1 from '../assets/images/portfolio/corp-gala.jpg';
import img2 from '../assets/images/portfolio/wedding-port.jpg';
import img3 from '../assets/images/portfolio/comm-audi.jpg';
import img4 from '../assets/images/portfolio/private-vip.jpg';
import img5 from '../assets/images/portfolio/show-jazz.jpg';
import img6 from '../assets/images/portfolio/comm-eaton.jpg';

const projects = [
    {
        id: 1,
        title: "Gala Corporatif RBC",
        category: "Corporatif",
        image: img1
    },
    {
        id: 2,
        title: "Mariage au Vieux-Port",
        category: "Mariage",
        image: img2
    },
    {
        id: 3,
        title: "Lancement de Produit Audi",
        category: "Commercial",
        image: img3
    },
    {
        id: 4,
        title: "Soirée Privée VIP",
        category: "Privé",
        image: img4
    },
    {
        id: 5,
        title: "Festival de Jazz",
        category: "Spectacle",
        image: img5
    },
    {
        id: 6,
        title: "Décoration Centre Eaton",
        category: "Commercial",
        image: img6
    }
];

const PortfolioPreview = () => {
    return (
        <section className={styles.section} id="portfolio">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Dernières Réalisations</h2>
                    <p className={styles.subtitle}>Un aperçu de notre savoir-faire en images.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <span className={styles.category}>{project.category}</span>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <Link to="/realisations" className={styles.viewMoreBtn}>
                        Voir toute la galerie <ArrowRight size={20} />
                    </Link>
                    <a href="#" className={styles.instaLink}>
                        <Instagram size={18} /> @crb_events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPreview;
