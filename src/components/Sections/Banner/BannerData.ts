import Img01 from "../../../../public/images/bannar/b1.jpeg";
import Img02 from "../../../../public/images/bannar/b2.jpeg";
import Img03 from "../../../../public/images/bannar/b3.jpeg";
import Img04 from "../../../../public/images/bannar/b4.jpeg";
import Img05 from "../../../../public/images/bannar/b5.jpeg";
import Img06 from "../../../../public/images/bannar/b6.jpeg";



// IMAGES DATA FOR CAROUSEL
interface Data {
  id?: number;
  imgSrc: any;
}

const BannerData: Data[] = [
  {
    id: 1,
    imgSrc: Img01,
  },
  {
    id: 2,
    imgSrc: Img02,
  },

  {
    id: 3,
    imgSrc: Img03,
  },
  {
    id: 4,
    imgSrc: Img04,
  },
  
  {
    id: 5,
    imgSrc: Img05,
  },

  {
    id: 6,
    imgSrc: Img06,
  },
  
];


export default BannerData;