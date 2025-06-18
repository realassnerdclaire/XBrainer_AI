
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Briefcase, Zap, Globe, Sparkles, Brain, DollarSign } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import JobApplicationForm from './JobApplicationForm';
import { baseJobs } from '../../constants/data';

interface Job {
  id: string;
  title: string;
  type: 'Intern' | 'Part-Time';
  location: string;
  country: string;
  focus: string;
  skills: string;
  background: string;
  compensation?: string;
  commitment?: string;
  responsibilities?: string[];
}

// Create jobs with proper compensation based on location
const jobs: Job[] = baseJobs.flatMap((job, index) => {
  const sfJob: Job = {
    ...job,
    id: `sf-${job.title.replace(/\s+/g, '-').toLowerCase()}-${index}`,
    location: 'San Francisco (Remote)',
    country: 'United States',
    compensation: job.sfCompensation || undefined
  };
  
  const hydJob: Job = {
    ...job,
    id: `hyd-${job.title.replace(/\s+/g, '-').toLowerCase()}-${index}`,
    location: 'Hyderabad (Remote)',
    country: 'India',
    compensation: job.hydCompensation || undefined
  };
  
  return [sfJob, hydJob];
});

const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const countries = [...new Set(jobs.map(job => job.country))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.focus.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = countryFilter === 'all' || job.country === countryFilter;
      const matchesType = typeFilter === 'all' || job.type === typeFilter;

      return matchesSearch && matchesCountry && matchesType;
    });
  }, [searchTerm, countryFilter, typeFilter]);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  if (selectedJob) {
    return <JobApplicationForm job={selectedJob} onBack={handleBackToJobs} />;
  }

  return (
    <div className="space-y-8 relative">
      {/* Enhanced Futuristic Filters */}
      <div className="relative z-10">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/40 rounded-3xl p-8 border border-cyan-300/50 shadow-2xl shadow-cyan-200/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/10 via-blue-200/15 to-cyan-300/10 rounded-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-4 h-5 w-5 text-cyan-700 group-hover:text-cyan-600 transition-colors z-10" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-white/50 border-cyan-300/60 text-slate-800 placeholder-cyan-700/70 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 transition-all backdrop-blur-sm shadow-lg"
              />
            </div>

            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="bg-white/50 border-cyan-300/60 text-slate-800 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg">
                <Globe className="h-4 w-4 text-cyan-700 mr-2" />
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-cyan-300/60 backdrop-blur-xl">
                <SelectItem value="all" className="text-slate-800 hover:bg-cyan-100/50 focus:bg-cyan-100/50">All Locations</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country} className="text-slate-800 hover:bg-cyan-100/50 focus:bg-cyan-100/50">
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-white/50 border-cyan-300/60 text-slate-800 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg">
                <Clock className="h-4 w-4 text-cyan-700 mr-2" />
                <SelectValue placeholder="Position type" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 border-cyan-300/60 backdrop-blur-xl">
                <SelectItem value="all" className="text-slate-800 hover:bg-cyan-100/50 focus:bg-cyan-100/50">All Types</SelectItem>
                <SelectItem value="Intern" className="text-slate-800 hover:bg-cyan-100/50 focus:bg-cyan-100/50">Intern</SelectItem>
                <SelectItem value="Part-Time" className="text-slate-800 hover:bg-cyan-100/50 focus:bg-cyan-100/50">Part-Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="relative z-10 text-cyan-800 font-mono bg-gradient-to-r from-cyan-200/30 to-blue-200/30 backdrop-blur-lg rounded-2xl px-6 py-3 border border-cyan-300/50 shadow-lg shadow-cyan-200/20">
        <Sparkles className="inline h-4 w-4 mr-2 text-cyan-700 animate-pulse" />
        Positions Found: {filteredJobs.length} of {jobs.length}
      </div>

      {/* Enhanced Job Cards */}
      <div className="relative z-10 grid gap-8">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="group backdrop-blur-xl bg-white border border-cyan-300/50 hover:border-cyan-400/70 transition-all duration-500 rounded-3xl shadow-2xl shadow-cyan-200/20 hover:shadow-cyan-300/30 hover:scale-[1.02] relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/15 via-blue-200/20 to-cyan-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <CardHeader className="relative z-10 p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-6 flex-1">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:via-blue-500 group-hover:to-cyan-700 transition-all duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-200/40 to-blue-200/40 border border-cyan-300/60 backdrop-blur-sm shadow-lg">
                      <Clock className="h-4 w-4 text-cyan-700" />
                      <span className={`font-semibold ${
                        job.type === 'Intern' ? 'text-blue-700' : 'text-green-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-300/40 to-blue-300/40 border border-cyan-400/60 backdrop-blur-sm shadow-lg">
                      <MapPin className="h-4 w-4 text-cyan-700" />
                      <span className="text-cyan-800 font-semibold">{job.location}</span>
                    </div>
                    {job.compensation && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-slate-200/40 to-gray-200/40 border border-slate-300/60 backdrop-blur-sm shadow-lg">
                        <DollarSign className="h-4 w-4 text-slate-700" />
                        <span className="text-slate-800 font-semibold">{job.compensation}</span>
                      </div>
                    )}
                    {job.commitment && (
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-200/40 to-violet-200/40 border border-purple-300/60 backdrop-blur-sm shadow-lg">
                        <Clock className="h-4 w-4 text-purple-700" />
                        <span className="text-purple-800 font-semibold">{job.commitment}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job)}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ml-6"
                >
                  <Zap className="h-5 w-5 mr-2 animate-pulse" />
                  Apply Now
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 p-8 pt-0">
              <div className="grid gap-6">
                <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 backdrop-blur-sm shadow-lg">
                  <h4 className="text-lg font-bold text-cyan-800 mb-3 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-cyan-600" />
                    Focus:
                  </h4>
                  <p className="text-cyan-700 leading-relaxed">{job.focus}</p>
                </div>
                
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 backdrop-blur-sm shadow-lg">
                    <h4 className="text-lg font-bold text-cyan-800 mb-3 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-cyan-600" />
                      Responsibilities:
                    </h4>
                    <ul className="text-cyan-700 leading-relaxed space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 backdrop-blur-sm shadow-lg">
                  <h4 className="text-lg font-bold text-cyan-800 mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-cyan-600" />
                    Skills:
                  </h4>
                  <p className="text-cyan-700 leading-relaxed">{job.skills}</p>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 backdrop-blur-sm shadow-lg">
                  <h4 className="text-lg font-bold text-cyan-800 mb-3 flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-cyan-600" />
                    Ideal Background:
                  </h4>
                  <p className="text-cyan-700 leading-relaxed">{job.background}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="relative z-10 text-center py-20 backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/40 rounded-3xl border border-cyan-300/50 shadow-2xl shadow-cyan-200/20">
          <div className="space-y-6">
            <Sparkles className="h-20 w-20 text-cyan-600 mx-auto opacity-60 animate-pulse" />
            <p className="text-cyan-800 text-2xl font-semibold">No positions match your current filters.</p>
            <p className="text-cyan-700 text-lg">Adjust your search parameters to discover more opportunities.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
