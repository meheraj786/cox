export type PricingType = "hourly" | "daily" | "package";
export type TransmissionType = "automatic" | "manual";
export type FuelType = "octane" | "petrol" | "diesel" | "hybrid" | "electric";

export interface VehicleCategory {
  id: string;
  name_bn: string;
  name_en: string;
  icon: string;
  description_bn: string;
  description_en: string;
  sub_text_bn?: string;
  sub_text_en?: string;
}

export interface Vendor {
  id: string;
  business_name: string;
  cox_location: string;
  rating_avg: number;
  total_reviews: number;
  is_approved: boolean;
  phone: string;
}

export interface VehiclePricing {
  id: string;
  vehicle_id: string;
  pricing_type: PricingType;
  price: number;
  min_hours?: number;
  max_hours?: number;
  is_active: boolean;
}

export interface Vehicle {
  id: string;
  vendor_id: string;
  vendor?: Vendor;
  category_id: string;
  title_bn: string;
  title_en: string;
  description_bn: string;
  description_en: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  seating_capacity: number;
  transmission: TransmissionType;
  fuel_type: FuelType;
  features: string[];
  images: string[];
  is_available: boolean;
  badge_bn?: string;
  badge_en?: string;
  rating_avg: number;
  total_reviews: number;
  pricing: VehiclePricing[];
  is_self_drive?: boolean;
}

export interface RoadTripPackage {
  id: string;
  title_bn: string;
  title_en: string;
  description_bn: string;
  description_en: string;
  distance_km: number;
  duration_bn: string;
  duration_en: string;
  starting_price: number;
  image: string;
  badge_bn: string;
  badge_en: string;
}
