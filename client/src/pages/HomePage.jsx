import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, CheckCircle, Compass, MessageSquare, ThumbsUp, Code,
  Stethoscope,
  Briefcase,
  Palette,
  Settings,
  BookOpenCheck, } from "lucide-react"
import Button from "@/components/ui/button"; // Your custom Button component
import Button2 from "@/components/ui/button2"; // Your custom Button component
import { Lightbulb, Globe, Users, BookOpen , Paintbrush,ChevronRight } from "lucide-react";
import ServiceCard from "../../components/ui/ServiceCard";
import MentorCard from "../../components/ui/MentorCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import { useDispatch } from 'react-redux';
import { setCareerId } from '../redux/exploreSlice';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mentors = [
    {
      name: "Dr. Divyanshi Tomar",
      role: "Medical Professional",
      image: "/image/Divyashi tomar.jpeg",
      bio: "20+ years in healthcare, specializing in career guidance for medical aspirants.",
    },
    {
      name: "Yash Tyagi",
      role: "Tech Entrepreneur",
      image: "/image/yash Tyagi.jpeg",
      bio: "Founded 3 successful startups and mentored over 200 young tech professionals.",
    },
    {
      name: "Ashtha Tyagi",
      role: "Finance Expert",
      image: "/image/Priya.jpeg",
      bio: "15 years in investment banking, helping students navigate the world of finance.",
    },
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
      id: "Healthcare",
      icon: <Stethoscope className="h-6 w-6 text-pink-600" />,
      title: "Healthcare",
      description:
        "Discover careers in medicine, nursing, research, and public health administration.",
      tags: ["Medicine", "Research", "Public Health"],
    },
    {
      id: "Business",
      icon: <Briefcase className="h-6 w-6 text-green-600" />,
      title: "Business",
      description:
        "Explore careers in finance, marketing, management, and entrepreneurship.",
      tags: ["Finance", "Marketing", "Management"],
    },
    {
      id: "Creative Arts",
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Creative Arts",
      description:
        "Discover careers in design, media production, writing, and entertainment.",
      tags: ["Design", "Media", "Entertainment"],
    },
    {
      id: "Engineering",
      icon: <Settings className="h-6 w-6 text-yellow-600" />,
      title: "Engineering",
      description:
        "Explore careers in civil, mechanical, electrical, and aerospace engineering.",
      tags: ["Civil", "Mechanical", "Electrical"],
    },
    {
      id: "Education",
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild className="gap-1 whitespace-nowrap">
                  <a href="/explore">
                    Explore Careers
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button2
                  asChild
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 whitespace-nowrap"
                >
                  <a href="/book">Book a Session</a>
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

<section className="px-6 sm:px-16 md:px-24 py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl text-slate-800">
      Explore Career Paths
    </h2>
    <p className="text-gray-600 text-lg">
      Discover exciting opportunities across various fields and find your perfect match
    </p>
  </div>

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

          {/* 🔁 Redux + Navigate */}
          <button
            onClick={() => {
              dispatch(setCareerId(career.id)); // Set ID to Redux
              navigate(`/career/${career.id}`); // Navigate to page
            }}
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
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
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
                <Link to="/book" className="text-blue-500 flex items-center">
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
