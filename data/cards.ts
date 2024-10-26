// backendData.js
import { ICONS } from "@/assets/images";

export const cards = [
  {
    id: 1,
    componentType: "DiscountedProgram",
    iconSource: ICONS.icon_level1,
    headerIcon: ICONS.icon_level,
    title: "program.global_eye_level_title",
    subtitle: "program.global_eye_level_subtitle",
    ageGroups: [
      { title: "age_group.kindergarten", minAge: 4, maxAge: 6 },
      { title: "age_group.elementary", minAge: 5, maxAge: 9 },
      { title: "age_group.upper_elementary", minAge: 9, maxAge: 12 },
    ],
    discountedPrice: "2,565,000 ₫",
    originalPrice: "2,700,000 ₫",
  },
  {
    id: 2,
    componentType: "CardComponent",
    iconSource: ICONS.icon_level2,
    headerIcon: ICONS.icon_u,
    title: "program.tudy_education_title",
    subtitle: "program.tudy_education_subtitle",
    ageGroups: [
      { title: "age_group.kindergarten", minAge: 4, maxAge: 6 },
      { title: "age_group.elementary", minAge: 6, maxAge: 12 },
    ],
    courses: [
      {
        title: "course.english_sports_title",
        description: "course.english_sports_description",
        price: "240,000 ₫",
      },
      {
        title: "course.english_creativity_title",
        description: "course.english_creativity_description",
        price: "240,000 ₫",
      },
    ],
  },
  {
    id: 3,
    componentType: "HomeworkAssistanceProgram",
    iconSource: ICONS.icon_level3,
    headerIcon: ICONS.icon_u,
    title: "program.homework_assistance_title",
    subtitle: "program.homework_assistance_subtitle",
    ageGroups: [
      { title: "age_group.kindergarten", minAge: 4, maxAge: 6 },
      { title: "age_group.elementary", minAge: 6, maxAge: 12 },
    ],
    description: "program.homework_assistance_description",
    price: "210,000 ₫",
  },
];
