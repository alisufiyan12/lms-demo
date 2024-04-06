"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,

  FcCamcorderPro,
  FcCurrencyExchange,
  FcClapperboard,
  FcLightAtTheEndOfTunnel,
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Photography/Videography": FcCamcorderPro,
  "Graphic Designing": FcClapperboard,
  "Computer Science": FcMultipleDevices,
  "Digital Marketing": FcSalesPerformance,
  "Ecommerce": FcCurrencyExchange,
  "Social Media Management": FcFilmReel,
  "Digital Agency": FcLightAtTheEndOfTunnel,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}