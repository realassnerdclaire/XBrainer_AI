
import React, { useState } from 'react';
import { ArrowLeft, Upload, User, Phone, MapPin, Mail, FileText, Send, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface Job {
  id: string;
  title: string;
  type: 'Intern' | 'Part-Time';
  location: string;
  country: string;
  focus: string;
  skills: string;
  background: string;
}

interface JobApplicationFormProps {
  job: Job;
  onBack: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    resume: null as File | null,
    coverLetter: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setFormData(prev => ({ ...prev, [fileType]: file }));
      } else {
        alert('Please upload only PDF, DOC, or DOCX files.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div className="relative z-10">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/50 rounded-3xl p-8 border border-cyan-300/50 shadow-2xl shadow-cyan-200/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-transparent mb-4">
                Apply for {job.title}
              </h2>
              <div className="flex items-center gap-4 text-cyan-700">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {job.type}
                </span>
              </div>
            </div>
            <Button
              onClick={onBack}
              variant="outline"
              className="bg-white/50 border-cyan-300/60 text-cyan-700 hover:bg-cyan-100/50 hover:border-cyan-400/70 rounded-2xl px-6 py-3 shadow-lg backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <Card className="backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/50 border border-cyan-300/50 rounded-3xl shadow-2xl shadow-cyan-200/20">
        <CardHeader className="p-8">
          <CardTitle className="text-2xl font-bold text-cyan-800 flex items-center">
            <Sparkles className="h-6 w-6 mr-3 text-cyan-600 animate-pulse" />
            Application Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cyan-800 font-semibold flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-cyan-800 font-semibold flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-cyan-800 font-semibold flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-800 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Address Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-cyan-800 font-semibold">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                    placeholder="Enter your country"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-cyan-800 font-semibold">State/Province *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                    placeholder="Enter your state/province"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-cyan-800 font-semibold">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                    placeholder="Enter your city"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-cyan-800 font-semibold">ZIP/Postal Code *</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg"
                    placeholder="Enter your ZIP/postal code"
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-800 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="resume" className="text-cyan-800 font-semibold">Resume * (PDF, DOC, DOCX)</Label>
                  <div className="relative">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'resume')}
                      required
                      className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-cyan-200/50 file:text-cyan-800 file:font-semibold"
                    />
                  </div>
                  {formData.resume && (
                    <p className="text-sm text-cyan-700 bg-cyan-100/50 rounded-lg p-2">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="coverLetter" className="text-cyan-800 font-semibold">Cover Letter (PDF, DOC, DOCX)</Label>
                  <div className="relative">
                    <Input
                      id="coverLetter"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'coverLetter')}
                      className="bg-white/50 border-cyan-300/60 rounded-2xl h-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-cyan-200/50 file:text-cyan-800 file:font-semibold"
                    />
                  </div>
                  {formData.coverLetter && (
                    <p className="text-sm text-cyan-700 bg-cyan-100/50 rounded-lg p-2">
                      Selected: {formData.coverLetter.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-500 text-white font-bold px-12 py-4 rounded-2xl shadow-xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-lg"
              >
                <Send className="h-5 w-5 mr-3 animate-pulse" />
                Submit Application
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobApplicationForm;
