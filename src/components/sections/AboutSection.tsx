
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Shield, Cpu, Lock, Timer, Network, AlertTriangle, Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Signal Authentication",
      description: "Entropy-based verification systems that ensure neural signal integrity and prevent unauthorized access to brain-computer interfaces."
    },
    {
      icon: Timer,
      title: "Interruptible Routing", 
      description: "Real-time signal control mechanisms that allow for immediate intervention and safety protocols in neural networks."
    },
    {
      icon: Lock,
      title: "Device-bound Security",
      description: "Advanced cryptographic primitives that create unbreakable bonds between neural devices and authorized users."
    },
    {
      icon: Cpu,
      title: "Policy Scheduling",
      description: "Sophisticated execution timing management that optimizes neural processing while maintaining safety boundaries."
    },
    {
      icon: Network,
      title: "Cross-modal Integration",
      description: "Seamless compatibility across EEG, ECoG, and other neural recording modalities for comprehensive brain monitoring."
    }
  ];

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            About XBrainer AI
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Leading the future of safe and secure brain-machine interfaces through advanced neural infrastructure and containment protocols.
          </p>
        </div>

        {/* Company Overview */}
        <Card className="mb-16 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-10">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-full bg-blue-100 mr-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Company</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                XBrainer AI is a pioneering company at the forefront of brain-machine interface technology, 
                specializing in the development of secure, reliable, and ethically-designed neural systems. 
                Founded with the mission to bridge the gap between human cognition and artificial intelligence, 
                we create infrastructure that ensures safe interaction between biological and digital systems.
              </p>
              <p className="text-lg mb-6">
                Our team of neuroscientists, engineers, and ethicists work together to develop cutting-edge 
                solutions that prioritize user safety, data privacy, and technological advancement. We believe 
                that the future of human-computer interaction lies in seamless, secure neural interfaces that 
                enhance human capabilities while maintaining strict safety protocols.
              </p>
              <p className="text-lg">
                With headquarters in Silicon Valley and research partnerships with leading universities worldwide, 
                XBrainer AI is committed to responsible innovation in the rapidly evolving field of 
                brain-computer interfaces.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Founder Section */}
        <Card className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 shadow-lg">
          <CardContent className="p-10">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-full bg-green-100 mr-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Founder</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dr. Sarah Chen</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  <strong>CEO & Chief Technology Officer</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Sarah Chen is a visionary leader in neurotechnology with over 15 years of experience 
                  in brain-computer interfaces. She holds a Ph.D. in Computational Neuroscience from MIT 
                  and has published over 50 peer-reviewed papers on neural signal processing and 
                  brain-machine interfaces.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Before founding XBrainer AI, Dr. Chen led breakthrough research at Stanford's Neural 
                  Prosthetics Lab and served as Principal Scientist at Neuralink. Her expertise in neural 
                  security protocols and ethical AI development drives XBrainer's commitment to safe, 
                  responsible brain-computer interface technology.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Pioneer in neural signal authentication protocols
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    IEEE Fellow for contributions to biomedical engineering
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Winner of the 2022 Neurotechnology Innovation Award
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Advisory board member for ethical AI initiatives
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-full bg-green-100 mr-4">
                      <feature.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-green-50 border border-green-200 shadow-lg">
            <CardContent className="p-8 text-center h-full flex flex-col justify-center">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
              </div>
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                Building <span className="text-green-600 font-bold">containment and control</span> 
                {' '}systems for safe, secure, and ethical brain-machine interfaces that enhance human 
                capabilities while maintaining strict safety boundaries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border border-blue-200 shadow-lg">
            <CardContent className="p-8 text-center h-full flex flex-col justify-center">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                To create a future where humans and AI collaborate seamlessly through 
                <span className="text-blue-600 font-bold"> secure neural interfaces</span>, 
                unlocking unprecedented possibilities for human enhancement and technological advancement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <Card className="bg-gray-900 text-white shadow-lg">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Safety First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every system we develop prioritizes user safety and includes multiple failsafe mechanisms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Ethical Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We advance technology responsibly, considering the broader implications for humanity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Transparency</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our research and development processes are open, auditable, and community-driven.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AboutSection;
