// components/property/PropertyDetail.tsx
import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div>
      {/* Title & Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>

      <div className="flex items-center gap-3 mt-2 text-gray-700">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          className="col-span-2 w-full h-80 object-cover rounded-lg"
        />
        {property.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab ? "border-b-2 border-black font-semibold" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "What we offer" && (
          <p className="text-gray-700">{property.description}</p>
        )}

        {activeTab === "Reviews" && (
          <p className="text-gray-700">
            Scroll down to see full reviews ↓
          </p>
        )}

        {activeTab === "About host" && (
          <p className="text-gray-700">{property.host}</p>
        )}
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">What this place offers</h2>

        <div className="flex flex-wrap gap-3">
          {property.category.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-2 rounded-lg text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
