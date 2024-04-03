import React from "react";
import { View,Text, ScrollView ,StyleSheet,Image, TextInput,TouchableOpacity} from 'react-native';
import menu from './assets/menu.png'
import notification from './assets/notification.png'
import setting from './assets/setting.png'
import pictuer from './assets/profilepic.png'
import bigsale from './assets/mega sale.png'
import off from './assets/80%off.png'
import lamp from './assets/lampsale.png'
import sofa from './assets/sofa.png'
import arrow from './assets/arrow.png'
import chair from './assets/chair2.png'
import chair1 from './assets/chiar3.png'
import like from './assets/like.png'
import star from './assets/starr.png'
import shoopingbag from './assets/shopping-bag.png'
import winbackchair from './assets/winbackchair.png'
import chiar4 from './assets/chair4.png'
import chair5 from './assets/chair5.png'
import sofa1 from './assets/sofa1.jpg'
import tabel from './assets/roundtabel.png'
import dining from './assets/dinning.png'
import loung from './assets/loung.png'
import swing from './assets/swingchair.png'
import sofa2 from './assets/bestsellingpag.png'
import sofa3 from './assets/bestselling2.png'
import swingchair2 from './assets/swingchair2.png'
import bedseet from './assets/bedseet.png'
import light from './assets/light.png'
import webbaner from './assets/banner-3.jpg'
import { useNavigation } from "@react-navigation/native";
const Home1 = () => {
    const navigation = useNavigation()
    const handleNotification = () => {
        navigation.navigate('notification')
    }
    const handlemenu =()=>{
        navigation.navigate('menu')
    }
    const handlesofa =()=>{
        navigation.navigate('sofa')
    }
    const handlechair =()=>{
        navigation.navigate('chairs')
    }
    const handleCartschair =()=>{
        navigation.navigate('chairscarts')
    }
    const handlelamp =()=>{
        navigation.navigate('lamp')
    }
    const handleunit =()=>{
        navigation.navigate('tvunit')
    }
    
    const handelfilter =()=>{
        navigation.navigate('filters')
    }
   return (
       <View style={style.con}>
        <ScrollView>
           <View style={{flexDirection:'row'}}>
           <Text style={style.logo}></Text>
           <TouchableOpacity  onPress={() =>handlemenu()}>
           <Image source={menu} style={style.menubar}/>
           </TouchableOpacity>
           <Image source={pictuer} style={style.profile}/>
           <Text style={style.hello}>Hello</Text>
           <Text style={style.username}>Pinky!</Text>
           <Text style={style.logo1}></Text>
           <TouchableOpacity  onPress={() =>handleNotification()}>
           <Image source={notification} style={style.notificationlogo}/>
           </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row'}}>
            <TextInput style={style.search}
                     placeholder="Search here...."  placeholderTextColor={'#D9D9D9'}
            />
            <Text style={style.logo3}></Text>
            <TouchableOpacity onPress={()=>handelfilter()}>
           <Image source={setting} style={style.settinglogo} />
           </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row'}}>
            <Text style={style.box}> </Text>
            <Text style={style.box1}> </Text>
            <Image source={bigsale} style={style.sale}/>
            <Image source={off} style={style.off}/>
            <Image source={lamp} style={style.lamp}/>
            <TouchableOpacity>
            <Image source={sofa} style={style.sofa}/>
            </TouchableOpacity>
            <Text style={style.fontlabel}>Best Selling</Text>
            <Text style={style.modern}>Comforts & Modern  Sofa</Text>
            
            <Text style={style.more}>View More  
            <TouchableOpacity onPress={() =>handlesofa()}>        
                <Image source={arrow} style={{height:20,width:20,marginTop:2}}/>
                </TouchableOpacity>
                </Text>
            
           </View>
           <View style={{flexDirection:'row'}}>
            <Text style={style.catbox}>Tabel</Text>
            <Text style={style.catbox}>Cabinets</Text>
            <Text style={style.catbox}>Cupboard</Text>
            <Text style={style.catbox}>Lamp</Text>
            <Text style={style.catbox}>sofa</Text>
           </View>
           <View style={{flexDirection:'row'}}>
            <Text style={style.arrive}>New Arrivals</Text>
            <View  >
            <Text style={style.arrive1} onPress={()=>handlechair()}>View All</Text>
            </View>
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={style.cart}> 
                <View style={style.cartstyle}>
                <View style={style.like}><Image source={like} style={style.likeimage}/></View>
                <Image source={chair} style={{width:120,height:120,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}>
            <TouchableOpacity>        
                <Image source={shoopingbag} style={style.shoopingbag}/>
             </TouchableOpacity>

            </View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>Buddy Chair</Text>
               <Text style={style.buddy1}>Modern saddle arms</Text>
              <Text style={style.price}>$14</Text>
              <Text style={style.worngprice}>$20</Text>
              <Image source={star} style={style.star}/><Text style={style.viewstar}>4.5</Text>
              </View>
        </View> 
        <View style={style.cart}>
                <View style={style.cartstyle}>
                <View style={style.like}><Image source={like} style={style.likeimage}/></View>
                <Image source={chair1} style={{width:120,height:120,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}><Image source={shoopingbag} style={style.shoopingbag}/></View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>backs chiar</Text>
               <Text style={style.buddy1}>Modern saddle arms</Text>
              <Text style={style.price}>$15</Text>
              <Text style={style.worngprice}>$20</Text>
              <Image source={star} style={style.star}/><Text style={style.viewstar}>4.5</Text>
              </View>
              </View>
           </View>
           <View style={{flexDirection:'row'}}>
           <Text style={style.trending}>Trending Furniture</Text>
           <Text style={style.arrive2} onPress={()=>handleCartschair()}>View All</Text>
           </View>
           <View style={{flexDirection:'row'}}>
            <View style={style.trendingcart}><View style={style.trendingcartstyle}>
            <Image source={winbackchair} style={{width:100,height:100,margin:0,marginTop:-5,marginLeft:15}}/>
            </View>
            <Text style={style.win}>WinBack Chair</Text>
            <Text style={style.winmodern}>Modern arms chairs</Text>
            <Text style={style.pricewin}>$25</Text>
            <Image source={star} style={style.star1} />
            <Text style={style.startext}>4.5</Text>
            <View style={style.cartround1}><Image source={shoopingbag} style={style.shoopingbag}/></View>
            </View>
           </View>
           <View style={{flexDirection:'row'}}>
            <View style={style.trendingcart}><View style={style.trendingcartstyle}>
            <Image source={chiar4} style={{width:100,height:100,margin:0,marginTop:-5,marginLeft:15}}/>
            </View>
            <Text style={style.win}>Mid Century Sofa</Text>
            <Text style={style.winmodern}>Modern arms chairs</Text>
            <Text style={style.pricewin}>$999</Text>
            <Image source={star} style={style.star1} />
            <Text style={style.startext}>4.5</Text>
            <View style={style.cartround1}><Image source={shoopingbag} style={style.shoopingbag}/></View>
            </View>
           </View>
           <View style={{flexDirection:'row'}}>
            <View style={style.trendingcart}><View style={style.trendingcartstyle}>
            <Image source={chair5} style={{width:100,height:100,margin:0,marginTop:-5,marginLeft:15}}/>
            </View>
            <Text style={style.win}>Beige Chair</Text>
            <Text style={style.winmodern}>Modern arms chairs</Text>
            <Text style={style.pricewin}>$37</Text>
            <Image source={star} style={style.star1} />
            <Text style={style.startext}>4.5</Text>
            <View style={style.cartround1}><Image source={shoopingbag} style={style.shoopingbag}/></View>
            </View>
           </View>
           <View style={{flex:1}}>
           <Image source={sofa2} style={style.sofa1}/> 
           <Text style={style.webpage}>Best Selling</Text>
           <Text style={style.webpagetext}>Comforts & modern</Text>
           <Text style={style.webpagetext}>life Stylish Sofa</Text>
           <Text style={style.webpageviewmore} onPress={()=>handlechair()}>
           <Text >View more</Text>
           <Image source={arrow} style={style.webpagearrow}/>
           </Text>
           </View>
        
          <View style={style.offerzonebox}>
            <Text style={style.offerzone}>Offer Zone </Text>
            <View style={{flexDirection:'row'}}> 
            <View style={{flexDirection:'row'}}>
            <View style={style.offerzonecart}><View style={style.offerzonecartstyle}>
            <Image source={loung} style={{width:50,height:50,marginTop:-2,marginLeft:-2}}/>
            </View>
            <Text style={style.lonugchair}>Lounge chair</Text>
            <Text style={style.lonugchairText}>Modern arms chairs</Text>
         <Image source={star} style={style.star5} />
            <Text style={style.fivestar}>4.9</Text>
            <Text style={style.offerzoneprice}>$25</Text>
            </View>
           </View>
           <View style={{flexDirection:'row'}}>
            <View style={style.offerzonecart}><View style={style.offerzonecartstyle}>
            <Image source={tabel} style={{width:50,height:50,margin:0,marginTop:-2,marginLeft:-2}}/>
            </View>
            <Text style={style.lonugchair}>Tabel</Text>
            <Text style={style.lonugchairText}>BedroomStudy Table</Text>
         <Image source={star} style={style.star5} />
            <Text style={style.fivestar}>4.2</Text>
            <Text style={style.offerzoneprice}>$37</Text>
            </View>
           </View>
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{flexDirection:'row'}}>
            <View style={style.offerzonecart}><View style={style.offerzonecartstyle}>
            <Image source={swing} style={{width:50,height:50,margin:0,marginTop:-2,marginLeft:-2}}/>
            </View>
            <Text style={style.lonugchair}>Swing chair</Text>
            <Text style={style.lonugchairText}>Modern steel swing </Text>
         <Image source={star} style={style.star5} />
            <Text style={style.fivestar}>4.6</Text>
            <Text style={style.offerzoneprice}>$39</Text>
            </View>
           </View>
           <View style={{flexDirection:'row'}}>
            <View style={style.offerzonecart}><View style={style.offerzonecartstyle}>
            <Image source={dining} style={{width:50,height:50,margin:0,marginTop:-2,marginLeft:-2}}/>
            </View>
            <Text style={style.lonugchair}>Round dining..</Text>
            <Text style={style.lonugchairText}>Solid wood console</Text>
         <Image source={star} style={style.star5} />
            <Text style={style.fivestar}>4.8</Text>
            <Text style={style.offerzoneprice}>$40</Text>
            </View>
           </View>
           </View>
           </View>
            <Text style={style.arrive}>Furniture And Decor</Text>
           <View style={{flexDirection:'row'}}>
               <View style={style.decorecart}> 
                <View style={style.decorecartstyle}>
                <Image source={swingchair2} style={{width:120,height:120,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}><Image source={shoopingbag} style={style.shoopingbag}/></View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>Bubble Swing Chair</Text>
               <Text style={style.decor1}>Modern Swing Chair</Text>
              <Text style={style.decorprice}>$120</Text>
              </View>
        </View> 
        <View style={style.decorecart}> 
                <View style={style.decorecartstyle}>
                <Image source={loung} style={{width:120,height:120,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}><Image source={shoopingbag} style={style.shoopingbag}/></View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>Lounge Chair</Text>
               <Text style={style.decor2}>Modern Swing Chair</Text>
              <Text style={style.decorprice}>$180</Text>
              </View>
              
        </View> 
           </View>
           <View style={{flexDirection:'row'}}>
               <View style={style.decorecart}> 
                <View style={style.decorecartstyle}>
                <Image source={bedseet} style={{width:130,height:100,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}><Image source={shoopingbag} style={style.shoopingbag}/></View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>Double Bed Sheets</Text>
               <Text style={style.decor1}>Modern Swing Chair</Text>
              <Text style={style.decorprice}>$150</Text>
              </View>
        </View> 
        <View style={style.decorecart}> 
                <View style={style.decorecartstyle}>
                <Image source={light} style={{width:120,height:100,margin:0,padding:8}}/>
              </View>
              <View style={style.cartround}><Image source={shoopingbag} style={style.shoopingbag}/></View>
              <View style={{flexDirection:'row'}}><Text style={style.buddy}>Hangingr lig..</Text>
               <Text style={style.decor2}>Modern Swing Chair</Text>
              <Text style={style.decorprice}>$220</Text>
              </View>
              
        </View> 
           </View>
           <View style={{flexDirection:'row'}}>
           <View style={{flex:1}}>
           <Image source={webbaner} style={style.sofa2}/> 
           <Text style={style.webpag2}>Best Selling</Text>
           <Text style={style.webpagetext2}>Comforts & modern</Text>
           <Text style={style.webpagetext2}>life Stylish Sofa</Text>
           <Text  style={style.webpageviewmore2} onPress={()=>handleunit()}>
           <Text>View more</Text>
           <Image source={arrow} style={style.webpagearrow2}/>
           </Text>
           </View>
           <View style={{flex:1}}>
           <Image source={sofa3} style={style.sofa2}/> 
           <Text style={style.webpag2}>Wingback</Text>
           <Text style={style.webpagetext2}>Comforts & modern</Text>
           <Text style={style.webpagetext2}>life Stylish Sofa</Text>
           <Text style={style.webpageviewmore2} onPress={()=>handlelamp()}>
           <Text>View more</Text>
           <Image source={arrow} style={style.webpagearrow2}/>
           </Text>
           </View>
           </View>
        </ScrollView>
       </View>
   ); 
}

const style =StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:'#07141F'
    },
    logo:{
        borderWidth:3,
        marginTop:40,
        borderRadius:50,
        height:50,
        width:50,
        marginLeft:10,
        backgroundColor:'#192D3C',
        borderColor:'#1C2F3D'
    },
    menubar:{
        marginTop:60,
        marginLeft:-32,
        height:15,
        width:15
        
    },
    profile:
    {
        margin:50,
        marginLeft:15,
        height:30,
        width:30
    },
    hello:{
        marginTop:50,
        marginLeft:-32,
        fontSize:12,
        color:'#F5FCFF'
    },
    username:{
        marginTop:65,
        color:'#F5FCFF',
        marginLeft:-30,
        fontWeight:"bold",
        fontSize:15

    },
    logo1:{
        borderWidth:3,
        marginTop:40,
        borderRadius:50,
        height:50,
        width:50,
        marginLeft:138,
        backgroundColor:'#192D3C',
        borderColor:'#1C2F3D'
    },
    notificationlogo:{
        marginTop:55,
        marginLeft:-35,
        height:20,
        width:20
    },
    search:{
        backgroundColor:'#192D3C',
        height:35,
        width:280,
        fontSize:12,
        paddingLeft:35,
        marginLeft:20,
        marginTop:-5,
        borderRadius:3,
        color:'#F5FCFF'
    },
    logo3:{
        borderWidth:3,
        marginTop:-5,
        borderRadius:3,
        height:36,
        width:36,
        marginLeft:12,
        backgroundColor:'#192D3C',
        borderColor:'#1C2F3D',
    },
    settinglogo:{
        marginTop:4,
        marginLeft:-28,
        height:20,
        width:20
    },
    box:
    {
        // borderWidth:2,
        height:150,
        width:240,
        marginTop:20,
        marginLeft:15,
        backgroundColor:'#192D3C',
        borderRadius:3

    },
    box1:
    {
        // borderWidth:2,
        height:150,
        width:100,
        marginTop:20,
        marginLeft:-15,
        backgroundColor:'#FFC107',
        borderRadius:3   
    },
    sale:
    {
        marginLeft:-60,
        height:30,
        width:50,
        marginTop:30
    },
    off:
    {
        marginLeft:-60,
        height:30,
        width:70,
        marginTop:50
    },
    lamp:
    {
        height:100,
        width:50,
        marginTop:20,
        marginLeft:-150
    },
    sofa:
    {
        height:150,
        width:300,
        marginTop:20,
        marginLeft:-150
    },
    fontlabel:
    {
                
        marginTop:20,
        marginLeft:-360,
        fontSize:20,
        color:'#F5FCFF',
        fontWeight:'bold'
    },
    modern:
    {
        marginTop:50,
        marginLeft:-110,
        fontSize:10,
        color:'#F5FCFF',
        
    },
    more:
    {
        marginTop:135,
        marginLeft:-110,
        color:'#F5FCFF'
    },
    catbox:
    {
        height:30,
        width:60,
        backgroundColor:'#192D3C',
        marginLeft:10,
        marginTop:20,
        borderRadius:3,
        textAlign:'center',
        color:'#D9D9D9',
        padding:5
    },
    arrive:
    {
        color:'#F5FCFF',
        marginTop:15,
        marginLeft:15,
        fontWeight:'bold'
    },
    arrive1:
    {
        color:'#D9D9D9',
        marginTop:15,
        marginLeft:195,
    },
    arrive2:{
        color:'#D9D9D9',
        marginTop:15,
        marginLeft:130,
    },
    cart:
    {    width:165,
        height:225,
        backgroundColor:'#122636',
        margin:0,
        borderRadius:10,
        marginLeft:9,
        borderColor:'#122636',
        marginTop:20
    },
    cartstyle:
    {
        width:135,
        height:135,
        backgroundColor:'#1F303E',
        padding:10,
        marginLeft:15,
        marginTop:10,
        borderRadius:5,
    },
    like:
    {
        borderWidth:10,
        height:20,width:20,
        borderRadius:50,
        marginLeft:100,
        marginTop:-5,
        borderColor:'#07141F'
    },
    likeimage:
    {
        width:10,
        height:10,
        marginLeft:-4,
        marginTop:-5 
    },
    buddy:
    {
        color:'#F5FCFF',
        fontWeight:'bold',
        marginLeft:13,
        marginTop:2,
        fontSize:12
    },
    buddy1:
    {
        color:'#D9D9D9',
        marginLeft:-65,
        marginTop:20,
        fontSize:10
    },
    price:
    {
        color:'#F5FCFF',
        fontWeight:'bold',
        marginLeft:-90,
        marginTop:45,
        fontSize:12
    },
    worngprice: {
        color: '#D9D9D9',
        marginLeft:10,
        marginTop: 46,
        fontSize: 10
    },
    star:
    {
        height:13,width:13,marginTop:46,marginLeft:55,
    },
    viewstar:
    {
        marginTop:46,marginLeft:5,color:'#F5FCFF',fontSize:10
    },
    cartround:{
        borderWidth:15,
        height:30,width:30,
        borderRadius:60,
        marginLeft:120,
        marginTop:-15,
        borderColor:'#F5FCFF'
    },
    shoopingbag:
    {
        height:15,width:15,marginTop:-7,marginLeft:-7
    },
    trending:{
        color:'#F5FCFF',fontWeight:'bold',margin:15
    },
    trendingcart:
    {
        height:120,
        width:338,
        backgroundColor:'#122636',
        marginLeft:10,
        marginTop:10,
        borderRadius:3,
        textAlign:'center',
        color:'#D9D9D9',
        padding:5
    },
    trendingcartstyle:
    {
        width:135,
        height:105,
        backgroundColor:'#1F303E',
        padding:10,
        marginLeft:5,
        marginTop:3,
        borderRadius:5,
    },
    win:
    {
        marginLeft:160,
        marginTop:-95,
        color:'#F5FCFF',
        fontWeight:'bold',
        fontSize:15
    },
    winmodern:
    {
        marginLeft:160,
        marginTop:7,
        color:'#D9D9D9',
        fontSize:12
    },
    pricewin:
    {
        marginLeft:160,
        marginTop:30,
        color:'#D9D9D9',
        fontWeight:'bold',
        fontSize:15
    },
    star1:
    {
        height:13,width:13,
        marginLeft:280,
        marginTop:-90,
    },
    startext:
    {
        marginLeft:300,
        marginTop:-15,
        color:'#D9D9D9',
        fontSize:12
    },
    cartround1:
    {
        borderWidth:15,
        height:30,width:30,
        borderRadius:60,
        marginLeft:290,
        marginTop:45,
        borderColor:'#F5FCFF'
    },
    
    sofa1:
    {
        height:180,
        width:338,
        borderRadius:3,
        padding:5,
        marginLeft:10,
        marginTop:10,
    },
    webpage:
    {
        marginLeft:25,
        marginTop:-160,
        fontSize:16,
        fontWeight:'bold',
        color:'#F5FCFF'
    },
    webpagetext:
    {
        marginLeft:25,
        marginTop:2,
        fontSize:13,
        color:'#FFFFFF'
    },
    webpageviewmore:
    {
        marginLeft:25,
        marginTop:60,
        fontSize:15,
        color:'#FFFFFF'
    },
    webpagearrow:
    {
        marginLeft:100,
        marginTop:-22,
        height:30,
        width:30
    },
    offerzonebox:
    { 
        marginTop:20,
        height:270,
        width:390,
        backgroundColor:'#122636'
    },
    offerzone:{
        fontSize:15,
        fontWeight:'bold',
        color:'#F5FCFF',
        marginTop:15,
        marginLeft:20
    },
    offerzonecart:
    {
        height:100,
        width:169,
        backgroundColor:'#07141F',
        marginLeft:7,
        marginTop:10,
        borderRadius:3,
        textAlign:'center',
        color:'#D9D9D9',
        padding:5
    },
    offerzonecartstyle:
    {
        width:65,
        height:65,
        backgroundColor:'#1F303E',
        padding:10,
        marginLeft:5,
        marginTop:8,
        borderRadius:5,
    },
    lonugchair:{
        marginTop:-65,
        marginLeft:75,
        fontWeight:'bold',
        color:'#F5FCFF',
        fontSize:12
    },
    lonugchairText:
    {
        marginTop:3,
        marginLeft:75,
        fontSize:9,
        color:'#D9D9D9'
       
    },
    star5:
    {
        height:12,
        width:12,
        marginLeft:75,
        marginTop:5
    },
    fivestar:
    {
        marginLeft:90,
        marginTop:-12,
        fontSize:10,
        color:'#D9D9D9'
    },
    offerzoneprice:{
        marginLeft:75,
        marginTop:2,
        color:'#F5FCFF',
        fontWeight:'bold',
        fontSize:10
    },
    decorecart:
    {
        width:170,
        height:195,
        backgroundColor:'#122636',
        margin:0,
        borderRadius:10,
        marginLeft:6,
        borderColor:'#122636',
        marginTop:20
    },
    decorecartstyle:{
        width:135,
        height:135,
        backgroundColor:'#1F303E',
        padding:10,
        marginLeft:15,
        marginTop:10,
        borderRadius:5,
    },
    decor1:
    {
        color:'#D9D9D9',
        marginLeft:-105,
        marginTop:20,
        fontSize:10
    },
    decor2:
    {
        color:'#D9D9D9',
        marginLeft:-73,
        marginTop:20,
        fontSize:10
    },
    decorprice:{
        marginTop:17,
        marginLeft:30,
        color:'#F5FCFF',
        fontSize:12,
        fontWeight:'bold'
    },
    sofa2:
    {
        
        height:150,
        width:170,
        borderRadius:3,
        padding:5,
        marginLeft:5,
        marginTop:10,
    },
    webpag2:
    {
        marginLeft:15,
        marginTop:-140,
        fontSize:13,
        fontWeight:'bold',
        color:'#F5FCFF'
    },
    webpagetext2:
    {
        marginLeft:15,
        marginTop:2,
        fontSize:10,
        color:'#FFFFFF'
    },
    webpageviewmore2:{
        marginLeft:15,
        marginTop:65,
        fontSize:13,
        color:'#FFFFFF'
    },
    webpagearrow2:{
        marginLeft:80,
        marginTop:-18,
        height:20,
        width:20
    }
})
export default Home1; 