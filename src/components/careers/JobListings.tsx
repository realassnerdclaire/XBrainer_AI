
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
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/20 rounded-3xl p-8 border border-sky-400/40 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300/10 via-blue-300/15 to-sky-400/10 rounded-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-4 h-5 w-5 text-sky-700 group-hover:text-sky-600 transition-colors z-10" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white/40 border-sky-400/60 text-slate-800 placeholder-sky-700/70 rounded-2xl h-12 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/50 transition-all backdrop-blur-sm"
              />
            </div>

            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="bg-white/40 border-sky-400/60 text-slate-800 rounded-2xl h-12 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/50 backdrop-blur-sm">
                <Globe className="h-4 w-4 text-sky-700 mr-2" />
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-sky-400/60 backdrop-blur-xl">
                <SelectItem value="all" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">All Locations</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country} className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-white/40 border-sky-400/60 text-slate-800 rounded-2xl h-12 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/50 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-sky-700 mr-2" />
                <SelectValue placeholder="Position type" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-sky-400/60 backdrop-blur-xl">
                <SelectItem value="all" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">All Types</SelectItem>
                <SelectItem value="Intern" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Intern</SelectItem>
                <SelectItem value="Part-Time" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Part-Time</SelectItem>
                <SelectItem value="Full-Time" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Full-Time</SelectItem>
              </SelectContent>
            </Select>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="bg-white/40 border-sky-400/60 text-slate-800 rounded-2xl h-12 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/50 backdrop-blur-sm">
                <Briefcase className="h-4 w-4 text-sky-700 mr-2" />
                <SelectValue placeholder="Experience level" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-sky-400/60 backdrop-blur-xl">
                <SelectItem value="all" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">All Levels</SelectItem>
                <SelectItem value="Early Career" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Early Career</SelectItem>
                <SelectItem value="Junior" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Junior</SelectItem>
                <SelectItem value="Mid Level" className="text-slate-800 hover:bg-sky-200/50 focus:bg-sky-200/50">Mid Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="relative z-10 text-sky-800 font-mono bg-gradient-to-r from-sky-300/20 to-blue-300/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-sky-400/40">
        <Sparkles className="inline h-4 w-4 mr-2 text-sky-700" />
        Positions Found: {filteredJobs.length} of {jobs.length}
      </div>

      {/* Enhanced Job Cards */}
      <div className="relative z-10 grid gap-8">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="group backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/20 border border-sky-400/40 hover:border-sky-500/60 transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-sky-400/30 hover:scale-[1.02] relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/10 via-blue-300/15 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <CardHeader className="relative z-10 p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-6">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-800 via-blue-700 to-sky-900 bg-clip-text text-transparent group-hover:from-sky-700 group-hover:via-blue-600 group-hover:to-sky-800 transition-all duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-300/30 to-blue-300/30 border border-sky-400/50 backdrop-blur-sm">
                      <Clock className="h-4 w-4 text-sky-700" />
                      <span className={`font-semibold ${
                        job.type === 'Intern' ? 'text-blue-700' :
                        job.type === 'Part-Time' ? 'text-amber-700' :
                        'text-green-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-300/30 to-sky-300/30 border border-blue-400/50 backdrop-blur-sm">
                      <Briefcase className="h-4 w-4 text-blue-700" />
                      <span className="text-blue-800 font-semibold">
                        {job.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-400/30 to-blue-400/30 border border-sky-500/50 backdrop-blur-sm">
                      <MapPin className="h-4 w-4 text-sky-700" />
                      <span className="text-sky-800 font-semibold">{job.location}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job.id)}
                  className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 hover:from-sky-400 hover:via-blue-400 hover:to-sky-500 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-sky-500/40 hover:shadow-sky-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Apply Now
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 p-8 pt-0">
              <CardDescription className="text-sky-800 mb-8 text-lg leading-relaxed">
                {job.description}
              </CardDescription>
              <div className="bg-gradient-to-r from-white/30 to-white/20 rounded-2xl p-8 border border-sky-400/30 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-sky-800 mb-6 flex items-center">
                  <Sparkles className="h-5 w-5 mr-3" />
                  Requirements:
                </h4>
                <ul className="grid gap-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-4 text-sky-800">
                      <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
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
        <div className="relative z-10 text-center py-20 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/20 rounded-3xl border border-sky-400/40">
          <div className="space-y-6">
            <Sparkles className="h-20 w-20 text-sky-600 mx-auto opacity-50" />
            <p className="text-sky-800 text-2xl font-semibold">No positions match your current filters.</p>
            <p className="text-sky-700 text-lg">Adjust your search parameters to discover more opportunities.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
