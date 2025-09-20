import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                Y94
              </div>
              <span className="font-bold text-xl">연세대 94학번 동기회</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              1994년 연세대학교에 입학한 동기들의 소중한 인연을 이어가는 공간입니다.
              함께 만들어온 추억과 앞으로 만들어갈 새로운 이야기를 나누어요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@yonsei94.com" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">동기회 소개</a></li>
              <li><a href="/news" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">공지사항</a></li>
              <li><a href="/events" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">행사 안내</a></li>
              <li><a href="/gallery" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">사진 갤러리</a></li>
              <li><a href="/members" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">회원 명부</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@yonsei94.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>02-123-4567</span>
              </div>
              <div>
                <p>서울특별시 서대문구 연세로 50</p>
                <p>연세대학교 동문회관</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2024 연세대학교 94학번 동기회. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;