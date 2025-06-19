
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Briefcase, Send, User, Mail, Phone, FileText, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Job } from '../../types';

interface JobApplicationFormProps {
  job: Job;
  onBack: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'for job:', job.id);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
    onBack();
  };

  return (
    <div className="space-y-8 relative">
      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="ghost"
        className="mb-6 text-cyan-700 hover:text-cyan-600 hover:bg-cyan-100/50 transition-all duration-300"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Jobs
      </Button>

      {/* Job Header */}
      <Card className="backdrop-blur-xl bg-white border border-cyan-300/50 rounded-3xl shadow-2xl shadow-cyan-200/20">
        <CardHeader className="p-8">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-transparent mb-6">
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
            {job.commitment && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-200/40 to-violet-200/40 border border-purple-300/60 backdrop-blur-sm shadow-lg">
                <Clock className="h-4 w-4 text-purple-700" />
                <span className="text-purple-800 font-semibold">{job.commitment}</span>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Job Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Job Information */}
        <Card className="backdrop-blur-xl bg-white border border-cyan-300/50 rounded-3xl shadow-2xl shadow-cyan-200/20">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-800 flex items-center">
              <Briefcase className="h-6 w-6 mr-2" />
              Position Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-cyan-700 mb-2">Focus Area</h4>
              <p className="text-gray-700">{job.focus}</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-700 mb-2">Required Skills</h4>
              <p className="text-gray-700">{job.skills}</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-700 mb-2">Background</h4>
              <p className="text-gray-700">{job.background}</p>
            </div>
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <h4 className="font-semibold text-cyan-700 mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="backdrop-blur-xl bg-white border border-cyan-300/50 rounded-3xl shadow-2xl shadow-cyan-200/20">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-800 flex items-center">
              <Send className="h-6 w-6 mr-2" />
              Apply Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-4 h-4 w-4 text-cyan-700" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="pl-10 bg-white/50 border-cyan-300/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 rounded-2xl h-12"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-4 h-4 w-4 text-cyan-700" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="pl-10 bg-white/50 border-cyan-300/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 rounded-2xl h-12"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-4 h-4 w-4 text-cyan-700" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/50 border-cyan-300/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 rounded-2xl h-12"
                />
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-4 h-4 w-4 text-cyan-700" />
                <textarea
                  name="coverLetter"
                  placeholder="Tell us why you're interested in this role..."
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pt-4 pb-3 pr-3 bg-white/50 border border-cyan-300/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 rounded-2xl resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-700 mb-2">
                  Resume (PDF or DOC)
                </label>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="bg-white/50 border-cyan-300/60 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 rounded-2xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="h-5 w-5 mr-2" />
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobApplicationForm;
