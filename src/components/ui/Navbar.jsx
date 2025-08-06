import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";
import AnchorLink from "./AnchorLink";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations

export default function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useMenuToggle();

  const navItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  /*   { title: "Services", url: "/services" }, */
    { title: "Our Work", url: "/ourwork" },
    { title: "Contact", url: "/contact" },
    { title: "Estimate", url: "/estimate" },
/*     { title: "Login", url: "/login" }, */
  ];

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        ease: "easeOut"
      }
    })
  };

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 right-0 bg-black z-50">
      {/* Main container */}
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-3 xl:py-4 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
            <small className="text-spanYellow ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light">
              Premier Fence
            </small>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoMdClose className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 hover:rotate-90" />
          ) : (
            <AiOutlineMenuFold className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 hover:rotate-180" />
          )}
        </button>

        {/* Mobile menu with animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="fixed inset-0 bg-white z-50 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="flex justify-end p-4 sm:p-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoMdClose
                    className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer text-black"
                    onClick={closeMenu}
                  />
                </motion.div>
              </div>
              <motion.ul className="flex flex-col items-center justify-center h-[80vh] space-y-4 sm:space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.url}
                    className="w-full text-center"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    <Link
                      to={item.url}
                      className="block py-2 px-4 text-lg sm:text-xl font-semibold text-black hover:underline hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="flex flex-col items-center space-y-3 sm:space-y-4 pb-8 sm:pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <AnchorLink>
                  <span className="flex items-center gap-2 text-black text-base sm:text-lg">
                    <IoCallOutline className="text-lg sm:text-xl" />
                    <a href="tel:612-730-7260" className="text-sm">612-730-7260</a>
                  </span>
                </AnchorLink>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnchorLink blackButton="bg-dimBlack text-sm sm:text-base text-sm">
                    Get a Free Estimate
                  </AnchorLink>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center justify-between w-full max-w-5xl ml-8 xl:ml-12">
          <div className="flex space-x-3 lg:space-x-5 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="text-white font-medium hover:underline py-2 px-1 text-sm sm:text-base lg:text-lg transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3 lg:space-x-4">
            <AnchorLink blackButton="bg-white hover:bg-utiliBlue text-sm sm:text-base lg:text-lg px-3 py-[0.3] sm:px-4 sm:py-[0.5rem]" GoToEstimate={"/estimate"}>
              <p className="text-utiliBlue font-lato hover:text-white font-bold text-[0.9rem]">Get a Free Estimate</p>
            </AnchorLink>
          </div>
        </nav>
      </div>
    </header>
  );
}