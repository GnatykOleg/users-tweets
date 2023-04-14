export interface IContainerProps {
  children: React.ReactNode;
}

export interface IPrimaryButtonProps {
  text: string;
  onClick?: () => void;
  inlineStyle?: { [key: string]: string };
}
