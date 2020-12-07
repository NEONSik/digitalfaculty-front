export interface LaboratoryInterface {
  titleOfLab: string;
  svgLeft: string;
  svgRight: string;
  arrayOfArticles: { id: number; description: string; image: string; }[];
}
