import { useState } from "react";

// Simplified and working version
export function useMenuToggle() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const openMenu = () => setIsOpen(true);
  
    return { isOpen, toggleMenu, closeMenu, openMenu };
  }