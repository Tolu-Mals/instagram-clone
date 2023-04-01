import { ProfileWithStatusProps } from "@/components/general/ProfileWithStatus/types";

export interface Story {
  key: number;
  imgSrc: string;
  name: string;
}

export interface StoryProps extends ProfileWithStatusProps {
  name: string;
}