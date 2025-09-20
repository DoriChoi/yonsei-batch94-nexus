import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Calendar, Camera, MessageSquare, CreditCard, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/about", label: "동기회 소개", icon: Users },
    { href: "/news", label: "공지사항", icon: MessageSquare },
    { href: "/events", label: "행사", icon: Calendar },
    { href: "/gallery", label: "갤러리", icon: Camera },
    { href: "/members", label: "명부", icon: User },
    { href: "/dues", label: "회비납부", icon: CreditCard },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
            Y94
          </div>
          <span className="font-bold text-lg">연세대 94학번 동기회</span>
        </NavLink>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm">
            로그인
          </Button>
          <Button size="sm">
            회원가입
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground"
                    }`
                  }
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" size="sm">
                  로그인
                </Button>
                <Button className="w-full" size="sm">
                  회원가입
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;