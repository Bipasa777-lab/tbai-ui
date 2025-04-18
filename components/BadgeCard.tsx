import { Card, CardContent } from "@/components/ui/card";

interface BadgeCardProps {
  color: string;
  img: string;
  title: string;
  subtitle: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ color,img,title,subtitle }) => (
  <Card
    className="w-[252px] h-[269px] rounded-[30px]"
    style={{ backgroundColor: color }}
  >
    <CardContent className="flex flex-col items-center justify-center h-full p-6">
      <img className="w-[108px] h-[108px] mb-4" src={img} alt="Badge" />
      <span className="text-xl text-center leading-tight">
        {title}
        <br />
        {subtitle}
      </span>
    </CardContent>
  </Card>
);

export default BadgeCard;
