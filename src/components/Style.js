import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:10
    },
    text:{
        color: '#bed9ff',
        fontSize: 15,
        marginBottom:10
    },
    learnMore:{
        color: 'white', 
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:10
    },
    inputBox:{
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    inputText:{
        fontSize: 20,
        fontWeight:'600',
        color:'#434343'
    },
    timeContainer:{
        flexDirection:'row',
        width: 100,
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:50
    },
    row:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:10,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#dbdbdb',

    },
    iconContainer:{
        backgroundColor: '#b3b3b3',
        padding:10,
        borderRadius:25
    },
    destinationText:{
        marginLeft:10,
        fontWeight: '600',
        fontSize: 16
    },
    searchContainer:{
        padding:10,
        marginLeft:10,
        // backgroundColor: '#eee',
        height: '80%'
    },
    textInput:{
        padding:10,
        backgroundColor: '#eee',
        marginVertical:5
    },
    uberContainer:{
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        
    },
    carImage:{
        height: 70,
        width:80,
        resizeMode: 'contain'
    },
    time:{
        color: '#5d5d5d'    
    },
    type:{
        fontWeight:'bold',
        fontSize: 18,
        marginBottom: 5,
        color: '#000'  
    },
    middleContainer:{
        flex:1,
        marginHorizontal:10, 
        
       },
    rightContainer:{
        width:100,
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    price:{
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:5,
        color: '#000'  
    },
})

export default styles;