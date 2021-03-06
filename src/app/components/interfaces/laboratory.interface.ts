export interface LaboratoryInterface {
  labId: number;
  titleOfLab: string;
  svgLeft: string;
  svgRight: string;
  subtitle: string;
  arrayOfArticles: { id: number; description: string; image: string; }[];
}
