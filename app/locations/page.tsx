import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone } from 'lucide-react'

const LOCATIONS = [
  {
    id: '1',
    name: 'Downtown Station',
    address: '123 Main Street, Downtown',
    city: 'New York, NY',
    hours: 'Open 24/7',
    phone: '(555) 123-4567',
    lockers: '48',
  },
  {
    id: '2',
    name: 'Airport Terminal',
    address: '456 Airport Blvd',
    city: 'Los Angeles, CA',
    hours: 'Open 24/7',
    phone: '(555) 234-5678',
    lockers: '72',
  },
  {
    id: '3',
    name: 'Transit Hub',
    address: '789 Transit Way',
    city: 'Chicago, IL',
    hours: 'Open 24/7',
    phone: '(555) 345-6789',
    lockers: '56',
  },
  {
    id: '4',
    name: 'Shopping District',
    address: '321 Market Street',
    city: 'San Francisco, CA',
    hours: 'Open 24/7',
    phone: '(555) 456-7890',
    lockers: '40',
  },
  {
    id: '5',
    name: 'Beach Access',
    address: '654 Coastal Drive',
    city: 'Miami, FL',
    hours: 'Open 24/7',
    phone: '(555) 567-8901',
    lockers: '64',
  },
  {
    id: '6',
    name: 'Tech Campus',
    address: '987 Innovation Lane',
    city: 'Seattle, WA',
    hours: 'Open 24/7',
    phone: '(555) 678-9012',
    lockers: '52',
  },
]

export const metadata = {
  title: 'Locations - SmartLocker',
  description: 'Find SmartLocker locations near you',
}

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Find a Location Near You
              </h1>
              <p className="text-lg text-muted-foreground">
                SmartLocker is available at multiple convenient locations
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOCATIONS.map((location) => (
                <Card key={location.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {location.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {location.city}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href={`tel:${location.phone}`}
                          className="text-primary hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-3 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {location.lockers}
                        </span>
                        {' '}lockers available
                      </p>
                    </div>

                    <Button className="w-full mt-4">
                      Rent a Locker
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Service Areas
            </h2>
            <Card className="p-8 text-center h-96 bg-muted flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p className="text-lg text-muted-foreground">
                  Interactive map coming soon
                </p>
                <p className="text-sm text-muted-foreground">
                  Currently serving major metropolitan areas
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
