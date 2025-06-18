
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Briefcase, Zap, Globe, Sparkles } from 'lucide-react';
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
    description: 'Work on cutting-edge ML algorithms for signal processing and anomaly detection in brain-machine interfaces.',
    requirements: ['Python, TensorFlow/PyTorch', 'Signal processing fundamentals', 'Statistics/ML coursework', 'Research experience preferred']
  },
  {
    title: 'Cybersecurity Engineer',
    type: 'Full-Time' as const,
    level: 'Mid Level' as const,
    description: 'Design and implement security protocols for advanced interface systems, focusing on encryption and threat detection.',
    requirements: ['5+ years cybersecurity experience', 'Cryptography expertise', 'Network security', 'IoT/embedded systems security']
  },
  {
    title: 'Cybersecurity Intern',
    type: 'Intern' as const,
    level: 'Early Career' as const,
    description: 'Learn and contribute to cybersecurity research for advanced interfaces, including vulnerability assessment and security testing.',
    requirements: ['Cybersecurity coursework', 'Basic networking knowledge', 'Programming skills (Python/C++)', 'Security certifications a plus']
  },
  {
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern' as const,
    level: 'Early Career' as const,
    description: 'Build and maintain infrastructure for advanced interface testing environments and deployment pipelines.',
    requirements: ['Docker/Kubernetes experience', 'Cloud platforms (AWS/GCP)', 'CI/CD pipelines', 'Linux administration']
  },
  {
    title: 'Neuroscientist',
    type: 'Full-Time' as const,
    level: 'Junior' as const,
    description: 'Research oscillation patterns and contribute to the scientific understanding of brain-machine interface security.',
    requirements: ['PhD in Neuroscience/related field', 'Signal analysis', 'Research publication record', 'BCI experience preferred']
  },
  {
    title: 'Neuroengineer',
    type: 'Full-Time' as const,
    level: 'Mid Level' as const,
    description: 'Design and optimize interface hardware and software systems with focus on security and reliability.',
    requirements: ['MS/PhD in Biomedical/Electrical Engineering', 'Interface design', 'Signal processing', '3+ years BCI experience']
  },
  {
    title: 'Hardware Interface Advisor',
    type: 'Part-Time' as const,
    level: 'Mid Level' as const,
    description: 'Provide strategic guidance on hardware security for advanced interfaces and review system architectures.',
    requirements: ['10+ years hardware security', 'Interface expertise', 'Consulting experience', 'Security architecture design']
  }
];

// Create duplicate jobs for both locations
const jobs: Job[] = baseJobs.flatMap((job, index) => [
  {
    ...job,
    id: `${index * 2 + 1}`,
    location: 'San Francisco (Remote)',
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
      {/* Enhanced Futuristic Filters */}
      <div className="relative z-10">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-cyan-400/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-400/10 to-indigo-500/5 rounded-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-4 h-5 w-5 text-cyan-300 group-hover:text-cyan-200 transition-colors z-10" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-black/30 border-cyan-400/50 text-white placeholder-cyan-300/70 rounded-2xl h-12 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 transition-all backdrop-blur-sm"
              />
            </div>

            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="bg-black/30 border-cyan-400/50 text-white rounded-2xl h-12 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 backdrop-blur-sm">
                <Globe className="h-4 w-4 text-cyan-300 mr-2" />
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-cyan-400/50 backdrop-blur-xl">
                <SelectItem value="all" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">All Locations</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country} className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-black/30 border-cyan-400/50 text-white rounded-2xl h-12 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-cyan-300 mr-2" />
                <SelectValue placeholder="Position type" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-cyan-400/50 backdrop-blur-xl">
                <SelectItem value="all" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">All Types</SelectItem>
                <SelectItem value="Intern" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Intern</SelectItem>
                <SelectItem value="Part-Time" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Part-Time</SelectItem>
                <SelectItem value="Full-Time" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Full-Time</SelectItem>
              </SelectContent>
            </Select>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="bg-black/30 border-cyan-400/50 text-white rounded-2xl h-12 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 backdrop-blur-sm">
                <Briefcase className="h-4 w-4 text-cyan-300 mr-2" />
                <SelectValue placeholder="Experience level" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-cyan-400/50 backdrop-blur-xl">
                <SelectItem value="all" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">All Levels</SelectItem>
                <SelectItem value="Early Career" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Early Career</SelectItem>
                <SelectItem value="Junior" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Junior</SelectItem>
                <SelectItem value="Mid Level" className="text-white hover:bg-cyan-800/50 focus:bg-cyan-800/50">Mid Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="relative z-10 text-cyan-200 font-mono bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-cyan-400/30">
        <Sparkles className="inline h-4 w-4 mr-2 text-cyan-300" />
        Positions Found: {filteredJobs.length} of {jobs.length}
      </div>

      {/* Enhanced Job Cards */}
      <div className="relative z-10 grid gap-8">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-cyan-400/20 hover:scale-[1.02] relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-400/10 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <CardHeader className="relative z-10 p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-6">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:via-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-sm">
                      <Clock className="h-4 w-4 text-cyan-200" />
                      <span className={`font-semibold ${
                        job.type === 'Intern' ? 'text-blue-200' :
                        job.type === 'Part-Time' ? 'text-yellow-200' :
                        'text-green-200'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/40 backdrop-blur-sm">
                      <Briefcase className="h-4 w-4 text-indigo-200" />
                      <span className="text-indigo-200 font-semibold">
                        {job.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 backdrop-blur-sm">
                      <MapPin className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 font-semibold">{job.location}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job.id)}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Apply Now
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 p-8 pt-0">
              <CardDescription className="text-cyan-100 mb-8 text-lg leading-relaxed">
                {job.description}
              </CardDescription>
              <div className="bg-gradient-to-r from-black/20 to-black/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-cyan-200 mb-6 flex items-center">
                  <Sparkles className="h-5 w-5 mr-3" />
                  Requirements:
                </h4>
                <ul className="grid gap-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-4 text-cyan-100">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="leading-relaxed text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="relative z-10 text-center py-20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-cyan-400/30">
          <div className="space-y-6">
            <Sparkles className="h-20 w-20 text-cyan-300 mx-auto opacity-50" />
            <p className="text-cyan-200 text-2xl font-semibold">No positions match your current filters.</p>
            <p className="text-cyan-300 text-lg">Adjust your search parameters to discover more opportunities.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
