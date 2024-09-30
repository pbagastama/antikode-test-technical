export interface IHeaderItem {
  id: number;
  name: string;
  href?: string;
  subItems?: IHeaderItem[];
}
