import { useEffect, useState } from "react";
import { ButtonGroup } from "flowbite-react";
import { tabs } from "../Data";
import { getProperties } from "../services/propertyService";

function PropertySortTabs({}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
    useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });
  }, []);

  const [properties, setProperties] = useState([]);
 let sortedProperties  =  [...properties]
 
 sortedProperties.sort((a, b) => (a.price > b.price) ? 1 : -1)

 console.log(sortedProperties);
  return (
  
     <div className="flex justify-end border-b border-gray-200 mt-10 mb-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 px-4 text-sm font-medium transition-all ${
            activeTab === tab
              ? "text-[#0D6EFD] border-b-2 border-[#0D6EFD]"
              : "text-gray-500 hover:text-[#0D6EFD]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

  );
}

export default PropertySortTabs;