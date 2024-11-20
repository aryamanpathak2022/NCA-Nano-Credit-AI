'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
<<<<<<< HEAD
import { ArrowLeft, ArrowRight, Share2, MapPin } from 'lucide-react';
import axios from 'axios'; // Import axios
=======
import { ArrowLeft, ArrowRight, Share2, MapPin, Link } from 'lucide-react';
import axios from 'axios'; // Import axios
// import Link from 'next/link';
import { useRouter } from 'next/navigation';

>>>>>>> 035c3d1530a51335dac8ba705e645eda19f92043

const formPages = [
  'Basic Info',
  'Welfare Schemes',
  'Enterprise Details',
  'Survey Links',
  'Government IDs'
]

export function ApplicationFormComponent() {
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
<<<<<<< HEAD
=======
  const router = useRouter();
>>>>>>> 035c3d1530a51335dac8ba705e645eda19f92043
  const [formData, setFormData] = useState({
    vendorName: '',
    businessName: '',
    businessTitle: '',
    location: '',
    welfareScheme: '',
    familyMembers: '',
    shopLocation: '',
    enterpriseImages: [],
    governmentIds: [{ type: '', number: '' }]
  })

  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name, value) => {
    // setFormData({ ...formData, [name]: value })
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleLocationDetect = () => {
    // In a real application, you would use the Geolocation API here
    setFormData({ ...formData, location: 'Detected Location' })
  }

  const handleFileUpload = (e) => {
    if (e.target.files) {
      setFormData(
        { ...formData, enterpriseImages: [...formData.enterpriseImages, ...e.target.files] }
      )
    }
  }

  const handleAddGovernmentId = () => {
    setFormData({
      ...formData,
      governmentIds: [...formData.governmentIds, { type: '', number: '' }]
    })
  }

  const handleGovernmentIdChange = (index, field, value) => {
    const newGovernmentIds = [...formData.governmentIds]
    newGovernmentIds[index][field] = value
    setFormData({ ...formData, governmentIds: newGovernmentIds })
  }

  const handleNext = () => {
    if (currentPage < formPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }


  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setApiResponse(data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    } finally {
<<<<<<< HEAD
=======
      router.push('/dashboard');
>>>>>>> 035c3d1530a51335dac8ba705e645eda19f92043
      setLoading(false);
    }
  };

  const renderFormPage = () => {
    switch (currentPage) {
      case 0:
        return (
          (<div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vendorName">Vendor Name</Label>
              <Input
                id="vendorName"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-700 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-700 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessTitle">Business Title</Label>
              <Input
                id="businessTitle"
                name="businessTitle"
                value={formData.businessTitle}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-700 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex space-x-2">
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="flex-grow bg-slate-800/50 border-slate-700 text-white" />
                <Button
                  onClick={handleLocationDetect}
                  variant="outline"
                  className="bg-slate-800/50 border-slate-700 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Locate Me
                </Button>
              </div>
            </div>
          </div>)
        );
      case 1:
        return (
          (<div className="space-y-4">
            <div className="space-y-2">
              {/* <Label htmlFor="welfareScheme">Welfare Scheme</Label>
              <Select onValueChange={(value) => handleSelectChange('welfareScheme', value)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="Select a welfare scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheme1">Scheme 1</SelectItem>
                  <SelectItem value="scheme2">Scheme 2</SelectItem>
                  <SelectItem value="scheme3">Scheme 3</SelectItem>
                </SelectContent>
              </Select> */}
              <label htmlFor="welfare-scheme">Select Welfare Scheme:</label>
                <Select value={formData.welfareScheme} onValueChange={(value) => handleSelectChange('welfareScheme', value)}>
                    <SelectTrigger id="welfare-scheme">
                        <SelectValue placeholder="Select a Scheme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="scheme1">Scheme 1</SelectItem>
                        <SelectItem value="scheme2">Scheme 2</SelectItem>
                        <SelectItem value="scheme3">Scheme 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="familyMembers">Number of Family Members</Label>
              <Input
                id="familyMembers"
                name="familyMembers"
                type="number"
                value={formData.familyMembers}
                onChange={handleInputChange}
                
                className="bg-slate-800/50 border-slate-700 text-white" />
            </div>
          </div>)
        );
      case 2:
        return (
          (<div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="enterpriseImages">Upload Images or Videos of Your Enterprise</Label>

              <div className="flex items-center space-x-2">
              <Input
                id="enterpriseImages"
                type="file"
                multiple
                accept="image/,video/"
                onChange={handleFileUpload}
                className="bg-slate-800/50 border-slate-700 text-white" />
                </div>


            </div>
            <div className="space-y-2">
              <Label htmlFor="shopLocation">Location of Shops</Label>
              <Textarea
                id="shopLocation"
                name="shopLocation"
                type="string"
                value={formData.shopLocation}
                onChange={handleInputChange}
                placeholder="Enter the locations of your shops"
                className="bg-slate-800/50 border-slate-700 text-white" />
            </div>
          </div>)
        );
      case 3:
        return (
          (<div className="space-y-4">
            <p className="text-white">Share this survey link with your friends, family, neighbors, and suppliers:</p>
            <div
              className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded p-2">
              <Input
                value={'http://localhost:8501'}
                readOnly
                className="bg-transparent border-none text-white" />
              <Button variant="outline1" onClick={() => window.open("http://localhost:8501", "_blank")} className="bg-slate-700 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div
              className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded p-2">
              <Input
                value={'http://localhost:8501'}
                readOnly
                className="bg-transparent border-none text-white" />
              <Button variant="outline2" onClick={() => window.open("http://localhost:8502", "_blank")} className="bg-slate-700 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

          </div>)
        );
      case 4:
        return (
          (<div className="space-y-4">
            {formData.governmentIds.map((id, index) => (
              <div key={index} className="space-y-2">
                <Select value={formData.governmentIds[0].type} onValueChange={(value) => handleGovernmentIdChange(index, 'type', value)}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="voter">Voter ID</SelectItem>
                    <SelectItem value="samgra">Samgra ID</SelectItem>
                    <SelectItem value="aadhaar">Aadhaar</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="ID Number"
                  value={id.number}
                  onChange={(e) => handleGovernmentIdChange(index, 'number', e.target.value)}
                  className="bg-slate-800/50 border-slate-700 text-white" />
              </div>
            ))}
            <Button
              onClick={handleAddGovernmentId}
              variant="outline"
              className="bg-slate-800/50 border-slate-700 text-white">
              + Add Another ID
            </Button>
          </div>)
        );
      default:
        return null
    }
  }

  return (
    (<div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-indigo-950 p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] text-violet-500/10"
          viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="currentColor" />
        </svg>
        <svg
          className="absolute w-[800px] h-[800px] -bottom-[400px] -right-[400px] text-indigo-500/10"
          viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="currentColor" />
        </svg>
      </div>
      {/* Animated floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400/20 rounded-full animate-float1"></div>
        <div
          className="absolute top-3/4 left-1/2 w-3 h-3 bg-violet-400/30 rounded-full animate-float2"></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-indigo-400/20 rounded-full animate-float3"></div>
      </div>
      <Card
        className="w-full max-w-lg border-slate-800 bg-slate-900/50 backdrop-blur-sm text-white relative z-10">
        <CardHeader>
          <CardTitle>{formPages[currentPage]}</CardTitle>
          <CardDescription className="text-slate-400">
            Step {currentPage + 1} of {formPages.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderFormPage()}
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button
            onClick={handleBack}
            disabled={currentPage === 0}
            variant="outline"
            className="bg-slate-800/50 border-slate-700 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentPage === formPages.length - 1}
            className="bg-violet-600 hover:bg-violet-700 text-white">
            {currentPage === formPages.length - 1 ? 'Submit' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter> */}
        <CardFooter className="flex justify-between">
        <Button onClick={handleBack} disabled={currentPage === 0}>
          Back
        </Button>
        {currentPage === formPages.length - 1 ? (
<<<<<<< HEAD
          <Button onClick={handleSubmit}>
            Submit
          </Button>
=======
          
          <Button onClick={handleSubmit}>
            Submit
          </Button>
          
          
>>>>>>> 035c3d1530a51335dac8ba705e645eda19f92043
        ) : (
          <Button onClick={handleNext}>
            Next
          </Button>
        )}
      </CardFooter>
      </Card>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 4s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 5s ease-in-out infinite;
        }
      `}</style>
    </div>)
  );
}