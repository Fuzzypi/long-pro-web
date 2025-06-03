// src/App.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Search,
  Bug,
  Home,
  Award,
  Users,
} from 'lucide-react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    // You could also reset form here if desired:
    // setFormData({ firstName:'', lastName:'', email:'', phone:'', area:'', service:'', message:'' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LONGPRO</h1>
                <p className="text-sm text-green-600 font-medium">
                  PEST CONTROL CO.
                </p>
                <p className="text-xs text-gray-600">"The Pest Detective"</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                HOME
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                SERVICES
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                REVIEWS
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                ABOUT US
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                (216) 294-BUGD
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              LONGPRO PEST CONTROL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              "Trusted Cleveland Bed Bug Exterminator – Effective Bed Bug &
              Heat Treatment in Cleveland, Ohio. Your Solution for Reliable Bed
              Bug Control!"
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-300">
              At LongPro Pest Control, we provide eco-friendly and affordable
              bed bug treatments in Cleveland, offering same- to next-day service
              and thorough inspections to protect your home. Trust us to deliver
              top-notch pest control that prioritizes your comfort and peace of
              mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (216) 294-BUGD (2843)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
              >
                OUR SERVICES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR SERVICES
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At LongPro Pest Control Co, we take pride in delivering top-notch
              bed bug services to the greater Cleveland area from Lorain to
              Eastlake. We know that every case is different, so we are committed
              to solving your problem in the most efficient, effective way
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Bug className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Bed Bug Extermination</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive bed bug elimination using proven heat treatment
                  and chemical methods. Same-day to next-day service
                  available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Bug className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Cockroach Extermination</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional cockroach elimination with long-lasting results. We
                  target breeding areas and provide prevention strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Bug className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Ants/Spiders etc.</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete treatment for ants, spiders, and other common
                  household pests. Eco-friendly solutions that are safe for your
                  family.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">WDI Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Wood Destroying Insect inspections for real estate transactions.
                  Thorough documentation and professional reporting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">VA Home Loan Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Specialized inspections for VA home loans. Fast turnaround
                  times to keep your home buying process on track.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-600">
                  Emergency Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  24/7 emergency pest control services. When you need immediate
                  help, we're here to respond quickly and effectively.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">BBB A+ Rating</h3>
              <p className="text-sm text-gray-600">Better Business Bureau</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900">5.0 Stars</h3>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">10+ Years</h3>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900">1000+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CUSTOMER REVIEWS
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
              <span className="text-xl font-bold ml-2">5.0</span>
              <span className="text-gray-400">• 10 Reviews</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MW</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Marquis Wise</h4>
                    <p className="text-gray-400 text-sm">2 reviews • 9 photos</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-gray-400 ml-2 text-sm">4 years ago</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "I have called LongPro a couple times for different treatments
                  and scares. All times, he has come promptly, and have handled my
                  bug problem with great professionalism. Gives good explanation
                  of treatment and purpose, and he also has very affordable
                  prices. I recommend LongPro for my and all extermination."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">SERVICE AREA</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto">
            LongPro Pest Control LLC has been providing excellent service to
            Cuyahoga County and the greater Cleveland area for over ten years.
            While most of our business is done within a 25-mile radius of
            Cleveland OH, we also go as far east as East Lake OH, as far west as
            Lorain, OH, and as far south as Brunswick, OH.
          </p>
          <p className="text-lg">
            If you need service outside this area, give us a call—perhaps we can
            help or at least point you in the right direction. No matter where
            you live, if you have any questions just call{' '}
            <strong>(216) 294-2843</strong>.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ABOUT US
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At LongPro Pest Control, we've provided top-notch pest control
              services to the greater Cleveland area for over ten years. Our
              experienced technicians are dedicated to bringing you reliable and
              affordable solutions that address both current and long-term pest
              control needs.
            </p>

            <p>
              Unlike many of our competitors, our overhead is kept low, so we
              can pass those savings on to our customers. We understand that
              the cost of pest control is a significant concern for most people,
              so we aim to keep our overhead down and our prices low. We also
              deliver highly discreet service, so your privacy is never
              compromised during our service visits.
            </p>

            <p>
              In addition to our unrivaled customer satisfaction and
              affordability, we are proud to have earned an{' '}
              <strong>A+ score from the Better Business Bureau (BBB)</strong>.
              This rating reflects our unwavering commitment to delivering
              quality results at affordable rates. We also strictly adhere to
              all state regulations regarding pest removal methods and
              techniques, ensuring the safest and most effective treatments
              available to eliminate any pests infiltrating your home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section (step 1) */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">CONTACT US</h2>
            <p className="text-gray-600 mt-2">
              Have a question or need a quote? Fill out the form below and we’ll
              get right back to you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  handleInputChange('firstName', e.target.value)
                }
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  handleInputChange('lastName', e.target.value)
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select onValueChange={(val) => handleInputChange('area', val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Service Area (e.g. Cuyahoga County)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cuyahoga">Cuyahoga County</SelectItem>
                  <SelectItem value="Lorain">Lorain County</SelectItem>
                  <SelectItem value="Eastlake">Eastlake, OH</SelectItem>
                  <SelectItem value="Brunswick">Brunswick, OH</SelectItem>
                  {/* …more areas as needed… */}
                </SelectContent>
              </Select>

              <Select
                onValueChange={(val) => handleInputChange('service', val)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Which Service?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BedBug">Bed Bug Extermination</SelectItem>
                  <SelectItem value="Cockroach">
                    Cockroach Extermination
                  </SelectItem>
                  <SelectItem value="AntSpider">Ants/Spiders</SelectItem>
                  <SelectItem value="WDI">WDI Inspection</SelectItem>
                  <SelectItem value="VAInspection">
                    VA Home Loan Inspection
                  </SelectItem>
                  {/* …etc.… */}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              placeholder="Your Message / Details"
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />

            <div className="text-center">
              <Button
                type="submit"
                className="bg-green-600 text-white hover:bg-green-700 px-6 py-3"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
