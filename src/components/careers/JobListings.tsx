
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Briefcase, Zap, Globe } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface Job {
  id: string;
  title: string;
  type: 'Intern' | 'Part-Time' | 'Full-Time';
  level: 'Early Career' | 'Junior' | 'Mid Level';
  location: string;
  country: string;
  description: string;
  requirements: string[];
}

const baseJobs = [
  {
    title: 'Machine Learning / Signal Processing Intern',
    type: 'Intern' as const,
    level: 'Early Career' as const,
    description: 'Work on cutting-edge ML algorithms for neural signal processing and anomaly detection in brain-machine interfaces.',
    requirements: ['Python, TensorFlow/PyTorch', 'Signal processing fundamentals', 'Statistics/ML coursework', 'Research experience preferred']
  },
  {
    title: 'Cybersecurity Engineer',
    type: 'Full-Time' as const,
    level: 'Mid Level' as const,
    description: 'Design and implement security protocols for neural interface systems, focusing on encryption and threat detection.',
    requirements: ['5+ years cybersecurity experience', 'Cryptography expertise', 'Network security', 'IoT/embedded systems security']
  },
  {
    title: 'Cybersecurity Intern',
    type: 'Intern' as const,
    level: 'Early Career' as const,
    description: 'Learn and contribute to cybersecurity research for neural interfaces, including vulnerability assessment and security testing.',
    requirements: ['Cybersecurity coursework', 'Basic networking knowledge', 'Programming skills (Python/C++)', 'Security certifications a plus']
  },
  {
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern' as const,
    level: 'Early Career' as const,
    description: 'Build and maintain infrastructure for neural interface testing environments and deployment pipelines.',
    requirements: ['Docker/Kubernetes experience', 'Cloud platforms (AWS/GCP)', 'CI/CD pipelines', 'Linux administration']
  },
  {
    title: 'Neuroscientist',
    type: 'Full-Time' as const,
    level: 'Junior' as const,
    description: 'Research neural oscillation patterns and contribute to the scientific understanding of brain-machine interface security.',
    requirements: ['PhD in Neuroscience/related field', 'Neural signal analysis', 'Research publication record', 'BCI experience preferred']
  },
  {
    title: 'Neuroengineer',
    type: 'Full-Time' as const,
    level: 'Mid Level' as const,
    description: 'Design and optimize neural interface hardware and software systems with focus on security and reliability.',
    requirements: ['MS/PhD in Biomedical/Electrical Engineering', 'Neural interface design', 'Signal processing', '3+ years BCI experience']
  },
  {
    title: 'Hardware Interface Advisor',
    type: 'Part-Time' as const,
    level: 'Mid Level' as const,
    description: 'Provide strategic guidance on hardware security for neural interfaces and review system architectures.',
    requirements: ['10+ years hardware security', 'Neural interface expertise', 'Consulting experience', 'Security architecture design']
  }
];

// Create duplicate jobs for both locations
const jobs: Job[] = baseJobs.flatMap((job, index) => [
  {
    ...job,
    id: `${index * 2 + 1}`,
    location: 'San Francisco, CA (Remote)',
    country: 'United States'
  },
  {
    ...job,
    id: `${index * 2 + 2}`,
    location: 'Hyderabad (Remote)',
    country: 'India'
  }
]);

const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');

  const countries = [...new Set(jobs.map(job => job.country))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = countryFilter === 'all' || job.country === countryFilter;
      const matchesType = typeFilter === 'all' || job.type === typeFilter;
      const matchesLevel = levelFilter === 'all' || job.level === levelFilter;

      return matchesSearch && matchesCountry && matchesType && matchesLevel;
    });
  }, [searchTerm, countryFilter, typeFilter, levelFilter]);

  const handleApply = (jobId: string) => {
    window.open('https://boards.greenhouse.io/xbrainerai', '_blank');
  };

  return (
    <div className="space-y-8 relative">
      {/* Futuristic Cloud Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-cyan-300/30 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 via-blue-300/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-pink-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Filters with Futuristic Design */}
      <div className="relative z-10 bg-gradient-to-r from-blue-900/30 via-cyan-800/40 to-purple-900/30 backdrop-blur-2xl rounded-2xl p-8 border border-cyan-400/40 shadow-2xl shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/20 to-purple-500/10 rounded-2xl blur-xl"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <Search className="absolute left-4 top-4 h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <Input
              placeholder="Search neural positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-black/60 border-cyan-500/50 text-white placeholder-cyan-300/70 rounded-xl h-12 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
            />
          </div>

          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger className="bg-black/60 border-cyan-500/50 text-white rounded-xl h-12 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50">
              <Globe className="h-4 w-4 text-cyan-400 mr-2" />
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-cyan-500/50 backdrop-blur-xl">
              <SelectItem value="all" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">All Locations</SelectItem>
              {countries.map(country => (
                <SelectItem key={country} value={country} className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="bg-black/60 border-cyan-500/50 text-white rounded-xl h-12 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50">
              <Clock className="h-4 w-4 text-cyan-400 mr-2" />
              <SelectValue placeholder="Position type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-cyan-500/50 backdrop-blur-xl">
              <SelectItem value="all" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">All Types</SelectItem>
              <SelectItem value="Intern" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Neural Intern</SelectItem>
              <SelectItem value="Part-Time" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Part-Time</SelectItem>
              <SelectItem value="Full-Time" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Full-Time</SelectItem>
            </SelectContent>
          </Select>

          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="bg-black/60 border-cyan-500/50 text-white rounded-xl h-12 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50">
              <Briefcase className="h-4 w-4 text-cyan-400 mr-2" />
              <SelectValue placeholder="Experience level" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-cyan-500/50 backdrop-blur-xl">
              <SelectItem value="all" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">All Levels</SelectItem>
              <SelectItem value="Early Career" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Neural Pioneer</SelectItem>
              <SelectItem value="Junior" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Junior</SelectItem>
              <SelectItem value="Mid Level" className="text-white hover:bg-cyan-900/50 focus:bg-cyan-900/50">Mid Level</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count with Futuristic Design */}
      <div className="relative z-10 text-cyan-300 font-mono bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/30">
        <Zap className="inline h-4 w-4 mr-2 text-cyan-400" />
        Neural Positions Found: {filteredJobs.length} of {jobs.length}
      </div>

      {/* Enhanced Job Cards */}
      <div className="relative z-10 grid gap-8">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="group bg-gradient-to-br from-blue-900/20 via-cyan-800/30 to-purple-900/20 backdrop-blur-2xl border border-cyan-400/40 hover:border-cyan-300/70 transition-all duration-500 rounded-2xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-400/30 hover:scale-[1.02] relative overflow-hidden">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-cyan-400/50">
                      <Clock className="h-4 w-4 text-cyan-300" />
                      <span className={`font-semibold ${
                        job.type === 'Intern' ? 'text-blue-300' :
                        job.type === 'Part-Time' ? 'text-yellow-300' :
                        'text-green-300'
                      }`}>
                        {job.type === 'Intern' ? 'Neural Intern' : job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50">
                      <Briefcase className="h-4 w-4 text-purple-300" />
                      <span className="text-purple-300 font-semibold">
                        {job.level === 'Early Career' ? 'Neural Pioneer' : job.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      <span className="text-cyan-300 font-semibold">{job.location}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job.id)}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-gray-200 mb-6 text-lg leading-relaxed">
                {job.description}
              </CardDescription>
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-lg font-bold text-cyan-300 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Neural Requirements:
                </h4>
                <ul className="grid gap-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="relative z-10 text-center py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30">
          <div className="space-y-4">
            <Zap className="h-16 w-16 text-cyan-400 mx-auto opacity-50" />
            <p className="text-cyan-300 text-xl font-semibold">No neural positions match your current filters.</p>
            <p className="text-cyan-500 text-lg">Adjust your search parameters to discover more opportunities.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
