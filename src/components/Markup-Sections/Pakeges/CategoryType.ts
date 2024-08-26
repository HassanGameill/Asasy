

export type TCategory = {
  id?: number; 
  heading: string; 
  heading2: string; 
  imgSrc: string | HTMLImageElement ;
  t: (key: string) => string; 
  
};
