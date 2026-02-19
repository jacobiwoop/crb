import { motion } from 'framer-motion';
import { ArrowRight, Play, ArrowLeft } from 'lucide-react';
import styles from './Hero.module.css';
import heroBg from '../assets/images/hero/hero-bg.jpg';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.overlay}></div>
            
            {/* Background Image/Video */}
            <div className={styles.backgroundMedia}>
                <img 
                    src={heroBg}
                    alt="Background" 
                    className={styles.bgImage}
                />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.span 
                        className={styles.tagline}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Animation & Événementiel
                    </motion.span>

                    <motion.h1 
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Créez des Moments <br />
                        <span className={styles.highlight}>Inoubliables</span>
                    </motion.h1>

                    <motion.p 
                        className={styles.description}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        La Compagnie Réjean Bouthillette transforme vos événements en expériences immersives et spectaculaires, adaptées à vos besoins.
                    </motion.p>

                    <motion.div 
                        className={styles.actions}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#contact" className={styles.primaryBtn}>
                            RÉSERVER MAINTENANT
                        </a>
                        
                        <button className={styles.videoBtn}>
                            <div className={styles.playIcon}>
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span>Voir Vidéo</span>
                        </button>
                    </motion.div>
                </div>

                {/* Slider Controls (Visual mostly for now) */}
                <div className={styles.sliderControls}>
                    <button className={styles.sliderBtn}><ArrowLeft size={24} /></button>
                    <button className={styles.sliderBtn}><ArrowRight size={24} /></button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
