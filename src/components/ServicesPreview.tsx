import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import styles from './ServicesPreview.module.css';
import commercialImg from '../assets/images/services/commercial.jpg';
import privateImg from '../assets/images/services/private.jpg';
import productionImg from '../assets/images/services/production.jpg';

interface Service {
  id: number;
  title: string;
  image: string;
  desc: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Corporatif & Commercial",
    image: commercialImg,
    desc: "Lancements, galas et activations de marque.",
    link: "/#services-commercial"
  },
  {
    id: 2,
    title: "Événements Privés",
    image: privateImg,
    desc: "Mariages, anniversaires et célébrations uniques.",
    link: "/#services-private"
  },
  {
    id: 3,
    title: "Production Artistique",
    image: productionImg,
    desc: "Spectacles, artistes et direction technique.",
    link: "/#services-production"
  }
];



const ServicesPreview = () => {
  return (
    <section className={styles.section} id="services-preview">
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HashLink to={service.link} className={styles.linkWrapper}>
            <div 
              className={styles.bgImage} 
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className={styles.overlay} />
            
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <span className={styles.linkText}>
                Découvrir <ArrowRight size={16} className={styles.icon} />
              </span>
            </div>
            </HashLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
