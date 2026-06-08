import "./WhyChooseETA.css";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  Globe,
  Sparkles,
  Mic,
  MessageCircle,
} from "lucide-react";

import whyBg from "../../assets/w1.jpg";

import confidencImg from "../../assets/confidence.jpg";
import partImg from "../../assets/partner.jpg";
import trainingImg from "../../assets/training.jpg";
import globalImg from "../../assets/about/global Languages.webp";

const WhyChooseETA = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const parallaxRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isVisible, setIsVisible] = useState(false);

  const [activeStat, setActiveStat] = useState(null);

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Mouse Tracking */
  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;

    const rect =
      sectionRef.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    if (parallaxRef.current) {
      const moveX = (x - 50) * 0.015;
      const moveY = (y - 50) * 0.015;

      parallaxRef.current.style.transform =
        `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    }
  }, []);

  /* Card Hover Effect */
  const handleCardMouseMove = (e, index) => {
    if (!cardRefs.current[index]) return;

    const card = cardRefs.current[index];

    const rect = card.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.transform =
      `translate(${x * 8}px, ${y * 8}px) scale(1.03)`;

    card.style.setProperty(
      "--card-x",
      `${(x + 1) * 50}%`
    );

    card.style.setProperty(
      "--card-y",
      `${(y + 1) * 50}%`
    );

    setActiveStat(index);
  };

  const handleCardMouseLeave = (index) => {
    if (!cardRefs.current[index]) return;

    const card = cardRefs.current[index];

    card.style.transform =
      "translate(0px,0px) scale(1)";

    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");

    setActiveStat(null);
  };

  /* Feature Pills */
  const features = [
    {
      icon: <Mic size={16} />,
      text: "Voice & Speech Training",
    },
    {
      icon: <MessageCircle size={16} />,
      text: "Communication Mastery",
    },
    {
      icon: <Globe size={16} />,
      text: "Language Excellence",
    },
  ];

  
  