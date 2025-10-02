import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Twitter, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGooglePlusG } from 'react-icons/fa';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Home',
      hasDropdown: true,
      dropdownItems: [
        'Keyworld Academy',
        'Keyworld High School',
      ]
    },
    {
      label: 'About Us',
      hasDropdown: true,
      dropdownItems: []
    },
    {
      label: 'Academics',
      hasDropdown: true,
      dropdownItems: [
        'Preschool',
        'Elementary',
        'Middle school',
        'Graduate',
        'Single class alt',
        'Single class'
      ]
    },
    {
      label: 'School life',
      hasDropdown: true,
      dropdownItems: []
    },
    {
      label: 'News',
      hasDropdown: true,
      dropdownItems: []
    },
    {
      label: 'Calendar',
      hasDropdown: false
    },
    {
      label: 'Contact',
      hasDropdown: true,
      dropdownItems: []
    }
  ];

  const topLinks = [
    { label: 'Pupil', href: '#' },
    { label: 'Staff', href: '#' },
    { label: 'Parents', href: '#' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:bg-[#1DA1F2]' },
    { icon: Facebook, href: '#', color: 'hover:bg-[#1877F2]' },
    { icon: Youtube, href: '#', color: 'hover:bg-[#FF0000]' },
  ];

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-22">
            {/* Logo and Tagline - Left */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-20 h-20 rounded-sm flex items-center justify-center">
                  <img src="/primary-logo.png" alt="" />
                </div>
                <span className="text-gray-500 text-xl font-bold hidden sm:block uppercase">The Keyworld <br /> School</span>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="flex items-center h-full">
              {topLinks.map((link, index) => (
                <div className='h-full flex items-center border-l border-r border-gray-200 px-4 text-center flex items-center justify-center hidden md:flex'>

                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              <button className="ml-4 bg-primary hover:bg-primary-dark text-white px-6 py-1.5 rounded text-lg font-medium transition-all duration-200 hover:shadow-md cursor-pointer">
                ENROLL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => item.hasDropdown && handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200 py-2 font-medium text-[15px] cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && item.dropdownItems.length > 0 && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-sm overflow-hidden border border-gray-100"
                      >
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href="#"
                            className="block px-6 py-3 text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 border-b border-gray-50 last:border-b-0"
                          >
                            {dropItem}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-200 ${social.color} hover:scale-110`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-200 hover:bg-[#DB4437] hover:scale-110"
              >
                <FaGooglePlusG className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-20 rounded-sm flex items-center justify-center">
                      <img src="/primary-logo.png" alt="" />
                    </div>
                    <span className="text-gray-500 text-xl font-bold sm:block uppercase">The Keyworld <br /> School</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Nav Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2">
                      <button
                        onClick={() => item.hasDropdown && handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-primary transition-colors duration-200 py-3 font-medium"
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {item.hasDropdown && activeDropdown === item.label && item.dropdownItems.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 pt-2">
                              {item.dropdownItems.map((dropItem, dropIndex) => (
                                <a
                                  key={dropIndex}
                                  href="#"
                                  className="block py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                                >
                                  {dropItem}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-200 hover:bg-[#DB4437]"
                  >
                    <FaGooglePlusG className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;