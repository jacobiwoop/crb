import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './ServicesDetailed.module.css';
import commImg from '../assets/images/services/detail-commercial.jpg';
import privImg from '../assets/images/services/detail-private.jpg';
import prodImg from '../assets/images/services/detail-production.jpg';
import weddImg from '../assets/images/services/detail-wedding.jpg';

const ServiceSection = ({ id, title, subtitle, description, features, image, align = 'left', theme = 'light' }: any) => {
    return (
        <section id={id} className={`${styles.serviceSection} ${styles[theme]}`}>
            <div className={`${styles.container} ${align === 'right' ? styles.reverse : ''}`}>
                <motion.div 
                    className={styles.content}
                    initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.subtitle}>{subtitle}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    
                    <ul className={styles.featureList}>
                        {features.map((feature: string, index: number) => (
                            <li key={index} className={styles.featureItem}>
                                <CheckCircle size={20} className={styles.checkIcon} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className={styles.ctaButton}>En savoir plus</button>
                </motion.div>

                <motion.div 
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={image} alt={title} className={styles.image} />
                </motion.div>
            </div>
        </section>
    );
};

const ServicesDetailed = () => {
    return (
        <div className={styles.wrapper}>
            {/* Commercial */}
            <ServiceSection 
                id="services-commercial"
                title="Animation Commerciale"
                subtitle="DYNAMISEZ VOS ESPACES"
                description="Transformez le magasinage en expérience. Nos animations pour centres commerciaux et commerces de détail sont conçues pour augmenter l'achalandage et prolonger la durée de visite."
                features={[
                    "Déambulations artistiques",
                    "Ateliers créatifs pour enfants",
                    "Installation de décors thématiques",
                    "Père Noël et personnages saisonniers"
                ]}
                image={commImg}
                align="left"
                theme="light"
            />

            {/* Private Events */}
            <ServiceSection 
                id="services-private"
                title="Événements Privés"
                subtitle="CÉLÉBREZ AVEC STYLE"
                description="Que ce soit pour un anniversaire marquant, une fête de famille ou une soirée entre amis, nous apportons l'ambiance parfaite pour que vous puissiez profiter de vos invités."
                features={[
                    "DJ et animation musicale",
                    "Photobooth interactif",
                    "Service de traiteur partenaire",
                    "Coordination de soirée"
                ]}
                image={privImg}
                align="right"
                theme="dark"
            />

            {/* Production */}
            <ServiceSection 
                id="services-production"
                title="Production & Spectacles"
                subtitle="L'ART DE LA SCÈNE"
                description="Des spectacles clé en main pour festivals, événements corporatifs et galas. Nous gérons la direction artistique et technique pour un résultat époustouflant."
                features={[
                    "Spectacles de magie et illusion",
                    "Groupes de musique live",
                    "Performances de cirque",
                    "Sonorisation et éclairage"
                ]}
                image={prodImg}
                align="left"
                theme="production" // Specific dark theme
            />

            {/* Weddings */}
            <ServiceSection 
                id="services-weddings"
                title="Mariages & Surprises"
                subtitle="L'AMOUR À L'HONNEUR"
                description="Votre grand jour mérite la perfection. De la cérémonie émotionnelle à une piste de danse enflammée, nous créons la trame sonore et visuelle de votre union."
                features={[
                    "Maître de cérémonie bilingue",
                    "Musique de cocktail",
                    "Éclairage d'ambiance",
                    "Première danse chorégraphiée"
                ]}
                image={weddImg}
                align="right"
                theme="wedding" // Specific elegant theme
            />
        </div>
    );
};

export default ServicesDetailed;
