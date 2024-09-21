import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-8">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">News</h3>
            <p>
              Stay updated with the latest news and events at Christ University.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Roommate Finder</h3>
            <p>Find your ideal roommate from the university community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Discussion Forums</h3>
            <p>Engage in discussions and connect with other students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Campus Map</h3>
            <p>Easily navigate the campus with our interactive map.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
