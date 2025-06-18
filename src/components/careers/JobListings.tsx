
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Briefcase } from 'lucide-react';
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

const jobs: Job[] = [
  {
    id: '1',
    title: 'Machine Learning / Signal Processing Intern',
    type: 'Intern',
    level: 'Early Career',
    location: 'Remote / San Francisco, CA',
    country: 'United States',
    description: 'Work on cutting-edge ML algorithms for neural signal processing and anomaly detection in brain-machine interfaces.',
    requirements: ['Python, TensorFlow/PyTorch', 'Signal processing fundamentals', 'Statistics/ML coursework', 'Research experience preferred']
  },
  {
    id: '2',
    title: 'Cybersecurity Engineer',
    type: 'Full-Time',
    level: 'Mid Level',
    location: 'San Francisco, CA',
    country: 'United States',
    description: 'Design and implement security protocols for neural interface systems, focusing on encryption and threat detection.',
    requirements: ['5+ years cybersecurity experience', 'Cryptography expertise', 'Network security', 'IoT/embedded systems security']
  },
  {
    id: '3',
    title: 'Cybersecurity Intern',
    type: 'Intern',
    level: 'Early Career',
    location: 'Remote / San Francisco, CA',
    country: 'United States',
    description: 'Learn and contribute to cybersecurity research for neural interfaces, including vulnerability assessment and security testing.',
    requirements: ['Cybersecurity coursework', 'Basic networking knowledge', 'Programming skills (Python/C++)', 'Security certifications a plus']
  },
  {
    id: '4',
    title: 'Software/DevOps Infrastructure Intern',
    type: 'Intern',
    level: 'Early Career',
    location: 'Remote / London, UK',
    country: 'United Kingdom',
    description: 'Build and maintain infrastructure for neural interface testing environments and deployment pipelines.',
    requirements: ['Docker/Kubernetes experience', 'Cloud platforms (AWS/GCP)', 'CI/CD pipelines', 'Linux administration']
  },
  {
    id: '5',
    title: 'Neuroscientist',
    type: 'Full-Time',
    level: 'Junior',
    location: 'Boston, MA',
    country: 'United States',
    description: 'Research neural oscillation patterns and contribute to the scientific understanding of brain-machine interface security.',
    requirements: ['PhD in Neuroscience/related field', 'Neural signal analysis', 'Research publication record', 'BCI experience preferred']
  },
  {
    id: '6',
    title: 'Neuroengineer',
    type: 'Full-Time',
    level: 'Mid Level',
    location: 'Toronto, ON',
    country: 'Canada',
    description: 'Design and optimize neural interface hardware and software systems with focus on security and reliability.',
    requirements: ['MS/PhD in Biomedical/Electrical Engineering', 'Neural interface design', 'Signal processing', '3+ years BCI experience']
  },
  {
    id: '7',
    title: 'Hardware Interface Advisor',
    type: 'Part-Time',
    level: 'Mid Level',
    location: 'Remote',
    country: 'Global',
    description: 'Provide strategic guidance on hardware security for neural interfaces and review system architectures.',
    requirements: ['10+ years hardware security', 'Neural interface expertise', 'Consulting experience', 'Security architecture design']
  }
];

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
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-black/50 border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <Select value={countryFilter} onValueChange={setCountryFilter}>
            <SelectTrigger className="bg-black/50 border-gray-600 text-white">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-black border-gray-600">
              <SelectItem value="all" className="text-white hover:bg-gray-800">All Countries</SelectItem>
              {countries.map(country => (
                <SelectItem key={country} value={country} className="text-white hover:bg-gray-800">
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="bg-black/50 border-gray-600 text-white">
              <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent className="bg-black border-gray-600">
              <SelectItem value="all" className="text-white hover:bg-gray-800">All Types</SelectItem>
              <SelectItem value="Intern" className="text-white hover:bg-gray-800">Intern</SelectItem>
              <SelectItem value="Part-Time" className="text-white hover:bg-gray-800">Part-Time</SelectItem>
              <SelectItem value="Full-Time" className="text-white hover:bg-gray-800">Full-Time</SelectItem>
            </SelectContent>
          </Select>

          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="bg-black/50 border-gray-600 text-white">
              <SelectValue placeholder="Experience level" />
            </SelectTrigger>
            <SelectContent className="bg-black border-gray-600">
              <SelectItem value="all" className="text-white hover:bg-gray-800">All Levels</SelectItem>
              <SelectItem value="Early Career" className="text-white hover:bg-gray-800">Early Career</SelectItem>
              <SelectItem value="Junior" className="text-white hover:bg-gray-800">Junior</SelectItem>
              <SelectItem value="Mid Level" className="text-white hover:bg-gray-800">Mid Level</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-300">
        Showing {filteredJobs.length} of {jobs.length} positions
      </div>

      {/* Job Cards */}
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="bg-gradient-to-r from-purple-900/10 to-cyan-900/10 backdrop-blur-xl border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-white mb-2">{job.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        job.type === 'Intern' ? 'bg-blue-500/20 text-blue-400' :
                        job.type === 'Part-Time' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-purple-400">{job.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job.id)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white"
                >
                  Apply Now
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-4">
                {job.description}
              </CardDescription>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No positions match your current filters.</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default JobListings;
