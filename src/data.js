// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about1.png';
import Feature1Img from '../src/assets/img/features/feature11.png';
import Feature2Img from '../src/assets/img/features/feature21.png';
import Feature3Img from '../src/assets/img/features/feature31.png';
import Feature4Img from '../src/assets/img/features/feature41.png';
import LogoV2 from '../src/assets/img/logo1.png';
import logo from "../src/assets/img/logo.gif"
import HeroImage from '../src/assets/img/hero-img1.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '#About',
  },
  {
    name: 'Services',
    href: '#Features',
  },
  {
    name: 'Contact',
    href: '#CtaSection',
  },
];

export const heroData = {
  title: `Empowering Parents, Nurturing Futures `,
  subtitle:
    'Empowering Working Parents: Balancing professional demands with fostering early childhood development. CogniCare - Nurturing young minds with innovative AI-powered support',
  btnText: 'Let Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'About CogniCare',
  subtitle:
    `Empowering Parents, Nurturing Futures. CogniCare - A platform to empower parents in nurturing their children's cognitive and emotional development. Join us in building a brighter future for your little ones.`,
};

export const featuresData = {
  title: 'Features of CogniCare',
  subtitle:
    `Unlock a world of resources for free! Embrace dedicated learning and become your child's guide with the assistance of CogniCare. Discover the app now!`,
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Adaptive Learning',
      link:'/AdaptiveLearning',
      description:
        'CogniCare uses advanced emotion recognition technology to adapt activities and learning styles to your child\'s current emotional state. Feeling playful? Explore interactive games! Stressed? Engage in calming mindfulness exercises. This ensures optimal engagement and maximizes learning opportunities.',
      linkText: 'Explore',
      delay: '200',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Personalized Curriculum',
      link:'/PersonalizedCurriculum',
      description:
        'Based on your child\'s age, skills, and learning pace, CogniCare constructs a personalized curriculum aligned with developmental milestones. It adapts continuously, catering to individual needs and learning styles.',
      linkText: 'Explore',
      delay: '500',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'AI-Powered Play and Learning',
      link:'/AIPoweredPlay',
      description:
        'Acting as a virtual companion, CogniCare engages children through play and educational activities. This not only aids in their cognitive development but also ensures a joyful and interactive learning environment.',
      linkText: 'Explore',
      delay: '800',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Parental Support',
      link:'/ParentalSupport',
      description:
        'CogniCare empowers parents with actionable insights into their child\'s emotional well-being and development. Get real-time reports on progress, recommendations for activities based on your child\'s needs, and tips for addressing specific challenges.',
      linkText: 'Explore',
      delay: '1000',
    },
  ],
};

export const ctaData = {
  title: 'Connect with CogniCare',
  subtitle: 'Experience the full range of CogniCare services and share your valuable feedback with us! ',
  btnText1: 'Email',
  btnText2:  'Instagram'
};

export const footerData = {
  logo: logo,
  address: 'Prithvi ',
  email: 'CogniCare@gmail.com',
  phone: '9999994444',
  list1: [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Contribute',
      href: '#',
    },
    {
      name: 'Email',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: "<FaYoutube />",
      href: '#',
    },
    {
      icon: "<FaInstagram />",
      href: '#',
    },
    {
      icon: "<FaGithub />",
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© CogniCare All rights reserved.',
  
};

