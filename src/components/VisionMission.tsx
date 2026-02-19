import { motion } from 'framer-motion';
import { Star, Users, Heart } from 'lucide-react';
import styles from './VisionMission.module.css';

const values = [
    {
        icon: <Star size={32} />,
        title: "Excellence",
        description: "Nous visons la perfection dans chaque détail."
    },
    {
        icon: <Users size={32} />,
        title: "Impact",
        description: "Marquer les esprits et créer des liens durables."
    },
    {
        icon: <Heart size={32} />,
        title: "Passion",
        description: "L'amour du métier est au cœur de notre action."
    }
];

const VisionMission = () => {
    return (
        <section className={styles.section} id="vision-mission">
            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Vision & Mission Stratégique</h2>
                    <p className={styles.missionText}>
                        <strong>Vision :</strong> Devenir un acteur majeur de l’animation et de l’événementiel au Québec, 
                        en développant des expériences immersives capables de générer de l’achalandage, de renforcer 
                        l’image de marque des entreprises et de créer une valeur durable.
                    </p>
                    <p className={styles.missionText}>
                        <strong>Mission :</strong> Offrir des solutions d’animation et d’événementiel clés en main, 
                        professionnelles et créatives, adaptées aux besoins des commerces, entreprises et institutions, 
                        tout en valorisant les talents artistiques locaux.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <motion.div 
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={styles.iconWrapper}>
                                {value.icon}
                            </div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDesc}>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
