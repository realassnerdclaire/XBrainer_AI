
import React, { useState } from 'react';
import { ArrowLeft, Upload, User, Phone, MapPin, Mail, FileText, Send, Sparkles, Clock, DollarSign, Building, Users } from 'lucide-react';
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
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    resume: null as File | null,
    coverLetter: null as File | null,
    whyGoodFit: '',
    excitingProject: ''
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
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleBackToJobDescription = () => {
    setShowApplicationForm(false);
  };

  if (!showApplicationForm) {
    return (
      <div className="space-y-8 relative">
        {/* Header */}
        <div className="relative z-10">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/50 rounded-3xl p-8 border border-cyan-300/50 shadow-2xl shadow-cyan-200/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-transparent mb-4">
                  {job.title}
                </h1>
                <div className="flex items-center gap-4 text-cyan-700 text-lg">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Remote (San Francisco-based company)
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    15–20 hours/week
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

        {/* Job Description */}
        <Card className="backdrop-blur-xl bg-white border border-cyan-300/50 rounded-3xl shadow-2xl shadow-cyan-200/20">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-cyan-800 flex items-center">
              <Building className="h-8 w-8 mr-3 text-cyan-600" />
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <p className="text-cyan-700 text-lg leading-relaxed mb-8">
              XBrainer AI is a stealth-stage neurosecurity startup developing secure communication protocols for brain-machine interfaces. 
              Our mission is to build foundational infrastructure that ensures signal integrity, identity authentication, and confidentiality 
              in neural data transmission. We're assembling a small, high-caliber team of researchers and engineers working at the intersection 
              of neuroscience, AI, and cybersecurity.
            </p>

            <div className="space-y-8">
              <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 mr-3 text-cyan-600" />
                  Role Overview
                </h3>
                <p className="text-cyan-700 leading-relaxed">
                  We're seeking a Machine Learning / Signal Processing Intern to support our R&D efforts in preprocessing and analyzing 
                  EEG or related neural interface data. You will help implement pipelines for artifact removal, anomaly detection, and 
                  signal classification. This is a hands-on role ideal for someone with strong applied ML skills and an interest in neurotechnology.
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">Responsibilities</h3>
                <ul className="text-cyan-700 space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    Preprocess EEG or neurodata streams (e.g., filtering, ICA, normalization)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    Implement anomaly detection and signal segmentation pipelines
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    Perform feature extraction from multichannel time-series data
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    Evaluate model performance on simulated or recorded neural signals
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                    Document technical findings and assist in shaping internal research tools
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">Preferred Skills</h3>
                <ul className="text-cyan-700 space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    Python (required), plus experience with NumPy, SciPy, and pandas
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    ML frameworks: PyTorch or TensorFlow
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    Signal processing: filtering, ICA, spike sorting
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    Familiarity with time-series modeling or anomaly detection
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span><strong>Bonus:</strong> experience with BCI datasets (e.g., OpenBCI, PhysioNet)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 border border-cyan-300/40 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">What We Offer</h3>
                <ul className="text-cyan-700 space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    Flexible remote schedule
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    Direct mentorship from the founder and advisors
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    Ability to work on a technically challenging, high-impact problem
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    Opportunity for conversion to a full-time, paid role with equity as the company raises external funding
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-200/40 to-orange-200/40 rounded-2xl p-6 border border-amber-300/60 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-6 w-6 text-amber-700" />
                  <span className="text-lg font-bold text-amber-800">Compensation</span>
                </div>
                <p className="text-amber-800 font-semibold">Unpaid; potential for full-time paid role with salary + equity upon funding</p>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <Button
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-500 text-white font-bold px-12 py-4 rounded-2xl shadow-xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-lg"
              >
                <Send className="h-5 w-5 mr-3 animate-pulse" />
                Apply for This Position
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <div className="flex gap-3">
              <Button
                onClick={handleBackToJobDescription}
                variant="outline"
                className="bg-white/50 border-cyan-300/60 text-cyan-700 hover:bg-cyan-100/50 hover:border-cyan-400/70 rounded-2xl px-6 py-3 shadow-lg backdrop-blur-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Description
              </Button>
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

            {/* Additional Questions */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-800 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Additional Questions
              </h3>
              
              <div className="space-y-4">
                <Label htmlFor="whyGoodFit" className="text-cyan-800 font-semibold">Why do you think you are a good fit? *</Label>
                <Textarea
                  id="whyGoodFit"
                  name="whyGoodFit"
                  value={formData.whyGoodFit}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-white/50 border-cyan-300/60 rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg resize-none"
                  placeholder="Tell us why you believe you're a great fit for this role..."
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="excitingProject" className="text-cyan-800 font-semibold">Tell me one exciting project you worked on *</Label>
                <Textarea
                  id="excitingProject"
                  name="excitingProject"
                  value={formData.excitingProject}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-white/50 border-cyan-300/60 rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm shadow-lg resize-none"
                  placeholder="Describe an exciting project you've worked on and what made it special..."
                />
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
