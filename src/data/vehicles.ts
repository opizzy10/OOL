import heroImage from "@/assets/hero-car.jpg";
import g63SideImage from "@/assets/g63-side.jpg";
import g63RearImage from "@/assets/g63-rear.jpg";
import g63InteriorImage from "@/assets/g63-interior.jpg";

import sClassImage from "@/assets/car-s-class.jpg";
import sClassSideImage from "@/assets/s-class-side.jpg";
import sClassRearImage from "@/assets/s-class-rear.jpg";
import sClassInteriorImage from "@/assets/s-class-interior.jpg";

import lx600Image from "@/assets/car-lx600.jpg";
import lx600SideImage from "@/assets/lx600-side.jpg";
import lx600RearImage from "@/assets/lx600-rear.jpg";
import lx600InteriorImage from "@/assets/lx600-interior.jpg";

import x7Image from "@/assets/car-x7.jpg";
import x7SideImage from "@/assets/x7-side.jpg";
import x7RearImage from "@/assets/x7-rear.jpg";
import x7InteriorImage from "@/assets/x7-interior.jpg";

import rangeRoverImage from "@/assets/range-rover-sport.jpg";
import cayenneImage from "@/assets/cayenne-turbo.jpg";
import escaladeImage from "@/assets/escalade.jpg";
import audiQ8Image from "@/assets/audi-q8.jpg";

export interface Vehicle {
  id: string;
  stockNumber: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  price: number;
  condition: 'New' | 'Certified' | 'Foreign Used' | 'Local Used';
  mileage: number;
  engine: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  exteriorColor: string;
  interiorColor: string;
  images: string[];
  featured: boolean;
  location: string;
  vin?: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    stockNumber: 'ABC-2024-001',
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'G63 AMG',
    variant: '4MATIC',
    price: 185000000,
    condition: 'Certified',
    mileage: 2500,
    engine: '4.0L V8 Biturbo',
    transmission: '9-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Obsidian Black',
    interiorColor: 'Nappa Leather Black/Red',
    images: [heroImage, g63SideImage, g63RearImage, g63InteriorImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'The ultimate luxury SUV. This 2024 G63 AMG combines unmatched off-road capability with opulent comfort and thunderous performance. Meticulously maintained with full service history.',
  },
  {
    id: '2',
    stockNumber: 'ABC-2023-045',
    year: 2023,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    variant: 'S580 4MATIC',
    price: 95000000,
    condition: 'Certified',
    mileage: 8500,
    engine: '4.0L V8 Biturbo',
    transmission: '9-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Selenite Grey',
    interiorColor: 'Nappa Leather Saddle Brown',
    images: [sClassImage, sClassSideImage, sClassRearImage, sClassInteriorImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'Flagship luxury redefined. The S580 represents the pinnacle of automotive excellence with cutting-edge technology, whisper-quiet cabin, and executive-level comfort.',
  },
  {
    id: '3',
    stockNumber: 'ABC-2024-012',
    year: 2024,
    make: 'Lexus',
    model: 'LX600',
    variant: 'Premium',
    price: 78000000,
    condition: 'New',
    mileage: 150,
    engine: '3.5L V6 Twin-Turbo',
    transmission: '10-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Sonic White Pearl',
    interiorColor: 'Semi-Aniline Leather Black',
    images: [lx600Image, lx600SideImage, lx600RearImage, lx600InteriorImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'Japanese luxury meets uncompromising capability. Brand new LX600 with legendary Lexus reliability, advanced safety features, and an interior that rivals the finest homes.',
  },
  {
    id: '4',
    stockNumber: 'ABC-2023-067',
    year: 2023,
    make: 'BMW',
    model: 'X7',
    variant: 'M50i',
    price: 72000000,
    condition: 'Certified',
    mileage: 12000,
    engine: '4.4L V8 Twin-Turbo',
    transmission: '8-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Phytonic Blue',
    interiorColor: 'Merino Leather Cognac',
    images: [x7Image, x7SideImage, x7RearImage, x7InteriorImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'Performance meets luxury in this commanding X7 M50i. With seating for seven and M-division performance, this flagship SUV delivers driving pleasure without compromise.',
  },
  {
    id: '5',
    stockNumber: 'ABC-2024-003',
    year: 2024,
    make: 'Toyota',
    model: 'Land Cruiser 300',
    variant: 'VX',
    price: 68000000,
    condition: 'New',
    mileage: 85,
    engine: '3.5L V6 Twin-Turbo',
    transmission: '10-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Attitude Black',
    interiorColor: 'Leather Beige',
    images: [heroImage],
    featured: false,
    location: 'Wuse 2, Abuja',
    description: 'The legendary Land Cruiser enters a new era. Refined yet rugged, this 300-series combines cutting-edge technology with the proven off-road prowess Nigeria demands.',
  },
  {
    id: '6',
    stockNumber: 'ABC-2022-089',
    year: 2022,
    make: 'BMW',
    model: 'M3 Competition',
    variant: 'xDrive',
    price: 58000000,
    condition: 'Certified',
    mileage: 15000,
    engine: '3.0L I6 Twin-Turbo',
    transmission: '8-Speed M Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'São Paulo Yellow',
    interiorColor: 'Merino Leather Black',
    images: [sClassImage],
    featured: false,
    location: 'Wuse 2, Abuja',
    description: 'Pure M performance in sedan form. The M3 Competition delivers track-ready performance with daily usability, wrapped in an aggressive yet refined package.',
  },
  {
    id: '7',
    stockNumber: 'ABC-2024-015',
    year: 2024,
    make: 'Range Rover',
    model: 'Sport',
    variant: 'HSE Dynamic',
    price: 82000000,
    condition: 'New',
    mileage: 50,
    engine: '3.0L I6 Mild Hybrid',
    transmission: '8-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Portofino Blue',
    interiorColor: 'Ebony/Pimento Leather',
    images: [rangeRoverImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'British luxury meets sports performance. The Range Rover Sport delivers commanding presence with dynamic agility and refined road manners.',
  },
  {
    id: '8',
    stockNumber: 'ABC-2023-078',
    year: 2023,
    make: 'Porsche',
    model: 'Cayenne',
    variant: 'Turbo GT',
    price: 145000000,
    condition: 'Certified',
    mileage: 5000,
    engine: '4.0L V8 Twin-Turbo',
    transmission: '8-Speed PDK',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Carrara White',
    interiorColor: 'Black/Bordeaux Red Leather',
    images: [cayenneImage],
    featured: true,
    location: 'Wuse 2, Abuja',
    description: 'The ultimate performance SUV. Cayenne Turbo GT combines racetrack capability with everyday luxury in an uncompromising package.',
  },
  {
    id: '9',
    stockNumber: 'ABC-2024-008',
    year: 2024,
    make: 'Cadillac',
    model: 'Escalade',
    variant: 'ESV Premium Luxury',
    price: 95000000,
    condition: 'New',
    mileage: 120,
    engine: '6.2L V8',
    transmission: '10-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Crystal White Tricoat',
    interiorColor: 'Jet Black Leather',
    images: [escaladeImage],
    featured: false,
    location: 'Wuse 2, Abuja',
    description: 'American luxury at its finest. Extended wheelbase Escalade offers unmatched space, comfort, and technology for those who demand the best.',
  },
  {
    id: '10',
    stockNumber: 'ABC-2023-091',
    year: 2023,
    make: 'Audi',
    model: 'Q8',
    variant: '55 TFSI Quattro',
    price: 67000000,
    condition: 'Certified',
    mileage: 9500,
    engine: '3.0L V6 TFSI',
    transmission: '8-Speed Tiptronic',
    drivetrain: 'AWD',
    fuelType: 'Petrol',
    exteriorColor: 'Navarra Blue',
    interiorColor: 'Okapi Brown Valcona Leather',
    images: [audiQ8Image],
    featured: false,
    location: 'Wuse 2, Abuja',
    description: 'German engineering excellence. The Q8 blends coupe styling with SUV versatility, featuring cutting-edge technology and sophisticated design.',
  },
];
