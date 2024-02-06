import { View, Text,ImageProps,Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomIcon from './CustomIcon'
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
  } from '../theme/theme';


interface CartItemProps {
    id:string;
    name:string;
    imagelink_square:ImageProps;
    special_ingredient:string;
    roasted:string;
    prices:any;
    type:string;
    incrementCartItemQuantityHandler:any;
    decrementCartItemQuantityHandler:any;
}


const CartItem : React.FC<CartItemProps> = ({
    id,
    name,
    imagelink_square,
    special_ingredient,
    roasted,
    prices,
    type,
    incrementCartItemQuantityHandler,
    decrementCartItemQuantityHandler
}) => {
  return (
    <View>
     {
        prices.length!=1 ? (
           <LinearGradient
           start={{x:0,y:0}}
           end={{x:1,y:1}}
           style={styles.CartItemLinearGradient}
           colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
            >
                <View style={styles.CartItemRow}>
                <Image source={imagelink_square} style={styles.CartItemImage} />
                <View style={styles.CartItemInfo}>
                <View>
                    <Text>{name}</Text>
                    <Text>{special_ingredient}</Text>
                </View>

                <View style={styles.cartItemRoastedContainer}>
                <Text style={styles.cartItemRoastedText}>
                    {roasted}
                </Text>
                </View>
                </View>
                </View>
            {
                prices.map((data:any,index:any)=>(
                    <View
                    key={index.toString()}
                    style={styles.CartItemSizeRowContainer}
                    >
                    </View>
                ))
            }
            

           </LinearGradient>
        ) : (
           <LinearGradient
           start={{x:0,y:0}}
           end={{x:1,y:1}}
           colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
           style={styles.CartItemSingleLinearGradient}
           >
            <View>
                <Image
                source={imagelink_square}
                style={styles.CartItemSingleImage}
                />
            </View>

            <View
            style={styles.CartItemSingleInfoContainer}
            >
            <View>
                <Text style={styles.CartItemTitle}>{name}</Text>
                <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
            </View>

            <View style={styles.CartItemSingleSizeValueContainer}>
                <View style={styles.SizeBox}>
                    <Text
                    style={[styles.SizeText,
                    {
                        fontSize : type=='Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16
                    }]}
                    >   
                    {prices[0].size}                    
                    </Text>
                </View>
                <Text style={styles.SizeCurrency}>
                    {prices[0].currency}
            <Text
            style={styles.SizePrice}
            >
                {prices[0].price}
            </Text>
            </Text>
            </View>

            <View style={styles.CartItemSingleSizeValueContainer}>
              <View style={styles.SizeBox}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.SizeCurrency}>
                {prices[0].currency}
                <Text style={styles.SizePrice}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.CartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  decrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={styles.CartItemQuantityContainer}>
                <Text style={styles.CartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.CartItemIcon}
                onPress={() => {
                  incrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
            </View>


            </View>
           </LinearGradient>
        )
     }
    </View>
  )
}

const styles = StyleSheet.create({
    CartItemLinearGradient:{
        flex:1,
        gap:SPACING.space_12,
        padding:SPACING.space_12,
        borderRadius:BORDERRADIUS.radius_25,
    },
    CartItemRow:{
        flexDirection:'row',
        gap:SPACING.space_12,
        flex:1
    },
    CartItemImage:{
        height:130,
        width:130,
        borderRadius:BORDERRADIUS.radius_20
    },
    CartItemInfo:{
        flex:1,
        paddingVertical:SPACING.space_4,
        justifyContent:'space-between'
    },
    cartItemRoastedContainer:{
        height:50,
        width:50*2 + SPACING.space_20,
        borderRadius:BORDERRADIUS.radius_15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primaryDarkGreyHex
    },
    cartItemRoastedText:{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_10,
        color:COLORS.primaryWhiteHex
    },
    CartItemSizeRowContainer:{
        flex:1,
        alignItems:'center',
        gap:SPACING.space_20
    },
    CartItemSingleLinearGradient:{
        flexDirection:'row',
        alignItems:'center',
        padding:SPACING.space_12,
        borderRadius:BORDERRADIUS.radius_25
    },
    CartItemSingleImage:{
        height:150,
        width:150,
        borderRadius:BORDERRADIUS.radius_20
    },
    CartItemSingleInfoContainer:{
        flex:1,
        alignSelf:'stretch',
        justifyContent:'space-around'
    },
    CartItemTitle:{
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_12,
        color:COLORS.secondaryLightGreyHex
    },
    CartItemSubtitle:{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_12,
        color:COLORS.secondaryLightGreyHex
    },
    CartItemSingleSizeValueContainer:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    SizeBox:{
        backgroundColor:COLORS.primaryBlackHex,
        height:40,
        width:100,
        borderRadius:BORDERRADIUS.radius_10,
        justifyContent:'center',
        alignItems:'center'
    },
    SizeText:{
        fontFamily:FONTFAMILY.poppins_medium,
        color:COLORS.secondaryLightGreyHex
    },
    SizeCurrency:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_18,
        color:COLORS.primaryOrangeHex
    },
    SizePrice:{
        color:COLORS.primaryWhiteHex
    },
    CartItemIcon:{
        backgroundColor:COLORS.primaryOrangeHex,
        padding:SPACING.space_12,
        borderRadius:BORDERRADIUS.radius_10
    },
    CartItemSingleQuantityContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    CartItemQuantityContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        width: 80,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 2,
        borderColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        paddingVertical: SPACING.space_4,
      },
      CartItemQuantityText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
      },

})

export default CartItem