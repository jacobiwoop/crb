import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Realizations.module.css';

import img1 from '../assets/images/portfolio/corp-gala.jpg';
import img2 from '../assets/images/portfolio/wedding-port.jpg';
import img3 from '../assets/images/portfolio/comm-audi.jpg';
import img4 from '../assets/images/portfolio/private-vip.jpg';
import img5 from '../assets/images/portfolio/show-jazz.jpg';
import img6 from '../assets/images/portfolio/comm-eaton.jpg';
import img7 from '../assets/images/portfolio/show-concert.jpg';
import img8 from '../assets/images/portfolio/corp-hotel.jpg';
import img9 from '../assets/images/portfolio/private-bday.jpg';
import img10 from '../assets/images/portfolio/show-fashion.jpg';
import img11 from '../assets/images/portfolio/corp-tech.jpg';
import img12 from '../assets/images/portfolio/wedding-rustic.jpg';

const allProjects = [
    { id: 1, title: "Gala Corporatif RBC", category: "Corporatif", image: img1 },
    { id: 2, title: "Mariage au Vieux-Port", category: "Mariage", image: img2 },
    { id: 3, title: "Lancement de Produit Audi", category: "Commercial", image: img3 },
    { id: 4, title: "Soirée Privée VIP", category: "Privé", image: img4 },
    { id: 5, title: "Festival de Jazz", category: "Spectacle", image: img5 },
    { id: 6, title: "Décoration Centre Eaton", category: "Commercial", image: img6 },
    { id: 7, title: "Concert Plein Air", category: "Spectacle", image: img7 },
    { id: 8, title: "Réception Hôtelière", category: "Corporatif", image: img8 },
    { id: 9, title: "Anniversaire Surprise", category: "Privé", image: img9 },
    { id: 10, title: "Défilé de Mode", category: "Spectacle", image: img10 },
    { id: 11, title: "Conférence Tech", category: "Corporatif", image: img11 },
    { id: 12, title: "Mariage Champêtre", category: "Mariage", image: img12 },
];

const categories = ["Tous", "Corporatif", "Commercial", "Mariage", "Privé", "Spectacle"];

const Realizations = () => {
    const [filter, setFilter] = useState("Tous");

    const filteredProjects = filter === "Tous" 
        ? allProjects 
        : allProjects.filter(project => project.category === filter);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Nos Réalisations</h1>
                <p className={styles.subtitle}>Découvrez une sélection de nos événements les plus marquants.</p>
            </div>

            <div className={styles.filterBar}>
                {categories.map(category => (
                    <button 
                        key={category}
                        className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div 
                layout 
                className={styles.galleryGrid}
            >
                {filteredProjects.map(project => (
                    <motion.div 
                        layout
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        key={project.id} 
                        className={styles.projectCard}
                    >
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <span className={styles.projectCategory}>{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Realizations;
