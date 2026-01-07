import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-8 py-16 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Topics</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Find a Doctor</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy for EU Citizens</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Legal and Ethics Notice</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-500">
            © 2025 OrthoNexus. All rights reserved. Powered by <span className="text-gray-300 font-semibold">Prairie</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
