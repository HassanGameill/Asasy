import Img01 from "../../../../public/images/packages/01.png";
import Img02 from "../../../../public/images/packages/02.png";
import Img03 from "../../../../public/images/packages/03.png";
import Img04 from "../../../../public/images/packages/04.png";
import Img05 from "../../../../public/images/packages/05.png";
import Img06 from "../../../../public/images/packages/06.png";



// IMAGES DATA FOR CAROUSEL
interface Data {
  id?: number
  imgSrc: any;
  title: string;
  subtitle: string;
  price: number;
}

const PakegeData: Data[] = [
  {
    id: 1,
    imgSrc: Img01,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving0",
    subtitle: "your ideal partner for achieving",
    price: 30

  },

  {
    id: 2,
    imgSrc: Img02,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving0",
    subtitle: "your ideal partner for achieving",
    price: 30

  },

  {
    id: 3,
    imgSrc: Img03,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving0",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 4,
    imgSrc: Img04,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 5,
    imgSrc: Img05,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving",
    subtitle: "your ideal partner for achieving ",
    price: 30

  },

  {
    id: 6,
    imgSrc: Img06,
    title: "Tea Pakege your ideal partner for achieving your ideal partner for achieving",
    subtitle: "your ideal partner for achieving",
    price: 30

  },
  
  
];


export default PakegeData;