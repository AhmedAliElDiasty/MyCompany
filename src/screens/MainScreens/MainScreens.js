import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

export const startTabs = () =>{
    Promise.all([
        Icon.getImageSource("angellist"),
        Icon.getImageSource("home", 30),
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
                                            iconColor: 'grey',
                                            selectedIconColor: 'orange',
                                            textColor: 'grey',
                                            selectedTextColor: 'orange',
                                            fontFamily: 'Helvetica',
                                          }
                                        }
                                      }
                                    },
                                      {
                                    stack: {
                                      children: [{
                                        component: {
                                          name: 'test.AboutUs',
                                         
                                        }
                                      }],
                                      options: {
                                        topBar: {
                                          title: {
                                            text: 'About us'
                                          }
                                        },
                                        bottomTab: {
                                          text: 'About Us',
                                          icon: sources[0],
                                          testID: 'About Us',
                                          iconColor: 'grey',
                                          selectedIconColor: 'orange',
                                          textColor: 'grey',
                                          selectedTextColor: 'orange',
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

