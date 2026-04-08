"use client"

import ParticleBackground from "@/components/ParticleBackground"
import InteractiveBackground from "@/components/InteractiveBackground"
import Lottie from "lottie-react"
import { motion } from "framer-motion"

// Lottie animations
import ragAnimation from "../lottie/rag-architecture.json"
import mlopsAnimation from "../lottie/mlops-pipeline.json"
import cloudAnimation from "../lottie/cloud-ai-architecture.json"
import cloudDashboardAnimation from "../lottie/cloud-dashboard.json"
import mlMonitoringAnimation from "../lottie/Assistant-Bot.json"
import serverlessWorkflowAnimation from "../lottie/serverless-workflow.json"
import portfolioanimation from "../lottie/Portfolio-anim.json"

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen px-8 py-16 space-y-24 text-gray-800 bg-[#f4efff] overflow-x-hidden">

      {/* Interactive Neural Particle Background */}
      <InteractiveBackground />

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto py-12">

        {/* LEFT AI IMAGE */}
        <motion.div
          animate={{ boxShadow: ["0 0 20px #E0BBFF", "0 0 60px #C4A3FF", "0 0 20px #E0BBFF"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-120px] md:left-[-60px] top-24 md:top-16 w-[280px] md:w-[360px] h-[180px] md:h-[220px] perspective-1000 pointer-events-none"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="/purple-ai.png" alt="AI Illustration" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* RIGHT CLOUD IMAGE */}
        <motion.div
          animate={{ boxShadow: ["0 0 20px #E0BBFF", "0 0 60px #C4A3FF", "0 0 20px #E0BBFF"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-120px] md:right-[-60px] top-24 md:top-16 w-[280px] md:w-[360px] h-[180px] md:h-[220px] perspective-1000 pointer-events-none"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src="/purple-cloud.png" alt="Cloud Illustration" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* CENTER NEON HALO */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#E0BBFF] via-[#C4A3FF] to-[#9F7AEA] opacity-30 animate-pulse-slow"></div>
        </div>

        {/* CENTER PORTFOLIO ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-[260px] md:w-[320px]"
        >
          <Lottie animationData={portfolioanimation} loop />
        </motion.div>

        {/* NAME */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold italic text-[#9F7AEA] drop-shadow-[0_0_20px_rgba(159,122,234,0.6)]"
        >
          Raashika Kalidass
        </motion.h1>

        {/* ROLE */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600"
        >
          Cloud & AI Engineer • AWS Certified • Generative AI Specialist
        </motion.p>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 max-w-xl"
        >
          Hi 👋 Welcome to my portfolio. I build scalable cloud platforms and intelligent AI systems 
          using LLMs, MLOps, and modern cloud architectures.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 pt-4 flex-wrap z-10">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-[#9F7AEA] px-6 py-3 rounded-lg text-white hover:bg-[#7d5ec8] transition shadow-lg shadow-purple-300/40"
          >
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/raashika-kalidass"
            target="_blank"
            className="border border-purple-300 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/raashika"
            target="_blank"
            className="border border-purple-300 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="pt-6 space-y-4 z-10">
          <h2 className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700">
            Professional Summary
          </h2>
          <p className="text-gray-600">
            Cloud & AI engineer with 5+ years of experience designing scalable cloud platforms,
            enterprise AI systems, and production-grade Generative AI applications.
          </p>
          <p className="text-gray-500">
            Skilled in building distributed ML pipelines, cloud-native architectures on AWS,
            and integrating AI solutions for enterprise analytics, automation, and intelligent platforms.
          </p>
        </div>

      </section>
     
      {/* TECHNOLOGY STACK */}
      <section className="space-y-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg text-center mb-8">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-[#9F7AEA] drop-shadow-lg mb-4 md:ml-6">
              Cloud & Infrastructure
            </h3>
            <div className="flex flex-wrap justify-start gap-6">
              {[
                { name: "AWS", src: "/tech/aws.png" },
                { name: "Azure", src: "/tech/azure.svg" },
                { name: "Docker", src: "/tech/docker.svg" },
                { name: "Kubernetes", src: "/tech/kubernetes.svg" },
                { name: "Terraform", src: "/tech/terraform.svg" },
                { name: "Microservices", src: "/tech/microservices.png" }
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center w-24 bg-white/30 p-3 rounded-lg backdrop-blur hover:scale-105 transition duration-300"
                >
                  <img src={tech.src} alt={tech.name} className="w-12 h-12 mb-2" />
                  <span className="text-gray-600 text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-right flex flex-col items-end">
            <h3 className="text-2xl font-bold text-[#9F7AEA] drop-shadow-lg mb-4 mr-6">
              AI / Machine Learning
            </h3>
            <div className="flex flex-wrap justify-end gap-6">
              {[
                { name: "Python", src: "/tech/python.svg" },
                { name: "Pytorch", src: "/tech/pytorch.svg" },
                { name: "MLOps", src: "/tech/mlops.png" },
                { name: "RAG", src: "/tech/rag.png" },
                { name: "Vector DB", src: "/tech/vector-database.png" }
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center w-24 bg-white/30 p-3 rounded-lg backdrop-blur hover:scale-105 transition duration-300"
                >
                  <img src={tech.src} alt={tech.name} className="w-12 h-12 mb-2" />
                  <span className="text-gray-600 text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 mt-6 flex justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#9F7AEA] drop-shadow-lg mb-4">
                Generative AI
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "LangChain", src: "/tech/langchain.png" },
                  { name: "AgenticAI", src: "/tech/agentic ai.png" },
                  { name: "Prompt Engineering", src: "/tech/prompt engineering.png" },
                  { name: "LLM", src: "/tech/llm.png" }
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center w-24 bg-white/30 p-3 rounded-lg backdrop-blur hover:scale-105 transition duration-300"
                  >
                    <img src={tech.src} alt={tech.name} className="w-12 h-12 mb-2" />
                    <span className="text-gray-600 text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE SKILLS */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg">
          Core Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Cloud Architecture",
            "MLOps Pipelines",
            "Generative AI Applications",
            "Distributed Systems",
            "Serverless Architectures",
            "AI Platform Engineering",
            "Scalable ML Pipelines"
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-white/40 border border-purple-200 rounded-full hover:bg-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* AI ARCHITECTURE PROJECTS */}
      <section className="space-y-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg text-center tracking-wide">
          AI Architecture Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* RAG */}
          <motion.div
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Retrieval Augmented Generation</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={ragAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Production-grade RAG system with vector DBs, embeddings, and LLM orchestration for enterprise knowledge retrieval.
            </p>
          </motion.div>

          {/* MLOps */}
          <motion.div
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Enterprise MLOps Pipeline</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={mlopsAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Automated ML pipelines with CI/CD deployment, monitoring, and scalable cloud infrastructure.
            </p>
          </motion.div>

          {/* Cloud AI Platform */}
          <motion.div
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Scalable Cloud AI Platform</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={cloudAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Cloud-native AI platform supporting microservices, real-time inference APIs, and distributed ML workloads.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CLOUD PROJECTS */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg text-center tracking-wide">
          Cloud Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Dashboard */}
          <motion.div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Cloud Cost Optimization Dashboard</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={cloudDashboardAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Monitors AWS resources and usage, automates recommendations, and reduces infrastructure costs by 25%.
            </p>
          </motion.div>

          {/* ML Monitoring */}
          <motion.div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Real-time ML Monitoring</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={mlMonitoringAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Tracks model drift, pipeline latency, and prediction quality in production for enterprise AI systems.
            </p>
          </motion.div>

          {/* Serverless */}
          <motion.div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-purple-200 flex flex-col shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Serverless Event-driven Platform</h3>

            <div className="h-56 flex items-center justify-center overflow-hidden">
              <Lottie animationData={serverlessWorkflowAnimation} loop style={{ width: "90%", height: "100%" }} />
            </div>

            <p className="text-gray-600">
              Event-driven serverless platform with AWS Lambda, SQS, and Step Functions for scalable automation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CANADA JOURNEY */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg tracking-wide">
          Opportunities in Canada <span className="not-italic text-black">🇨🇦</span>
       </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Based in Toronto, actively seeking Cloud AI, MLOps, and Generative AI roles. Experienced in designing scalable
          AI platforms, enterprise ML pipelines, and cloud-native architectures.
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Open to full-time positions across Canada including Toronto, Vancouver, and remote opportunities.
        </p>
      </section>

      {/* CONTACT */}
      <section className="text-center space-y-2">
        <h2 className="text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700 drop-shadow-lg tracking-wide">
          Contact
        </h2>
        <p className="text-gray-600">
          Email:
          <a href="mailto:raashikark1588@gmail.com" className="text-[#9F7AEA]"> raashikark1588@gmail.com</a>
          {" • "}LinkedIn:
          <a href="https://linkedin.com/in/raashika" target="_blank" className="text-[#9F7AEA]"> linkedin.com/in/raashika</a>
          {" • "}GitHub:
          <a href="https://github.com/raashika" target="_blank" className="text-[#9F7AEA]"> github.com/Raashika-Kalidass</a>
        </p>
      </section>

    </main>
  )
}
