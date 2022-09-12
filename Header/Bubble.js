// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View,Image, TouchableOpacity } from "react-native";

// const Bubble = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
    
//     <View style={styles.centeredView}>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             {/* <TouchableOpacity activeOpacity={.5} onPress={this.callFun}> */}

//             <Image style={{height:50,width :50,marginLeft:-12}} source={require('./salesinvoice.jpg')} />
//             <Image style={{height:50,width :50,marginLeft:30,}} source={require('./purchasebill.webp')} />
//             <Image style={{height:50,width :50,marginLeft:40}} source={require('./Receipt.jpg')} />
//             <Image style={{height:50,width :50,marginLeft:40,}} source={require('./Payment.png')} />
            
//             <Image style={{height:50,width :50,marginLeft:-12,marginTop:50}} source={require('./creditnote.webp')} />
//             <Image style={{height:50,width :50,marginLeft:30,}} source={require('./debitnote.webp')} />
//             <Image style={{height:50,width :50,marginLeft:40}} source={require('./customer.png')} />
//             <Image style={{height:50,width :50,marginLeft:40}} source={require('./vendor.png')} />
            
//             <Image style={{height:50,width :50}} source={require('./advancereceipt.png')} />
//             <Image style={{height:50,width :50,marginLeft:-20}} source={require('./journelvoucher.jpg')} />
           
//            {/* // </TouchableOpacity> */}
//           </View>
          
//         </View>
        
//         <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>X</Text>
//             </Pressable>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >


//       </Pressable>
//       <Text style={styles.textStyle}>Show Modal</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: -200,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "darkseagreen",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     display:'flex',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     justifyContent:'space-evenly',
//     flexWrap:'wrap',
//     width:'100%',
//     height:'70%',
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     borderWidth:4,
//     borderColor:'green',
//     marginTop:400,
//     marginRight:0,
//     backgroundColor: "red",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default Bubble;

// // // import React, { useState } from "react";
// // // import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// // // import { withSafeAreaInsets } from "react-native-safe-area-context";

// // import React, { useState } from "react";
// // import {
// //   Alert,
// //   Modal,
// //   StyleSheet,
// //   Text,
// //   Pressable,
// //   Image
// // } from "react-native";

// // const bubble = () => {
// //   const [modalVisible, setModalVisible] = useState(false);
// //   return (
// //     <View style={styles.centeredView}>
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => {
// //           Alert.alert("Modal has been closed.");
// //           setModalVisible(!modalVisible);
// //         }}
// //       >
// //         <View style={styles.centeredView}>
// //           <View style={styles.modalView}>
// //             <Image style={{height:50,width :50,marginLeft:-12}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:30,}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:40}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:40,}} source={require('')} />
            
// //             <Image style={{height:50,width :50,marginLeft:-12,marginTop:50}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:30,}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:40}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:40}} source={require('')} />
            
// //             <Image style={{height:50,width :50}} source={require('')} />
// //             <Image style={{height:50,width :50,marginLeft:-20}} source={require('')} />
            
// //           </View>
// //         </View>
// //         <Pressable
// //           style={[styles.button, styles.buttonClose]}
// //           onPress={() => setModalVisible(!modalVisible)}
// //         >
// //           <Text style={styles.textStyle}>X</Text>
// //         </Pressable>
// //       </Modal>
// //       <Pressable
// //         style={[styles.button, styles.buttonOpen]}
// //         onPress={() => setModalVisible(true)}
// //       ></Pressable>
// //       <Text style={styles.textStyle}>Show Modal</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   centeredView: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 100
// //   },
// //   modalView: {
// //     margin: 20,
// //     backgroundColor: "red",
// //     borderRadius: 30,
// //     padding: 35,
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     // shadowOffset: {
// //     //   width: 10,
// //     //   height: 15
// //     // },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 4,
// //     elevation: 5,
// //     display: "flex",
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     justifyContent: "space-evenly",
// //     flexWrap: "wrap",
// //     width: "100%",
// //     height: "80%"
// //   },
// //   button: {
// //     borderRadius: 20,
// //     padding: 10,
// //     elevation: 2
// //   },
// //   buttonOpen: {
// //     backgroundColor: "#F194FF"
// //   },
// //   buttonClose: {
// //     backgroundColor: "#2196F3"
// //   },
// //   textStyle: {
// //     color: "white",
// //     fontWeight: "bold",
// //     textAlign: "center"
// //   },
// //   modalText: {
// //     marginBottom: 15,
// //     textAlign: "center"
// //   }
// // });

// // export default bubble;
