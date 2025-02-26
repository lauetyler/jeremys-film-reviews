import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hidden md:block">
              Jeremy&apos;s Film Reviews
            </Link>
            <Link href="/" className="text-2xl font-bold md:hidden">
              JFR
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary">
              Reviews
            </Link>
            <Link href="/lists" className="text-foreground hover:text-primary">
              Lists
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

