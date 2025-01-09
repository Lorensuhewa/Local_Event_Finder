//import React from 'react';

export default function Footer() {
return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Newsletter Section */}
    <div className="bg-yellow-400 text-gray-900 py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
            <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-sm">
            Receive our weekly newsletter & updates with new events from your favourite organizers & venues.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <input
            type="email"
            placeholder="Enter your e-mail address"
            className="px-4 py-2 rounded-md text-gray-900 w-64"
            />
            <button className="bg-black text-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-gray-800">
            Subscribe
            </button>
        </div>
        </div>
    </div>

      {/* Footer Links Section */}
    <div className="py-8 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#faqs" className="hover:underline">FAQs</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
        </div>

          {/* Help */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#account" className="hover:underline">Account Support</a></li>
              <li><a href="#listing" className="hover:underline">Listing Events</a></li>
              <li><a href="#ticketing" className="hover:underline">Event Ticketing</a></li>
              <li><a href="#terms" className="hover:underline">Ticket Purchase Terms & Conditions</a></li>
            </ul>
        </div>

          {/* Categories */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#concerts" className="hover:underline">Concerts & Gigs</a></li>
              <li><a href="#festivals" className="hover:underline">Festivals & Lifestyle</a></li>
              <li><a href="#business" className="hover:underline">Business & Networking</a></li>
              <li><a href="#food" className="hover:underline">Food & Drinks</a></li>
              <li><a href="#arts" className="hover:underline">Performing Arts</a></li>
              <li><a href="#sports" className="hover:underline">Sports & Outdoors</a></li>
              <li><a href="#workshops" className="hover:underline">Workshops, Conferences & Classes</a></li>
            </ul>
        </div>

          {/* Social Media and App Links */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://youtube.com" className="hover:underline">YouTube</a></li>
            </ul>
            <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Download The App</h3>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="block mb-2">
                <img src="playstore.png" alt="Google Play" className="w-40" />
            </a>

            </div>
        </div>
        </div>
        </div>

      {/* Footer Bottom */}
    <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">&copy;2025 Eventfy. All rights reserved.</p>
    </div>
    </footer>
);
}
