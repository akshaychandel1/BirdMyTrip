import { useState } from "react";
import { holidayPackages } from "../data/holidayPackages";
import HolidaySearch from "../components/holiday/HolidaySearch";
import HolidayResults from "../components/holiday/HolidayResults";

export default function Holiday() {
  const [results, setResults] = useState(holidayPackages);

  const handleSearch = (filters) => {
    const filtered = holidayPackages.filter((pkg) => {
      const matchDestination = filters.destination
        ? pkg.destination
            .toLowerCase()
            .includes(filters.destination.toLowerCase())
        : true;

      const matchBudget = filters.budget
        ? pkg.budget <= filters.budget
        : true;

      return matchDestination && matchBudget;
    });

    setResults(filtered);
  };

  return (
    <>
      <HolidaySearch onSearch={handleSearch} />
      <HolidayResults packages={results} />
    </>
  );
}
