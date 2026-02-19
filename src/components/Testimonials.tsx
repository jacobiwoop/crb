import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        text: "Une animation exceptionnelle qui a transformé notre soirée corporative. Réjean a su capter l'attention de 500 personnes avec une aisance incroyable.",
        author: "Sophie Martin",
        role: "Directrice RH, Banque Nationale"
    },
    {
        id: 2,
        text: "Professionnalisme, créativité et énergie débordante ! L'équipe de CRB a dépassé toutes nos attentes pour le lancement de notre nouveau produit.",
        author: "Marc Tremblay",
        role: "PDG, TechInnovate"
    },
    {
        id: 3,
        text: "Le spectacle de magie a laissé tout le monde bouche bée. Un moment fort dont nos invités parlent encore trois mois plus tard.",
        author: "Isabelle Dubois",
        role: "Organisatrice Mariage"
    },
    {
        id: 4,
        text: "Des solutions clé en main qui nous ont enlevé tout le stress de l'organisation. Une exécution sans faille du début à la fin.",
        author: "Pierre Gagnon",
        role: "Directeur Marketing, Retail Group"
    },
    {
        id: 5,
        text: "L'animation en centre commercial a considérablement augmenté notre achalandage ce week-end là. Un investissement très rentable.",
        author: "Chantal Lefebvre",
        role: "Gestionnaire, Place Ville Marie"
    }
];

// Duplicate for seamless loop
const marqueeTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.header}>
                <h2 className={styles.title}>Ce que disent nos clients</h2>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
                
                <motion.div 
                    className={styles.track}
                    animate={{ x: [0, -50 + "%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 40, 
                        ease: "linear" 
                    }}
                >
                    {marqueeTestimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <Quote size={40} className={styles.quoteIcon} />
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.authorBox}>
                                <div className={styles.avatarPlaceholder}>
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className={styles.author}>{item.author}</h4>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
