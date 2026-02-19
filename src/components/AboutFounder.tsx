import { motion } from 'framer-motion';
import styles from './AboutFounder.module.css';
import founderImg from '../assets/images/about/founder.jpg';

const AboutFounder = () => {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Side - Image with Offset Border */}
                    <motion.div 
                        className={styles.imageColumn}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.imageFrame}>
                            <div className={styles.imageBackground}></div>
                            <img 
                                src={founderImg}
                                alt="Réjean Bouthillette" 
                                className={styles.founderImage}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div 
                        className={styles.textColumn}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className={styles.name}>Réjean Bouthillette</h2>
                        <h3 className={styles.subtitle}>PASSION & LEADERSHIP</h3>
                        
                        <div className={styles.bio}>
                            <p>
                                Réjean Bouthillette est animé depuis son plus jeune âge par une passion naturelle pour 
                                l’animation et la scène. Son talent à captiver un public, à créer de l’émotion et à 
                                établir une connexion authentique s’est manifesté très tôt.
                            </p>
                            <p>
                                Au fil de son parcours, il a développé des compétences solides en communication, en 
                                enseignement et en relation client dans le secteur commercial. Ces expériences ont 
                                renforcé son leadership, son sens de l’organisation et sa capacité à comprendre les 
                                besoins du public.
                            </p>
                            <p>
                                Aujourd’hui, il met cette expertise au service d’une vision ambitieuse : faire de la 
                                compagnie une référence en animation et en organisation d’événements à fort impact.
                            </p>
                        </div>

                        <div className={styles.signature}>
                            Réjean B.
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Decorative particles */}
            <div className={styles.particle1}></div>
            <div className={styles.particle2}></div>
            <div className={styles.particle3}></div>
        </section>
    );
};

export default AboutFounder;
