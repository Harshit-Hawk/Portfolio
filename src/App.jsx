import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import CampusDexFeatured from './components/CampusDexFeatured';
import OtherProjects from './components/OtherProjects';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ApproachSection from './components/ApproachSection';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me */}
      <AboutMe />

      {/* 3. What I Do */}
      <WhatIDo />

      {/* 4. Featured Project — CampusDex Case Study */}
      <CampusDexFeatured />

      {/* 5. Other Projects */}
      <OtherProjects />

      {/* 6. Experience & Leadership Timeline */}
      <ExperienceTimeline />

      {/* 7. Skills & Tools */}
      <SkillsSection />

      {/* 8. Hackathons & Achievements */}
      <AchievementsSection />

      {/* 9. My Approach / Product Philosophy */}
      <ApproachSection />

      {/* 10. Currently Building */}
      <CurrentlyBuilding />

      {/* 11. Contact & Let's Build Something */}
      <Contact />
    </Layout>
  );
}

export default App;
