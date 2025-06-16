export type componentProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export interface navJson {
  name: string;
  action: boolean;
  loader: boolean;
  isIndex: boolean;
}
