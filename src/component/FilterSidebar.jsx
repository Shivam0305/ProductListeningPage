import React, { useState } from "react";

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: {
      men: false,
      women: false,
      baby: false,
    },
  });
  const [expanded, setExpanded] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleExpand = (filter) => {
    setExpanded((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleCheckboxChange = (category, key) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  };

  const unselectAll = () => {
    setFilters({
      customizable: false,
      idealFor: { men: false, women: false, baby: false },
    });
  };

  return (
    <aside className="w-1/4 border-r pr-6 text-black">

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="checkbox"
          checked={filters.customizable}
          onChange={() =>
            setFilters((prev) => ({ ...prev, customizable: !prev.customizable }))
          }
          className="form-checkbox"
        />
        <span className="font-semibold">CUSTOMIZABLE</span>
      </div>

      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-semibold mb-2"
          onClick={() => toggleExpand("idealFor")}
        >
          <span>IDEAL FOR</span>
          <span>{expanded.idealFor ? "▲" : "▼"}</span>
        </div>
        {expanded.idealFor && (
          <div className="ml-4 space-y-2">
            <p className="text-sm text-gray-500 cursor-pointer underline" onClick={unselectAll}>
              Unselect all
            </p>
            {Object.keys(filters.idealFor).map((key) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.idealFor[key]}
                  onChange={() => handleCheckboxChange("idealFor", key)}
                  className="form-checkbox"
                />
                <span className="capitalize">{key.replace("baby", "Baby & Kids")}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {["occasion", "work", "fabric", "segment", "suitableFor", "rawMaterials", "pattern"].map(
        (filter) => (
          <div key={filter}>
            <div
              className="flex justify-between items-center cursor-pointer font-semibold mt-4"
              onClick={() => toggleExpand(filter)}
            >
              <span className="capitalize">{filter.replace(/([A-Z])/g, " $1").toUpperCase()}</span>
              <span>{expanded[filter] ? "▲" : "▼"}</span>
            </div>
            {expanded[filter] && <p className="text-sm text-gray-500 ml-4">All</p>}
          </div>
        )
      )}
    </aside>
  );
};

export default FilterSidebar;
