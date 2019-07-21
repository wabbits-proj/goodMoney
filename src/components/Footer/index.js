// import React, { useState, useEffect } from 'react';
// import { Animated, StyleSheet, BackHandler, Easing } from 'react-native';

// import FormAdd from '~/components/FormAdd';
// import { Col, Btn, TxtBtn } from './styles';
// import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

// export default function Footer() {
//   const [visible, setVisible] = useState(true);
//   const [form, setForm] = useState(null);
//   const height = new Animated.Value(heightPercentageToDp('7%'));

//   useEffect(() => {
//     backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//       hideFormAdd();
//       // setTimeout(() => {
//       //   // setForm(null); 
//       //   // setVisible(true);   
//       // }, 1000);
//       return true;
//     });
//   }, []);

//   function onBtnPressDebit(){
//     showFormAdd();
//     setTimeout(() => {
//       setVisible(false);  
//       setForm(<FormAdd typeForm="addDebit" />);  
//     }, 1000);
//   }

//   function onBtnPressCredit(){
//     showFormAdd();
//     setTimeout(() => {
//       setVisible(false);    
//       setForm(<FormAdd typeForm="addCredit" />);  
//     }, 1000);
//   }

//   function showFormAdd(){
//     Animated.timing(height, {
//       toValue: heightPercentageToDp('50%'),
//       duration: 1000,
//     }).start();
//   }

//   function hideFormAdd(){
//     setForm(null);
//     setVisible(true);
//     Animated.timing(height, {
//       toValue: heightPercentageToDp('7%'),
//       duration: 1000,
//     }).start();
//   }

//   return (
//     <Animated.View style={[styles.container, { height: height }]}>
//       {
//         (visible) ?
//         <>
//           <Col>
//             <Btn 
//               background="#AA4343"
//               onPress={onBtnPressDebit}
//             >
//               <TxtBtn>Gasto</TxtBtn>
//             </Btn>
//           </Col>
//           <Col>
//             <Btn 
//               background="#42AB9E"
//               onPress={onBtnPressCredit}
//             >
//               <TxtBtn>Ganho</TxtBtn>
//             </Btn>
//           </Col>
//         </>
//         : form
//       }      
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: widthPercentageToDp('100%'),
//     // height: heightPercentageToDp('7%'), 
//     marginLeft: widthPercentageToDp('5%'),
//     marginRight: widthPercentageToDp('5%'),
//     alignSelf: 'center', 
//     justifyContent: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#FFF',  
//     elevation: 20,
//     zIndex: 5,
//   }
// });


import React from 'react';
import { Animated, BackHandler } from 'react-native';

import FormAdd from '~/components/FormAdd';
import { Container, Col, Btn, TxtBtn } from './styles';
import { heightPercentageToDp } from "~/services/utils";

export default class Footer extends React.Component {
  state = {
    height: new Animated.Value(heightPercentageToDp('7%')),
    opacity: new Animated.Value(1),
    visible: true,
    form: null
  }

  componentDidMount(){
    backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.hideFormAdd();
      return true;
    });
  }

  onBtnPressDebit(){
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 500,      
    }).start(() => {
      Animated.timing(this.state.height, {
        toValue: heightPercentageToDp('50%'),
      duration: 1000,
      }).start();
    });

    setTimeout(() => {  
      this.setState({
        form: <FormAdd typeForm="addDebit" />,
        visible: false
      });  
    }, 1500);
  }

  onBtnPressCredit(){
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 500,      
    }).start(() => {
      Animated.timing(this.state.height, {
        toValue: heightPercentageToDp('50%'),
      duration: 1000,
      }).start();
    });

    setTimeout(() => {
      this.setState({
        form: <FormAdd typeForm="addCredit" />,
        visible: false
      }); 
    }, 1500);
  }

  hideFormAdd(){
    this.setState({
      form: null,
      visible: true
    }); 

    Animated.timing(this.state.height, {
      toValue: heightPercentageToDp('7%'),
      duration: 1000,
    }).start(() => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  }

  render(){
    return (
      <Container style={{ height: this.state.height }}>
        {
          (this.state.visible) ?
          <>
            <Col style={{ opacity: this.state.opacity }}>
              <Btn 
                background="#AA4343"
                onPress={() => this.onBtnPressDebit()}
              >
                <TxtBtn>Gasto</TxtBtn>
              </Btn>
            </Col>
            <Col style={{ opacity: this.state.opacity }}>
              <Btn 
                background="#42AB9E"
                onPress={() => this.onBtnPressCredit()}
              >
                <TxtBtn>Ganho</TxtBtn>
              </Btn>
            </Col>
          </>
          : this.state.form
        }      
      </Container>
    );
  }
}
