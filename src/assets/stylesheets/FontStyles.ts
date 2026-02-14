import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";




export const getFont=(font:string,size:number,color:string)=>{
    return{fontFamily:font,fontsize:font.nn(size),color:color};
};


const FontStyles=StyleSheet.create({
    Inter_MBlack3333:getFont(Fonts.InteBlack_M,12,Colors.black),
})

export default FontStyles