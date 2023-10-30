import { AiFillHome ,AiFillHeart } from "react-icons/ai"
import {FiFilm} from "react-icons/fi"
import{CgMusicNote} from "react-icons/cg"
import {ImNewspaper} from "react-icons/im"
import { MdLiveTv } from "react-icons/md"

export const categories = [
  {
    name :"Home" ,
     icon :<AiFillHome/>, 
    type:"home",
  },
  {
    name: "Trend",
    icon: <AiFillHeart/>,
    type: "trending",
  },
  {
    name:'Filmler' ,
    icon:<FiFilm/>,
    type:'category',
  },
  {
    name:'müzik',
    icon:<CgMusicNote/>,
    type:'category',
  },
  {
    name:'haberler',
    icon:<ImNewspaper/>,
    type:'category',

  },
  {
    name:'Canlı',
    icon:<MdLiveTv/>,
    type:'category',
  },

 
 
]