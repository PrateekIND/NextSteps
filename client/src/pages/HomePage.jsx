import React,{useState , useEffect}from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Code,
  Stethoscope,
  Briefcase,
  Palette,
  Settings,
  BookOpenCheck, } from "lucide-react"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "@/components/ui/button"; // Your custom Button component
import Button2 from "@/components/ui/button2"; // Your custom Button component
import { Lightbulb, Globe, Users, BookOpen , Paintbrush,ChevronRight } from "lucide-react";
import ServiceCard from "../../components/ui/ServiceCard";
import MentorCard from "../../components/ui/MentorCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import { motion } from 'framer-motion';

import { Badge } from "../../components/ui/badge"





const HomePage = () => {

  const navigate = useNavigate();
  const [hoveredCareer, setHoveredCareer] = useState(null);
    const [mentors, setMentors] = useState([]);
    useEffect(() => {
      const fetchMentors = async () => {
        try {
          const res = await fetch("http://localhost:5800/api/experts");
          const data = await res.json();
          setMentors(data);
        } catch (err) {
          console.error("Failed to fetch mentors:", err);
        }
      };
      fetchMentors();
    }, []);
    const trendingCareers = [
      {
        id: 1,
        title: "AI/ML Engineer",
        category: "Technology",
        popularity: 95,
        growth: "+127%",
        avgSalary: "$145k",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        icon: "Brain",
        color: "bg-brand-teal",
        description: "Build intelligent systems and machine learning models",
        skills: ["Python", "TensorFlow", "Deep Learning"],
        companies: ["Google", "OpenAI", "Tesla"]
      },
      {
        id: 2,
        title: "Cybersecurity Analyst",
        category: "Security",
        popularity: 88,
        growth: "+89%",
        avgSalary: "$98k",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        icon: "Shield",
        color: "bg-action-red",
        description: "Protect organizations from digital threats and attacks",
        skills: ["Network Security", "Incident Response", "Risk Assessment"],
        companies: ["CrowdStrike", "Palo Alto", "FireEye"]
      },
      {
        id: 3,
        title: "UX Designer",
        category: "Design",
        popularity: 82,
        growth: "+76%",
        avgSalary: "$85k",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
        icon: "Palette",
        color: "bg-brand-orange",
        description: "Create intuitive and engaging user experiences",
        skills: ["Figma", "User Research", "Prototyping"],
        companies: ["Apple", "Airbnb", "Spotify"]
      },
      {
        id: 4,
        title: "Data Scientist",
        category: "Analytics",
        popularity: 79,
        growth: "+65%",
        avgSalary: "$118k",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        icon: "BarChart3",
        color: "bg-primary",
        description: "Extract insights from complex data to drive decisions",
        skills: ["R", "Statistics", "Machine Learning"],
        companies: ["Netflix", "Uber", "Meta"]
      },
      {
        id: 5,
        title: "Cloud Architect",
        category: "Infrastructure",
        popularity: 75,
        growth: "+58%",
        avgSalary: "$135k",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        icon: "Cloud",
        color: "bg-secondary",
        description: "Design and manage scalable cloud infrastructure",
        skills: ["AWS", "Kubernetes", "DevOps"],
        companies: ["Amazon", "Microsoft", "IBM"]
      },
      {
        id: 6,
        title: "Product Manager",
        category: "Strategy",
        popularity: 71,
        growth: "+42%",
        avgSalary: "$125k",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        icon: "Target",
        color: "bg-trust-green",
        description: "Guide product development from concept to launch",
        skills: ["Strategy", "Analytics", "Leadership"],
        companies: ["Google", "Slack", "Zoom"]
      }
    ];


  const careerData = [
    {
      id: "technology",
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: "Technology",
      description:
        "Explore careers in software development, data science, cybersecurity, and AI.",
      tags: ["Software Engineering", "Data Science", "Cybersecurity"],
    },
    {
      id: "healthcare",
      icon: <Stethoscope className="h-6 w-6 text-pink-600" />,
      title: "Healthcare",
      description:
        "Discover careers in medicine, nursing, research, and public health administration.",
      tags: ["Medicine", "Research", "Public Health"],
    },
    {
      id: "business",
      icon: <Briefcase className="h-6 w-6 text-green-600" />,
      title: "Business",
      description:
        "Explore careers in finance, marketing, management, and entrepreneurship.",
      tags: ["Finance", "Marketing", "Management"],
    },
    {
      id: "creative Arts",
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Creative Arts",
      description:
        "Discover careers in design, media production, writing, and entertainment.",
      tags: ["Design", "Media", "Entertainment"],
    },
    {
      id: "engineering",
      icon: <Settings className="h-6 w-6 text-yellow-600" />,
      title: "Engineering",
      description:
        "Explore careers in civil, mechanical, electrical, and aerospace engineering.",
      tags: ["Civil", "Mechanical", "Electrical"],
    },
    {
      id: "education",
      icon: <BookOpenCheck className="h-6 w-6 text-blue-600" />,
      title: "Education",
      description:
        "Discover careers in teaching, educational research, and school administration.",
      tags: ["Teaching", "Research", "Administration"],
    },
  ];

  const faqData = [
    {
      question: "How does NextStep's career counseling work?",
      answer:
        "Our career counseling process begins with an assessment of your interests, skills, and goals. We then match you with a mentor who specializes in your areas of interest. Through one-on-one sessions,our mentors provide personalized guidance, industry insights, and practical advice to help you make informed career decisions.",
        
    },
    {
      question: "Who are the mentors at NextStep?",
      answer:
        "Our mentors are industry professionals with at least 5+ years of experience in their respective fields. They include executives, entrepreneurs, researchers, educators, and other experts who are passionate about guiding students. All mentors undergo a thorough vetting process to ensure they can provide valuable insights and guidance",
    },
    {
      question: "How much does career counseling cost?",
      answer:
        "We offer various packages to suit different needs and budgets.Our basic package starts at $49 for a one-time session, while our comprehensive package includes multiple sessions, career assessments, and ongoing support for $199. We also offer scholarships and financial aid for eligible students.",
        
    },
    {
      question: "Can NextStep help with college applications?",
      answer:
        "Yes, we provide guidance on college applications, including selecting the right institutions, preparing application materials, and interview preparation. Our mentors can help you align your educational choices with your career goals and highlight your strengths in applications.",
        
    },
    {
      question: "How do I become a mentor at NextStep?",
      answer:
        `To become a mentor, you should have at least 5 years of professional experience in your field and a passion for guiding students. Click on the "Join as Mentor" button to start the application process. You'll need to complete a profile, undergo an interview, and provide references. Once approved, you can set your availability and start mentoring sessions.`,
        
    },
    {
      question: "Is NextStep available internationally?",
      answer:
        "Yes, NextStep services are available globally. All mentoring sessions are conducted online, making it accessible to students worldwide. We have mentors from various countries who can provide insights into global career opportunities and region-specific guidance.",
        
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center place-content-center">
            <div className="py-8 sm:py-12 flex flex-col justify-center space-y-6 text-center lg:text-left flex-1 lg:pt-[-8px]">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-slate-800">
                  Take the Right Step Toward Your Future
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                  Discover your ideal career path with personalized guidance from industry experts who've been where you want to go.
                </p>
              </div>
                {/* Feature bullets */}
                <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2 anim-fade-up-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    1:1 mentorship from vetted pros
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    Portfolio & resume reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    Mock interviews with feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    Role-specific study plans
                  </li>
                </ul>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm anim-fade-up-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    <span className="text-slate-800">4.9/5</span>
                    <span className="text-slate-600">avg mentor rating</span>
                  </div>
                  <Star className="h-4 w-4 text-blue-500" aria-hidden="true" />
                  <div className="text-slate-600">
                    <span className="text-slate-800">1,200+</span> sessions booked
                  </div>
                  <Star className="h-4 w-4 text-blue-500" aria-hidden="true" />
                  <div className="text-slate-600">
                    Across <span className="text-slate-800">15+</span> roles
                  </div>
                </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild className="gap-1 whitespace-nowrap">
                  <Link to="/explore">
                    Explore Careers
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button2
                  asChild
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 whitespace-nowrap"
                >
                  <a href="/mentors">Book a Session</a>
                </Button2>
              </div>
            </div>
            <div className="py-8 sm:py-12 lg:py-14 bg-blend-multiply flex-1">
              <img
                src="/image/hero.jpg"
                width={550}
                height={550}
                alt="Students discussing career options"
                className="w-full max-w-[550px] mx-auto rounded-xl object-contain"
              />

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-500">
            About NextStep
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800 mt-4">
            Your Career Journey Starts Here
          </h2>
          <p className="max-w-[900px] text-slate-600 mt-4 mx-auto md:text-xl/relaxed">
            NextStep helps students explore career options, understand future opportunities, and connect with expert mentors who can provide personalized guidance.
          </p>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
              Our Services
            </h2>
            <p className="max-w-[900px] text-slate-600 mx-auto md:text-xl">
              Comprehensive career guidance tailored to your unique journey
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-12">
            <ServiceCard
              icon={Globe}
              title="Explore Careers"
              description="Discover and explore various career paths based on your interests, skills, and educational background."
              bgColor="bg-blue-50 text-blue-500"
            />
            <ServiceCard
              icon={Users}
              title="Expert Mentorship"
              description="Connect with industry professionals who provide personalized guidance and insights from their experience."
              bgColor="bg-green-50 text-green-500"
            />
            <ServiceCard
              icon={BookOpen}
              title="Stream Guidance"
              description="Get detailed information about different academic streams and their potential career outcomes."
              bgColor="bg-purple-50 text-purple-500"
            />
          </div>
        </div>
      </section>


      {/* CAREER PATHS */}

    <section className="px-6 sm:px-16 md:px-24 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl text-slate-800">
          Explore Career Paths
        </h2>
        <p className="text-gray-600 text-lg">
          Discover exciting opportunities across various fields and find your perfect match
        </p>      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {careerData.map((career) => (
          <div
            key={career.id}
            className="rounded-[9px] border bg-white text-gray-800 shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 group"
          >
            <div className="p-6 flex flex-col h-full justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-[6px] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center shadow-sm">
                  {career.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl pt-2 lg:pb-2 md:pb-1 xl:pb-4 font-bold text-slate-800 group-hover:text-purple-500 transition-colors">
                    {career.title}
                  </h3>
                  <p className="mt-2 lg:pb-2 md:pb-1 xl:pb-3 text-slate-600">
                    {career.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {career.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 🚀 Using only React Router DOM */}
              <button
                onClick={() => navigate(`/career/${career.id}`)}
                className="pt-8 pl-5 flex items-center text-purple-500 font-medium group-hover:translate-x-1 transition-transform"
              >
                Explore Path <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button2
          asChild
          variant="outline"
          size="lg"
          className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          <Link to="/explore">
            View All Career Paths <ChevronRight className="h-4 w-4" />
          </Link>
        </Button2>
      </div>
    </section>





      {/* MENTORS */}
      <section className="px-6 md:px-18 lg:px-24 py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              Meet Our Mentors
            </h2>
            <p className="max-w-2xl text-slate-600 mx-auto mt-4">
              Learn from experienced professionals who’ve walked the path before you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {mentors.slice(0, 3).map((mentor) => (
    <MentorCard
              key={mentor._id}
              id={mentor._id}
              name={mentor.name}
              role={mentor.specialization}
              image={mentor.photoUrl || "/placeholder.svg"}
              bio={mentor.bio}
            />
  ))}
</div>

        </div>
        <div className="flex justify-center mt-8">
              <Button asChild className="gap-1 bg-blue-500 hover:bg-blue-600">
                <Link to="/mentors">
                  View All Mentors <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
        </div>
          
      </section>

         <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="TrendingUp" size={24} className="text-brand-orange" />
              <span className="text-brand-orange font-semibold">This Week's Hottest</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4">
              Trending Careers
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover the most explored career paths this week, with real-time popularity 
              indicators and growth projections.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCareers?.map((career, index) => (
            <motion.div
              key={career?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-brand hover-lift cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCareer(career?.id)}
              onMouseLeave={() => setHoveredCareer(null)}
              onClick={() => window.location.href = '/career-detail-pages'}
            >
              {/* Popularity Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse-slow"></div>
                  <span className="text-xs font-semibold text-brand-navy">{career?.popularity}% hot</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={career?.image}
                  alt={career?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute bottom-4 left-4 w-12 h-12 ${career?.color} rounded-xl flex items-center justify-center`}>
                  <Icon name={career?.icon} size={24} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-secondary">{career?.category}</span>
                  <div className="flex items-center space-x-1 text-trust-green">
                    <Icon name="TrendingUp" size={14} />
                    <span className="text-sm font-semibold">{career?.growth}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-brand">
                  {career?.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {career?.description}
                </p>

                {/* Salary */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="DollarSign" size={16} className="text-brand-orange" />
                    <span className="font-semibold text-brand-navy">{career?.avgSalary}</span>
                    <span className="text-sm text-text-secondary">avg</span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {career?.skills?.slice(0, 2)?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-muted text-text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {career?.skills?.length > 2 && (
                    <span className="text-xs text-text-secondary px-2 py-1">
                      +{career?.skills?.length - 2} more
                    </span>
                  )}
                </div>

                {/* Companies */}
                <div className="flex items-center space-x-2 text-xs text-text-secondary">
                  <Icon name="Building" size={12} />
                  <span>Hiring at {career?.companies?.slice(0, 2)?.join(', ')}</span>
                </div>

                {/* Hover Overlay */}
                {hoveredCareer === career?.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-brand-teal/95 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center text-white p-6">
                      <Icon name="Eye" size={32} className="mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Explore Career Path</h4>
                      <p className="text-sm opacity-90">
                        View detailed requirements, salary ranges, and learning pathways
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              onClick={() => window.location.href = '/explore'}
              className="inline-flex items-center space-x-2 text-brand-teal hover:text-brand-teal/80 font-semibold transition-brand group"
            >
              <span>Explore All Career Paths</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Success stories from students who found their path with NextStep
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialSlider />
            </div>
          </div>
        </section>

      {/* FAQ */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-slate-600 mx-auto mt-4">
              Everything you need to know about using NextStep
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Heading and Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Path?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward a fulfilling career with personalized guidance from our expert mentors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                
                size="lg"
                variant="secondary"
                className="gap-1 bg-slate-100 text-blue-500 hover:text-blue-700  hover:bg-slate-200"  
              >
                <Link to="/mentors" className="text-blue-500 flex items-center">
                  Book a Session <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                
                variant="outline"
                size="lg"
                className="border-white border  text-white hover:bg-white hover:text-blue-500"
              >
                <Link to="/explore">Explore Careers</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats Cards */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              {[
                { stat: "500+", label: "Career Paths" },
                { stat: "100+", label: "Expert Mentors" },
                { stat: "5000+", label: "Students Guided" },
                { stat: "98%", label: "Satisfaction Rate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 rounded-[8px] bg-white/10 p-5 text-center"
                >
                  <div className="text-3xl font-bold">{item.stat}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
