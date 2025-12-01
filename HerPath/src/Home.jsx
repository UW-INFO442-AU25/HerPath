import { GradientBackground } from "@/components/ui/gradient-background";
import malalaImage from "@/assets/malala.jpg";
import member1Image from "@/assets/team/member1.JPG";
import member2Image from "@/assets/team/member2.jpg";
import member3Image from "@/assets/team/member3.JPG";
import member4Image from "@/assets/team/member4.jpg";
import { motion } from "framer-motion";
import HeaderComponent from "@/components/HeaderComponent";
import {
  BookOpen,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  Gem,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "12 Comprehensive Sections",
      description:
        "From budgeting basics to investing strategies, master every aspect of personal finance.",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description:
        "Visual progress tracking keeps you motivated as you complete each module.",
    },
    {
      icon: Users,
      title: "Built for Young Women",
      description:
        "Content designed specifically to address the financial challenges women face.",
    },
    {
      icon: Award,
      title: "Earn Achievements",
      description:
        "Celebrate your learning milestones with completion badges and rewards.",
    },
  ];

  const stats = [
    { number: "31", label: "Learning Modules" },
    { number: "12", label: "Topic Sections" },
    { number: "100%", label: "Free Access" },
  ];

  const topics = [
    "Financial Health",
    "Banking Basics",
    "Saving Strategies",
    "Budgeting",
    "Smart Spending",
    "Credit & Debt",
    "Taxes",
    "Investing",
  ];

  return (
    <GradientBackground>
      <HeaderComponent />

      {/* Hero Section - Grand & Impactful */}
      <section className="relative px-4 sm:px-6 pt-20 sm:pt-32 pb-24 sm:pb-36 overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating sparkles */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] text-pink-300"
          >
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-[15%] text-rose-300"
          >
            <Star className="w-6 h-6 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 25, -15], x: [-10, 10, -10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-[20%] text-pink-400"
          >
            <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [15, -25, 15], rotate: [0, 180, 360] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-[25%] text-rose-400"
          >
            <Gem className="w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[8%] text-yellow-400"
          >
            <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-yellow-400" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-48 left-[8%] text-pink-500"
          >
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>

          {/* Gradient orbs */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-200 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm text-pink-700 rounded-full text-sm font-semibold shadow-lg border border-pink-100">
              <Sparkles className="w-4 h-4" />
              Free Financial Education for Young Women
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
          >
            <span className="text-gray-900">Your Path to</span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-rose-500 to-pink-600 drop-shadow-sm"
            >
              Financial Freedom
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Master budgeting, saving, investing, and more with our comprehensive
            curriculum designed{" "}
            <span className="text-pink-600 font-semibold">
              specifically for young women
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="/modules"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 bg-linear-to-r from-pink-500 to-rose-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl shadow-pink-500/25 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 font-semibold transition-colors text-lg"
            >
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 sm:px-6 py-24 sm:py-32 bg-white/70 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4"
            >
              Why Choose HerPath
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
                Succeed
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make financial education accessible,
              engaging, and effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="px-4 sm:px-6 py-24 sm:py-32 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4"
            >
              Comprehensive Curriculum
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What You'll{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
                Learn
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Master every aspect of personal finance with our expert-designed
              modules
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {topics.map((topic, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white rounded-2xl shadow-lg border border-gray-100 text-gray-700 font-semibold hover:border-pink-300 hover:shadow-xl transition-all cursor-default"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                {topic}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-4 sm:px-6 py-24 sm:py-32 bg-white/70 relative overflow-hidden">
        {/* Decorative quotes */}
        <div className="absolute top-10 left-10 text-pink-100 text-[200px] font-serif leading-none opacity-50">
          "
        </div>
        <div className="absolute bottom-10 right-10 text-pink-100 text-[200px] font-serif leading-none opacity-50 rotate-180">
          "
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto ring-4 ring-pink-100 ring-offset-4">
                  <img
                    src={malalaImage}
                    alt="Malala Yousafzai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 border-2 border-dashed border-pink-200 rounded-full"
                />
              </div>
            </motion.div>

            {/* Quote */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="text-sm uppercase tracking-widest text-pink-600 font-semibold mb-6">
                ✨ Inspired by Women Who Lead Change
              </p>
              <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                "One child, one teacher, one book, one pen can change the
                world."
              </blockquote>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-1 bg-linear-to-r from-pink-500 to-rose-500 rounded-full" />
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    Malala Yousafzai
                  </p>
                  <p className="text-gray-600">Nobel Peace Prize Laureate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4"
            >
              Our Purpose
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
                Mission
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
              We believe financial literacy is self-empowerment. HerPath was
              created to bridge the financial education gap for young women,
              providing accessible, practical knowledge that builds confidence
              and independence. Every woman deserves the tools to take control
              of her financial future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md text-gray-700 font-medium"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                100% Free
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md text-gray-700 font-medium"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                Self-Paced Learning
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md text-gray-700 font-medium"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                Progress Tracking
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="px-4 sm:px-6 py-24 sm:py-32 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4"
            >
              Meet the Team
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The People Behind{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-500">
                HerPath
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We're a team of passionate students from the University of
              Washington dedicated to making financial education accessible to
              all.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-linear-to-br from-pink-100 to-rose-100 overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member1Image}
                    alt="Team Member 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Hannah Bolton</h3>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-linear-to-br from-pink-100 to-rose-100 overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member2Image}
                    alt="Team Member 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Lily Ngo</h3>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-linear-to-br from-pink-100 to-rose-100 overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member3Image}
                    alt="Team Member 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Sofila Song</h3>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-linear-to-br from-pink-100 to-rose-100 overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow">
                  <img
                    src={member4Image}
                    alt="Team Member 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Theophila Abigail Setiawan
              </h3>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-500 mt-12 text-sm"
          >
            INFO 442 · University of Washington · 2025
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-24 sm:py-32 bg-linear-to-br from-pink-500 via-rose-500 to-pink-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-[15%] w-40 h-40 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Start Your Journey Today
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Take Control of Your{" "}
              <span className="underline decoration-4 decoration-white/50 underline-offset-4">
                Financial Future
              </span>
              ?
            </h2>
            <p className="text-lg sm:text-xl text-pink-100 mb-12 max-w-2xl mx-auto">
              Join young women everywhere who are building confidence and skills
              in personal finance. It's completely free. Start now!
            </p>
            <motion.a
              href="/modules"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-black text-white">HER</span>
                <span className="text-lg text-pink-400 ml-1 font-semibold">
                  Path
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Empowering young women with the financial knowledge and
                confidence they need to succeed. Free, accessible education for
                everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/modules"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Learning Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Project Info
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>INFO 442 Group 6</li>
                <li>University of Washington</li>
                <li>2025</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 HerPath. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </GradientBackground>
  );
}

export default Home;
