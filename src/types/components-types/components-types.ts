import { IUser } from "../redux-types/redux-types";

export interface IContainerProps {
  children: React.ReactNode;
}

export interface IPrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  inlineStyles?: { [key: string]: string };
}

export interface ITweetsFilterProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ICardProps {
  user: IUser;
}
