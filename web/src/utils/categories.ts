import {
  BedSingle as accommodation,
  Utensils as food,
  ScrollText as others,
  Wrench as services,
  CarTaxiFront as transport,
} from "lucide-react";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: food,
  },
  others: {
    name: "Outros",
    icon: others,
  },
  services: {
    name: "Serviços",
    icon: services,
  },
  transport: {
    name: "Transporte",
    icon: transport,
  },
  accommodation: {
    name: "Hospedagem",
    icon: accommodation,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
