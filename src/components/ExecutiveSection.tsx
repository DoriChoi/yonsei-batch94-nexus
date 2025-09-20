import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const ExecutiveSection = () => {
  const executives = [
    {
      id: 1,
      name: "김동기",
      role: "회장",
      dept: "경영학과",
      company: "삼성전자",
      title: "상무",
      avatar: "/placeholder.svg",
      intro: "동기들과의 소중한 인연을 이어가기 위해 최선을 다하겠습니다.",
      email: "president@yonsei94.com",
      phone: "010-1234-5678"
    },
    {
      id: 2,
      name: "이부회",
      role: "부회장",
      dept: "법학과",
      company: "법무법인 정성",
      title: "변호사",
      avatar: "/placeholder.svg",
      intro: "동기회 발전을 위해 회장님을 적극 보좌하겠습니다.",
      email: "vice@yonsei94.com",
      phone: "010-2345-6789"
    },
    {
      id: 3,
      name: "박총무",
      role: "총무",
      dept: "경제학과",
      company: "현대자동차",
      title: "차장",
      avatar: "/placeholder.svg",
      intro: "체계적인 동기회 운영을 위해 노력하겠습니다.",
      email: "secretary@yonsei94.com",
      phone: "010-3456-7890"
    },
    {
      id: 4,
      name: "정회계",
      role: "회계",
      dept: "회계학과",
      company: "삼일회계법인",
      title: "공인회계사",
      avatar: "/placeholder.svg",
      intro: "투명한 재정 관리로 신뢰받는 동기회를 만들겠습니다.",
      email: "treasurer@yonsei94.com",
      phone: "010-4567-8901"
    },
    {
      id: 5,
      name: "최기획",
      role: "기획부장",
      dept: "정치외교학과",
      company: "외교부",
      title: "사무관",
      avatar: "/placeholder.svg",
      intro: "다양하고 의미있는 행사 기획으로 동기들을 만나뵙겠습니다.",
      email: "planning@yonsei94.com",
      phone: "010-5678-9012"
    },
    {
      id: 6,
      name: "한홍보",
      role: "홍보부장",
      dept: "신문방송학과",
      company: "KBS",
      title: "PD",
      avatar: "/placeholder.svg",
      intro: "동기회 소식을 발빠르게 전달하겠습니다.",
      email: "pr@yonsei94.com",
      phone: "010-6789-0123"
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "회장":
        return "bg-primary text-primary-foreground";
      case "부회장":
        return "bg-secondary text-secondary-foreground";
      case "회계":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">집행부 소개</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            동기회를 이끌어가는 집행부를 소개합니다
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {executives.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-bold text-xl">{member.name}</h3>
                      <Badge className={`${getRoleColor(member.role)} mt-1`}>
                        {member.role}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{member.dept}</p>
                      <p className="font-medium">{member.company}</p>
                      <p>{member.title}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-center italic text-muted-foreground px-2">
                    "{member.intro}"
                  </p>
                  
                  <div className="space-y-2 pt-3 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSection;