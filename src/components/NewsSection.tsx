import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Pin } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "2024년 정기총회 및 송년회 안내",
      content: "올해 정기총회와 송년회를 12월 15일(일)에 진행합니다. 많은 참석 부탁드립니다.",
      category: "공지",
      date: "2024-11-20",
      pinned: true,
      excerpt: "장소: 서울 강남구 삼성동 코엑스 컨벤션센터, 시간: 오후 2시~6시",
    },
    {
      id: 2,
      title: "동기회 홈페이지 리뉴얼 완료",
      content: "새로운 홈페이지로 더욱 편리하게 동기들과 소통하세요.",
      category: "공지",
      date: "2024-11-15",
      pinned: false,
      excerpt: "모바일 최적화와 새로운 기능들이 추가되었습니다.",
    },
    {
      id: 3,
      title: "가을 등산 모임 후기",
      content: "지난 11월 10일 북한산 등산 모임에 30여 명이 참석했습니다.",
      category: "자유글",
      date: "2024-11-12",
      pinned: false,
      excerpt: "맑은 가을 날씨 속에서 즐거운 시간을 보냈습니다.",
    },
    {
      id: 4,
      title: "2024년 하반기 회비 납부 안내",
      content: "하반기 회비 납부 기간이 시작되었습니다.",
      category: "회비",
      date: "2024-11-01",
      pinned: false,
      excerpt: "온라인으로 간편하게 납부 가능합니다.",
    },
    {
      id: 5,
      title: "동기 자녀 장학금 수여식 개최",
      content: "우수한 성적의 동기 자녀들에게 장학금을 수여했습니다.",
      category: "공지",
      date: "2024-10-25",
      pinned: false,
      excerpt: "총 10명의 학생이 장학금을 받았습니다.",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "공지":
        return "bg-primary text-primary-foreground";
      case "회비":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">최근 소식</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            동기회의 최신 소식과 공지사항을 확인하세요
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      {item.pinned && (
                        <Pin className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {new Date(item.date).toLocaleDateString('ko-KR')}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  자세히 보기
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            모든 소식 보기
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;