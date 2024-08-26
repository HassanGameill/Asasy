import Img01 from "../../../../../public/images/bannar/b1.jpeg";
import Img02 from "../../../../../public/images/bannar/b2.jpeg";
import Img03 from "../../../../../public/images/bannar/b3.jpeg";
import Img04 from "../../../../../public/images/bannar/b4.jpeg";
import Img05 from "../../../../../public/images/bannar/b5.jpeg";
import Img06 from "../../../../../public/images/bannar/b6.jpeg";



// IMAGES DATA FOR CAROUSEL
interface Data {
  id?: number
  imgSrc: any;
  title: string;
  subtitle: string;
  price: number;
}

const HeroCardData: Data[] = [
  {
    id: 1,
    imgSrc: Img01,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving",
    price: 30

  },

  {
    id: 2,
    imgSrc: Img02,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving",
    price: 30

  },

  {
    id: 3,
    imgSrc: Img03,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 4,
    imgSrc: Img04,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 5,
    imgSrc: Img05,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 6,
    imgSrc: Img06,
    title: "Tea Pakege",
    subtitle: "your ideal partner for achieving",
    price: 30

  },
  
  
];


export default HeroCardData;