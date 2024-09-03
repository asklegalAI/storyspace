import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, DollarSign, Search } from 'lucide-react'

export default function Component() {
  const [location, setLocation] = useState('')
  const [spaceType, setSpaceType] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-cyan-400 font-['Orbitron']">StorySpace</div>
          <div className="hidden md:flex space-x-4">
            <Button variant="link" className="text-white hover:text-pink-400">Search</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Dashboard</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Equipment</Button>
            <Button variant="link" className="text-white hover:text-pink-400">About</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Contact</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400 animate-pulse">
              Discover Immersive Art Spaces
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with tech-enabled venues for your next interactive art experience
            </p>
            <Button className="bg-pink-600 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Find Your Space
            </Button>
          </div>
          <div className="absolute inset-0 z-0">
            {/* Three.js animation would go here */}
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Search for Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-gray-700 p-6 rounded-lg shadow-lg">
              <Select
                value={location}
                onValueChange={setLocation}
                placeholder="Select a city"
                icon={<MapPin className="h-4 w-4" />}
              >
                <option value="nyc">New York City</option>
                <option value="la">Los Angeles</option>
                <option value="sf">San Francisco</option>
                <option value="chicago">Chicago</option>
              </Select>
              <Select
                value={spaceType}
                onValueChange={setSpaceType}
                placeholder="All Types"
              >
                <option value="gallery">Gallery</option>
                <option value="studio">Studio</option>
                <option value="warehouse">Warehouse</option>
                <option value="theater">Theater</option>
              </Select>
              <Input
                type="number"
                placeholder="Minimum size (sq ft)"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Maximum price (per day)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                icon={<DollarSign className="h-4 w-4" />}
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                icon={<Calendar className="h-4 w-4" />}
              />
              <Button className="col-span-full bg-cyan-500 hover:bg-cyan-600">
                <Search className="mr-2 h-4 w-4" /> Search Spaces
              </Button>
            </div>
            <div className="mt-8 h-96 bg-gray-700 rounded-lg shadow-lg">
              {/* Leaflet map would go here */}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">User Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-400">Booking Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-800 rounded">
                    {/* Chart.js chart would go here */}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-400">Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>New inquiry for Neon Dreams Gallery</li>
                    <li>Question about Cyberpunk Studio equipment</li>
                    <li>Availability request for Holographic Haven</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-400">Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Booked Neon Dreams Gallery for 3 days</li>
                    <li>Rented VR Headset Pro for 1 week</li>
                    <li>Purchased Interactive Light Kit</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Equipment Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "VR Headset Pro",
                  rating: 4.5,
                  description: "High-end VR headset for immersive experiences",
                  price: "$50/day",
                  seller: "TechArtist42"
                },
                {
                  name: "Holographic Projector",
                  rating: 5.0,
                  description: "State-of-the-art holographic projection system",
                  price: "$200/day",
                  seller: "HoloMaster"
                },
                {
                  name: "Interactive Light Kit",
                  rating: 4.2,
                  description: "Programmable LED light kit for dynamic installations",
                  price: "$75/day",
                  seller: "LightWizard"
                }
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gray-700"></div>
                  <CardContent className="mt-4">
                    <h3 className="text-xl font-semibold text-pink-400">{item.name}</h3>
                    <div className="text-yellow-400 my-2">{"★".repeat(Math.floor(item.rating))} ({item.rating})</div>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <p className="font-bold">{item.price}</p>
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                      <span className="font-semibold">{item.seller}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="link" className="text-white hover:text-pink-400">About Us</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Terms of Service</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Privacy Policy</Button>
            <Button variant="link" className="text-white hover:text-pink-400">Contact</Button>
          </div>
          <p className="text-gray-400">&copy; 2023 StorySpace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
