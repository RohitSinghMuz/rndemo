import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import Fonts from "../../constants/Fonts";




export const getFont=(font:string,size:number,color:string)=>{
    return{fontFamily:font,fontsize:Fonts.n(size),color:color};
};


const FontStyles=StyleSheet.create({
    Inter_MBlack3333:getFont(Fonts.Inter,12,Colors.black),
})

export default FontStyles