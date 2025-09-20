import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Camera, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container relative py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* University Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <img
              src="/yonsei-symbol.png"
              srcSet="/yonsei-symbol.png 1x, /yonsei-symbol@2x.png 2x"
              sizes="(min-width: 768px) 24px, 24px"
              alt="연세대학교 심벌"
              className="h-6 w-6 rounded-full bg-white object-contain ring-1 ring-white/30 mr-3"
            />
            <span className="text-accent font-semibold text-sm">연세대학교</span>
            <span className="mx-2 text-white/60">•</span>
            <span className="text-white/90 text-sm">1994년 입학</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">함께 걸어온 30년,</span>
            <span className="block text-accent">앞으로의 30년</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            1994년 연세대학교에서 시작된 우리의 인연,<br />
            지금도 계속되고 있는 소중한 동기들과의 이야기
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
              동기회 가입하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8">
              최근 소식 보기
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">350+</div>
                <div className="text-sm text-white/80">등록 회원</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-white/80">연간 행사</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Camera className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm text-white/80">추억 사진</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <MessageSquare className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">30년</div>
                <div className="text-sm text-white/80">이어진 인연</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;