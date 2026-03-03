export interface LockerSize {
  id: string
  name: string
  description: string
  pricePerDay: number
  recommendedUse: string
  dimensions: string
}

export interface Leader {
  id: string
  name: string
  title: string
  bio: string
  image: string
}

export interface Rental {
  id: string
  lockerSize: LockerSize
  startDate: Date
  endDate: Date
  lockerNumber: string
  accessCode: string
  totalPrice: number
}

export const LOCKER_SIZES: LockerSize[] = [
  {
    id: 'small',
    name: 'Small',
    description: 'Perfect for personal items, documents, and small packages',
    pricePerDay: 5,
    recommendedUse: 'Personal items, valuables',
    dimensions: '12" × 12" × 24"',
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Great for luggage, bags, and medium-sized items',
    pricePerDay: 8,
    recommendedUse: 'Luggage, backpacks, sports equipment',
    dimensions: '18" × 18" × 24"',
  },
  {
    id: 'large',
    name: 'Large',
    description: 'Ideal for large suitcases and bulky items',
    pricePerDay: 12,
    recommendedUse: 'Large luggage, boxes, bulk items',
    dimensions: '24" × 24" × 36"',
  },
]

export const LEADERS: Leader[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Founder & CEO',
    bio: 'Technology innovator with 15+ years in logistics and storage solutions.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'CTO',
    bio: 'Software architect specializing in IoT and smart security systems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Emma Williams',
    title: 'Head of Operations',
    bio: 'Operations expert dedicated to seamless customer experience.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
]

export const SCHEDULE = [
  {
    day: 'Wednesday',
    time: '20:30',
    description: 'Evening Service',
  },
  {
    day: 'Sunday',
    time: '10:00',
    description: 'Morning Service',
  },
]

export function generateLockerNumber(): string {
  return `SL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

export function generateAccessCode(): string {
  return Math.random().toString(36).substr(2, 6).toUpperCase()
}

export function calculateRentalPrice(sizeId: string, days: number): number {
  const size = LOCKER_SIZES.find(s => s.id === sizeId)
  if (!size) return 0
  return size.pricePerDay * days
}
