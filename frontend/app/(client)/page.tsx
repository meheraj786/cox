"use client";

import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryList from "@/components/home/CategoryList";
import PopularVehicles from "@/components/home/PopularVehicles";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RoadTripPackages from "@/components/home/RoadTripPackages";
import VendorBanner from "@/components/home/VendorBanner";
import {
  mockCategories,
  mockVehicles,
  mockRoadTripPackages,
} from "@/data/mockData";

export default function HomePage() {
  const handleSearch = (params: {
    category: string;
    location: string;
    date: string;
    duration: string;
  }) => {
    window.location.href = `/cars?category=${params.category}&location=${params.location}&date=${params.date}&duration=${params.duration}`;
  };

  const handleSelectCategory = (categoryId: string) => {
    window.location.href = `/cars?category=${categoryId}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <main className="flex-grow">
        <HeroSection onSearch={handleSearch} />
        <CategoryList
          categories={mockCategories}
          onSelectCategory={handleSelectCategory}
        />
        <PopularVehicles vehicles={mockVehicles} />
        <WhyChooseUs />
        <RoadTripPackages packages={mockRoadTripPackages} />
        <VendorBanner />
      </main>

    </div>
  );
}
