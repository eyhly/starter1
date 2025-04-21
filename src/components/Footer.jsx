import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">New Daihatsu Jatim</h2>
          <hr className="border-blue-300 mb-4 w-3/4" />
          <p className="text-gray-200">Penyedia Mobil Kualitas Terbaik dan Terpercaya</p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <hr className="border-blue-300 mb-4 w-3/4" />
          <ul className="space-y-2 bg-blue-800 p-4 rounded border border-blue-400">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" /> <span>+62 858 0494 5977</span>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-lg" /> <span>@Daihatsu_Jatim</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg" /> <span>Jl. Contoh No.123, Surabaya</span>
            </li>
          </ul>
        </div>

        {/* Map + Social */}
        <div className="flex flex-col items-center gap-4">
          <iframe
            className="w-full h-40 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19806.557887597457!2d0.0880648043339!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjUiTiAwwrAwMSc1OC43IkU!5e0!3m2!1sen!2sus!4v1632158459081!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-red-700 p-3 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-700 pt-4 px-4">
        Design & Develop by <span className="text-pink-500">Luminara Prismatica</span> | ©2025. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
