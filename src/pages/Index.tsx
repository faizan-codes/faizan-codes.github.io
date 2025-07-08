import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin, User, Briefcase, Book, Award, Link } from "lucide-react";
import emailjs from '@emailjs/browser';
import profileImage from "@/assets/Photo.png";
const Index = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lLgxVQk9mvmNH9YzC"); // Replace with your EmailJS public key
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_eot5v5t',
        'template_cfxwatf',
        formRef.current!,
        'lLgxVQk9mvmNH9YzC'
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const skills = ["Python", "Machine Learning", "Deep Learning", "LLMs", "NLP", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "AWS", "Google Cloud AI", "Docker", "MLOps", "Hugging Face", "RAG", "Vector Databases"];
  const projects = [{
    title: "Voice AI Customer Support Agent",
    description: "Developed an AI-powered voice agent for real-time customer support and call automation. Handles natural language queries with intelligent responses using Twilio, LiveKit, and SIP Trunking.",
    tech: ["OpenAI API", "Twilio", "LiveKit", "Python", "VAD"]
  }, {
    title: "AI Browser Automation Bot with Live Preview",
    description: "Developed an AI-powered voice agent for real-time customer support and call automation. Handles natural language queries with intelligent responses using Twilio, LiveKit, and SIP Trunking.Developed a browser automation bot with real-time visual feedback, enabling natural language and voice-based control using LLAMA 3.3, FastAPI, and noVNC.",
    tech: ["OpenAI API", "Twilio", "LiveKit", "Python", "VAD"]
  }, {
    title: "AI-Powered Research Assistant",
    description: "Developed an AI tool for automated research, web scraping, and document generation. Uses BeautifulSoup, Scrapy, and Selenium for data retrieval with GPT integration for intelligent summarization.",
    tech: ["Python", "FastAPI", "GPT-4", "BeautifulSoup", "Selenium"]
  }, {
    title: "Fine-Tuning of LLMs",
    description: "Fine-tuned state-of-the-art language models including Gemma, Mistral, LLaMA, and Falcon-7B using LoRA and QLoRA techniques for enhanced task-specific performance.",
    tech: ["PyTorch", "Hugging Face", "LoRA", "QLoRA", "LLaMA"]
  }];
  const experiences = [{
    title: "Data Scientist",
    company: "AugAI, Pakistan",
    period: "Mar 2024 - Present",
    description: "Served as Data Scientist, managing project lifecycles and ensuring successful delivery of AI solutions. Developed multiple high-impact AI initiatives, driving measurable improvements in business outcomes. Developed and deployed machine learning models, significantly enhancing predictive accuracy. Trained and mentored junior data scientists, fostering a culture of learning and collaboration."
  }];
  const education = [{
    degree: "BS Computer Science",
    school: "University of Central Punjab, Lahore",
    period: "2019 - 2024",
  }];
  const certifications = ["ChatGPT Prompt Engineering for Developers", "Building Multimodal Search and RAG", "Intro to Deep Learning", "Computer Vision", "Deep Learning Specialization"];
  const volunteerWork = [{
    role: "AI Mentor",
    organization: "Local Tech Community",
    period: "2024 - Present",
    description: "Mentor aspiring data scientists and help them understand machine learning concepts and AI applications."
  }];
  return <div className="min-h-screen bg-background">

    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="relative mb-8 ">
          <img src={profileImage} alt="Faizan Ahmad" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full mx-auto border-8 floating-animation object-cover" />
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 hero-text animate-fade-in-up">Faizan Ahmad</h1>
        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
          Data Scientist | GenAI Engineer | AI Engineer
        </p>
        <p className="text-sm sm:text-lg md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
          Experienced Data Scientist specializing in machine learning, deep learning, and large language models (LLMs).
          Proficient in Python, NLP, and advanced AI frameworks with expertise in LLM agents and AI-driven data processing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
          <a href="mailto:faizanbutt030@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">

            <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </a>
          <a href="https://drive.google.com/file/d/18A0vt-it18kIy2MfAgwsPn42aBqT-2d9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="glow-border hover-lift">
              <Link className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-16 sm:py-20 px-3 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an experienced Data Scientist specializing in machine learning, deep learning, and large language models (LLMs),
              with hands-on experience of more than a year at AUGAI. I'm proficient in Python, NLP, and advanced AI frameworks,
              with expertise in LLM agents, LangChain, and AI-driven data processing.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm skilled in deploying AI solutions on cloud platforms and adept at transforming complex insights into actionable strategies.
              I'm driven by a passion for advancing innovation in AI and data science, implementing MLOps workflows, and delivering data-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/fezwho" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:faizanbutt030@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <Card className="glass-card hover-lift animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-primary" />
                <span>inbox.fezan@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-primary" />
                <span>+923026385106</span>
              </div>
              <div className="flex items-center">
                <User className="mr-3 h-4 w-4 text-primary" />
                <span>Johar Town, Lahore</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="py-16 sm:py-20 px-3 sm:px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => <Card key={index} className="glass-card hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-5 w-5 text-primary" />
                {edu.degree}
              </CardTitle>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="pl-7">{edu.school}</span>
                <span>{edu.period}</span>
              </div>
            </CardHeader>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="py-16 sm:py-20 px-3 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => <Card key={index} className="glass-card hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 mt-1 h-5 w-5 text-primary" />
                {exp.title}
              </CardTitle>
              <div className="flex justify-between px-7 items-center text-muted-foreground">
                <span>{exp.company}</span>
                <span>{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-7">{exp.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-16 sm:py-20 px-3 sm:px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => <Card key={index} className="glass-card hover-lift animate-scale-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
            <CardHeader>
              <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="py-16 sm:py-20 px-3 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 animate-fade-in-up">
          {skills.map((skill, index) => <Badge key={index} variant="secondary" className=" bg-blue-100 text-blue-700 text-sm py-2 px-4" style={{
            animationDelay: `${index * 0.1}s`
          }}>
            {skill}
          </Badge>)}
        </div>
      </div>
    </section>

    {/* Certifications Section */}
    <section id="certifications" className="py-16 sm:py-20 px-3 sm:px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => <Card key={index} className="glass-card hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
            <CardContent className="flex items-center p-6">
              <Award className="mr-4 h-6 w-6 text-primary" />
              <span className="text-lg">{cert}</span>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Volunteer Work Section */}
    <section id="volunteer" className="py-16 sm:py-20 px-3 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Volunteer Work</h2>
        <div className="space-y-6 sm:space-y-8">
          {volunteerWork.map((volunteer, index) => <Card key={index} className="glass-card hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                {volunteer.role}
              </CardTitle>
              <div className="flex justify-between items-center px-7 text-muted-foreground">
                <span>{volunteer.organization}</span>
                <span>{volunteer.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-7">{volunteer.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16 sm:py-20 px-3 sm:px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting AI projects.
              Whether you want to collaborate on data science projects or discuss AI innovations, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 h-5 w-5 text-primary" />
                <span>faizanbutt030@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-5 w-5 text-primary" />
                <span>+923026385106</span>
              </div>
              <div className="flex items-center space-x-4 pt-1">
                <a href="https://www.linkedin.com/in/fezwho" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-blue-400 hover:text-slate-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <span>@fezwho</span>
              </div>
            </div>
          </div>

          <Card className="glass-card animate-slide-in-right">
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input name="from_name" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="bg-background/50" />
                </div>
                <div>
                  <Input name="reply_to" type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required className="bg-background/50" />
                </div>
                <div>
                  <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} required rows={5} className="bg-background/50" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-6 sm:py-8 px-3 sm:px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © 2024 Faizan Ahmad.
        </p>
      </div>
    </footer>
  </div>;
};
export default Index;