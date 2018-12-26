import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

export const startTabs = () =>{
    Promise.all([
        Icon.getImageSource("map"),
        Icon.getImageSource("share", 30),
        Icon.getImageSource("align-justify",20)
    ]).then((sources)=> {

        Navigation.setRoot({
            root: {
                sideMenu: {
                    right: {
                      component: {
                        id: "SideMenu.left",
                        name: 'test.SideMenu',
                        
                      }
                    },
                    center: {
                          id: "AppRoot",
                              bottomTabs: {
                                  children: [
                                //       {
                                //     stack: {
                                //       children: [{
                                //         component: {
                                //           name: 'test.FindPlace',
                                //           passProps: {
                                //             text: 'This is tab 1',
                                //           }
                                //         }
                                //       }],
                                //       options: {
                                //         topBar: {
                                //           title: {
                                //             text: 'Find Place'
                                //           }
                                //         },
                                //         bottomTab: {
                                //           text: 'Find Place',
                                //           icon: sources[0],
                                //           testID: 'Find Place',
                                //           iconColor: 'red',
                                //           selectedIconColor: 'blue',
                                //           textColor: 'red',
                                //           selectedTextColor: 'blue',
                                //           fontFamily: 'Helvetica',
                                //         }
                                //       }
                                //     }
                                //   },
                                  {
                                      stack: {
                                        children: [{
                                          component: {
                                            name: 'test.Home',
                                            passProps: {
                                              text: 'Home',
                                            }
                                          }
                                        }],
                                        options: {
                                          topBar: {
                                            title: {
                                              text: 'Home'
                                            }
                                          },
                                          bottomTab: {
                                            text: 'Home',
                                            icon: sources[1],
                                            testID: 'Home',
                                            iconColor: 'orange',
                                            selectedIconColor: 'orange',
                                            textColor: 'white',
                                            selectedTextColor: 'white',
                                            fontFamily: 'Helvetica',
                                          }
                                        }
                                      }
                                    },
                                ],
                                
                                  
                                },
                        },
                },
            }
        })
    });
  
}; 

export const Login = ()=>{
    Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: 'test.Login',
                passProps: {
                  text: 'stack with one child'
                }
              }
            }],
            options: {
              topBar: {
                title: {
                  text: 'Login'
                }
              }
            }
          }
        }
      });
}

export const Signup = ()=>{
  Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'test.Signup',
              passProps: {
                text: 'stack with one child'
              }
            }
          }],
          options: {
            topBar: {
              title: {
                text: 'Sign Up'
              }
            }
          }
        }
      }
    });
}

export const addEmployee = ()=>{
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: 'test.AddEmployee',
          passProps: {
            text: 'stack with one child'
          },
          options: {
            topBar: {
              title: {
                text: 'Add Employee'
              }
            }
          }
        }
      }]
    }
  });
}