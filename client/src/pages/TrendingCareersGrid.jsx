import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const TrendingCareersGrid = () => {
  const [hoveredCareer, setHoveredCareer] = useState(null);

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

  return (
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
            <button
              onClick={() => window.location.href = '/explore-hub'}
              className="inline-flex items-center space-x-2 text-brand-teal hover:text-brand-teal/80 font-semibold transition-brand group"
            >
              <span>Explore All Career Paths</span>
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCareersGrid;