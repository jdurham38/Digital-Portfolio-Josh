import React, { useState } from "react";

const userData = [
  {
    title: "NYC",
    content: "My future to NYC!",
    category: "personal life",
    date: "June 8, 2023",
    link: "blog-personal-nyc", // Add the link for the blog page
  },
  {
    title: "Apple's Announcement",
    content: "Apple's Latest Tech Announcement",
    category: "tech",
    date: "June 8, 2023",
    link: "https://example.com/apple-blog", // Add the link for the blog page
  },
  {
    title: "Tile 3",
    content: "Content for Tile 3",
    category: "outdoors",
    date: "June 5, 2023",
    link: "https://example.com/tile3-blog", // Add the link for the blog page
  },
  // Add more blog posts with title, content, category, date, and link properties
];

export default function Blog() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(userData);

  const handleTileClick = (tileId) => {
    setSelectedTile(tileId === selectedTile ? null : tileId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, selectedCategories);
  };

  const handleCategoryChange = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    filterData(searchTerm, newSelectedCategories);
  };

  const filterData = (searchTerm, categories) => {
    if (categories.length === 0 && searchTerm === "") {
      setFilteredData(userData);
    } else {
      const filteredResults = userData.filter((tile) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseCategory = tile.category.toLowerCase();

        return (
          (categories.length === 0 || categories.includes(lowerCaseCategory)) &&
          (tile.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.content.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.date.toLowerCase().includes(lowerCaseSearchTerm))
        );
      });

      setFilteredData(filteredResults);
    }
  };

  const categoryColors = {
    "personal life": "#FCE7F3",
    tech: "#FCEAC1",
    outdoors: "#CAF3FC",
  };

  return (
    <section className="bg-[#F4F3EE] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left flex justify-center items-center">
          Blog
        </h1>

        {/* Category checkboxes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(categoryColors).map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>

        {/* Blog tiles */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 dark:text-black">
          {filteredData.map((tile, index) => (
            <div
              key={index}
              className={`p-4 border rounded`}
              style={{
                backgroundColor: categoryColors[tile.category.toLowerCase()],
              }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleTileClick(index)}
              >
                <h3 className="text-lg font-semibold">{tile.title}</h3>
                <div className="text-sm text-gray-500">{tile.category}</div>
                <div className="text-xs text-gray-500">{tile.date}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    selectedTile === index ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" clipRule="evenodd" />
                </svg>
              </div>
              {selectedTile === index && (
                <>
                  <div className="mt-4">{tile.content}</div>
                  {tile.link && (
                    <a
                      href={tile.link.startsWith("http") ? tile.link : `/${tile.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 underline"
                    >
                      Read More
                    </a>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
