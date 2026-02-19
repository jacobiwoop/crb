import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import styles from './ImmersiveGallery.module.css';

import img1 from '../assets/images/gallery/club.jpg';
import img2 from '../assets/images/gallery/crowd.jpg';
import img3 from '../assets/images/gallery/lights.jpg';
import img4 from '../assets/images/gallery/party.jpg';
import img5 from '../assets/images/gallery/concert.jpg';
import img6 from '../assets/images/gallery/nightlife.jpg';

const images = [
    img1, img2, img3, img4, img5, img6
];

// Duplicate images to create seamless loop
const marqueeImages = [...images, ...images];

const ImmersiveGallery = () => {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Vivez l'expérience</h2>
                    <button className={styles.playBtn}>
                        <Play size={32} fill="currentColor" className={styles.icon} />
                        Voir le Showreel
                    </button>
                </div>
            </div>

            <div className={styles.marqueeContainer}>
                <motion.div 
                    className={styles.track}
                    animate={{ x: [0, -50 + "%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 30, 
                        ease: "linear" 
                    }}
                >
                    {marqueeImages.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={src} alt={`Event highlight ${index}`} className={styles.image} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImmersiveGallery;
