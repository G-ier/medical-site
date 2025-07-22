"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Logo } from "./logo"
import { Button } from "./button"

const headerMinimalVariants = cva(
  "w-full bg-white",
  {
    variants: {
      sticky: {
        true: "sticky top-0 z-50",
        false: "relative",
      },
      shadow: {
        none: "",
      },
    },
    defaultVariants: {
      sticky: false,
      shadow: "none",
    },
  }
)

interface MenuItem {
  label: string
  href: string
  target?: string
}

interface HeaderMinimalProps extends 
  React.ComponentProps<"header">,
  VariantProps<typeof headerMinimalVariants> {
  // Logo
  logoHref?: string
  
  // Navigation
  onMenuClick?: () => void
  showMenuButton?: boolean
  menuItems?: MenuItem[]
}

const HeaderMinimal = React.forwardRef<HTMLElement, HeaderMinimalProps>(
  ({ 
    className, 
    sticky, 
    shadow,
    logoHref = "/",
    onMenuClick,
    showMenuButton = true,
    menuItems = [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/contact" },
      { label: "Weight Loss", href: "/weight-loss-solutions" }
    ],
    ...props 
  }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const menuRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen)
      onMenuClick?.()
    }

    // Close menu when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current && 
          buttonRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setIsMenuOpen(false)
        }
      }

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isMenuOpen])

    // Close menu on escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsMenuOpen(false)
        }
      }

      if (isMenuOpen) {
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
      }
    }, [isMenuOpen])

    return (
      <header
        className={cn(headerMinimalVariants({ sticky, shadow, className }), "h-12")}
        ref={ref}
        {...props}
      >
        <div className="w-full h-full px-4 mx-auto max-w-[1860px]">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              {logoHref ? (
                <a 
                  href={logoHref}
                  className="inline-block transition-opacity hover:opacity-80"
                >
                  <Logo size="small" color="default" />
                </a>
              ) : (
                <Logo size="small" color="default" />
              )}
            </div>

            {/* Login Button and Menu Button - Right */}
            <div className="flex items-center gap-4">
              {/* Login Button */}
              <Button
                href="/auth/login"
                variant="outline"
                size="sm"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl px-6 py-2"
              >
                Log in
              </Button>

              {/* Menu Button */}
              {showMenuButton && (
                <div className="relative">
                <Button
                  ref={buttonRef}
                  variant="ghost"
                  size="icon"
                  onClick={handleMenuClick}
                  className="w-10 h-10"
                  aria-label="Open menu"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("w-6 h-6 transition-transform duration-200", {
                      "rotate-90": isMenuOpen
                    })}
                  >
                    <path 
                      d="M3 12H21M3 6H21M3 18H21" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>

                {/* Sidebar Menu */}
                <>
                  {/* Backdrop */}
                  <div
                    className={cn(
                      "fixed inset-0 bg-black transition-opacity duration-300 z-40",
                      isMenuOpen ? "bg-opacity-30" : "bg-opacity-0 pointer-events-none"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  />
                  
                  {/* Sidebar */}
                  <div
                    ref={menuRef}
                    className={cn(
                      "fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
                      isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                  >
                    {/* Close Button */}
                    <div className="flex justify-end p-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-11 h-11"
                        aria-label="Close menu"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>

                    {/* Menu Items */}
                    <div className="px-6 pb-6">
                      <nav className="space-y-2" role="menu" aria-orientation="vertical">
                        {menuItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            target={item.target}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors duration-200"
                            role="menuitem"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }
)
HeaderMinimal.displayName = "HeaderMinimal"

export { HeaderMinimal, headerMinimalVariants, type MenuItem }
export type { HeaderMinimalProps } 