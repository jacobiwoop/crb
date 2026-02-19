import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Award, Briefcase, Users, PackageCheck, Wallet } from 'lucide-react';
import styles from './WhyChooseUs.module.css';
import whyUsImg from '../assets/images/about/why-us.jpg';

const features = [
  {
    id: 0,
    icon: <Award size={24} />,
    title: "Expérience Éprouvée",
    description: "Plus de 20 ans d'histoire à créer des moments inoubliables pour une clientèle variée.",
    image: whyUsImg
  },
  {
    id: 1,
    icon: <Briefcase size={24} />,
    title: "Professionnalisme",
    description: "Une gestion rigoureuse, ponctuelle et une exécution sans faille pour votre tranquillité d'esprit.",
    image: whyUsImg
  },
  {
    id: 2,
    icon: <Users size={24} />,
    title: "Équipe Artistique",
    description: "Accès aux meilleurs talents locaux : musiciens, animateurs, et artistes de scène.",
    image: whyUsImg
  },
  {
    id: 3,
    icon: <PackageCheck size={24} />,
    title: "Solutions Clé en Main",
    description: "De la conception initiale à la réalisation finale, nous prenons tout en charge.",
    image: whyUsImg
  },
  {
    id: 4,
    icon: <Wallet size={24} />,
    title: "Adapté à tous budgets",
    description: "Des offres flexibles et transparentes, sans jamais compromettre la qualité.",
    image: whyUsImg
  }
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentImage = activeIndex !== null ? features[activeIndex].image : features[0].image;

  return (
    <section className={styles.section} id="why-us">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
            {/* Left Column: Dynamic Image */}
            <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={currentImage}
                            src={currentImage}
                            alt="Feature visual"
                            className={styles.mainImage}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Column: Accordion */}
            <div className={styles.contentColumn}>
                <h2 className={styles.headingTitle}>Pourquoi nous choisir ?</h2>
                <div className={styles.accordion}>
                    {features.map((feature, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`${styles.item} ${isActive ? styles.active : ''}`}
                                onClick={() => toggleIndex(index)}
                            >
                                <div className={styles.header}>
                                    <div className={`${styles.iconBox} ${isActive ? styles.activeIcon : ''}`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className={`${styles.title} ${isActive ? styles.activeTitle : ''}`}>
                                        {feature.title}
                                    </h3>
                                    <motion.div 
                                        animate={{ rotate: isActive ? 90 : 0 }}
                                        className={styles.chevron}
                                    >
                                        <ChevronRight size={20} />
                                    </motion.div>
                                </div>
                                
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.body}
                                        >
                                            <p>{feature.description}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
            <span className={styles.ctaText}>Vous avez encore des questions ?</span>
            <a href="#contact" className={styles.ctaLink}>Contactez notre équipe d'experts</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
