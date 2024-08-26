import Img01 from "../../../../public/images/bannar/b1.jpeg";
import Img02 from "../../../../public/images/bannar/b2.jpeg";
import Img03 from "../../../../public/images/bannar/b3.jpeg";
import Img04 from "../../../../public/images/bannar/b4.jpeg";
import Img05 from "../../../../public/images/bannar/b5.jpeg";
import Img06 from "../../../../public/images/bannar/b6.jpeg";



// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: any;
}

const BannerData: Data[] = [
  {
    imgSrc: Img01,
  },
  {
    imgSrc: Img02,
  },

  {
    imgSrc: Img03,
  },
  {
    imgSrc: Img04,
  },
  
  {
    imgSrc: Img05,
  },

  {
    imgSrc: Img06,
  },
  
];


export default BannerData;