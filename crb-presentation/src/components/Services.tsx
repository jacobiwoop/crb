import { motion } from 'framer-motion';
import { PartyPopper, HeartHandshake, Mic2, CheckCircle2 } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: <PartyPopper size={40} />,
    title: "Animation Commerciale & Privée",
    items: [
      "Mascottes saisonnières et animations thématiques",
      "Animation en commerces et centres commerciaux",
      "Soirées privées, réseautage, lancements corporatifs",
      "DJ, musiciens, magiciens, artistes variés"
    ]
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Création d’Émotions Personnalisées",
    items: [
      "Demandes en mariage et événements surprises",
      "Départs à la retraite et anniversaires",
      "Mise en scène, décoration et coordination artistique",
      "Moments uniques et sur mesure"
    ]
  },
  {
    icon: <Mic2 size={40} />,
    title: "Organisation d’Événements & Production",
    items: [
      "Organisation complète d’événements corporatifs",
      "Production de spectacles et shows artistiques",
      "Gestion logistique et coordination des talents",
      "Solutions clés en main"
    ]
  }
];

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Nos Services</span>
          <h2 className={styles.title}>Une expertise complète pour vos événements</h2>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.list}>
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
