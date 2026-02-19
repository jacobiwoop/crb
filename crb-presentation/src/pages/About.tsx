import { motion } from 'framer-motion';
import AboutFounder from '../components/AboutFounder';
import VisionMission from '../components/VisionMission';
import styles from './About.module.css';
import founderImg from '../assets/images/about/founder.jpg';

const teamMembers = [
    {
        id: 1,
        name: "Sophie Tremblay",
        role: "Directrice Artistique",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Marc-André Roy",
        role: "Chef de Production",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Isabelle Gagnon",
        role: "Coordinatrice Événementiel",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Lucas Dubreuil",
        role: "Directeur Technique",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
    }
];

const About = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Page Header */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <motion.h1 
                        className={styles.headerTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        L'Humain au cœur de l'événement
                    </motion.h1>
                    <motion.p 
                        className={styles.headerSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Une passion, une vision, et une équipe dédiée à faire de chaque instant un souvenir impérissable.
                    </motion.p>
                </div>
            </header>

            {/* Reuse Existing Sections with updated PDF content */}
            <AboutFounder />
            <VisionMission />

            {/* Team Section */}
            <section className={styles.section} id="team">
                <h2 className={styles.sectionTitle}>Notre Équipe</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={member.id}
                            className={styles.teamCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={member.image} alt={member.name} className={styles.memberImage} />
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <div className={styles.memberRole}>{member.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications / Partners Placeholder */}
            <section className={styles.certSection}>
                <h2 className={styles.sectionTitle}>Ils nous font confiance</h2>
                <div className={styles.logoGrid}>
                   {/* Placeholders for partner logos */}
                   <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ccc' }}>PARTENAIRE 1</div>
                   <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ccc' }}>PARTENAIRE 2</div>
                   <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ccc' }}>PARTENAIRE 3</div>
                   <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ccc' }}>PARTENAIRE 4</div>
                </div>
            </section>
        </div>
    );
};

export default About;
