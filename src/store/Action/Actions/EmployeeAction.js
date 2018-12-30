import { ADD_EMPLOYEE } from '../ActionType'
import axios from 'axios'
import firebase from 'react-native-firebase'
import RNFetchBlob from 'rn-fetch-blob'
// export const addEmployee = (firstName,lastName,salary,phoneNumber,image)=>{

    // return () =>{
    //     var data = firebase.database().ref('info')
        // data.push({
        //     firstName: firstName,
        //     lastName:lastName,
        //     Salary: salary,
        //     PhoneNumber: phoneNumber
        // })
        // .then(function (response) {
        // })
        // .catch(function (error) {
        // console.log(error);
        // });



          // const downloadUrl = null
          // const mime = 'application/octet-stream'
          // const Blob = RNFetchBlob.polyfill.Blob;
          // const fs = RNFetchBlob.fs;
          // window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
          // window.Blob = Blob;
        
          //     const uploadUri = image.uri;
          //     let uploadBlob = null;
          //     const imageRef = firebase.storage().ref('image');
          //     fs.readFile(uploadUri, 'base64')
          //     .then((data) => {
          //       return Blob.build(data, { type: `${mime};BASE64` });
          //     })
          //     .then((blob) => {
          //       uploadBlob = blob;
          //       imageRef.put( blob, { contentType: mime });
          //     })
          //     .then(() => {
          //       //take the downloadUrl in case you want to downlaod
          //       imageRef.getDownloadURL().then(url => {
          //        // do something
          //        data.push({
          //         firstName: firstName,
          //         lastName:lastName,
          //         Salary: salary,
          //         PhoneNumber: phoneNumber,
          //         image:url
          //     })
          //     .then(function (response) {
          //     })
          //     .catch(function (error) {
          //       alert(error)
          //     console.log(error);
          //     });
          //       });
          //     });
          
        




        
        // RNFetchBlob.fetch('POST', 'gs://employeedata-2f958.appspot.com', {
        // //... some headers,
        // 'Content-Type' : 'application/octet-stream'
        // },RNFetchBlob.wrap(image.uri))
        // // listen to upload progress event
        // .uploadProgress((written, total) => {
        //     console.log('uploaded', written / total)
        // })
        // // listen to download progress event
        // .progress((received, total) => {
        //     console.log('progress', received / total)
        // })
        // .then((resp) => {
        //     // alert(resp)
        // })
        // .catch((err) => {
        //   //  alert(err)
        //     console.log(image.uri);
        // })


//         }

// }

export const addEmployee = (firstName,lastName,salary,phoneNumber,image)=>{
    return{
        type: ADD_EMPLOYEE,
        firstName: firstName,
        lastName: lastName,
        salary: salary,
        phoneNumber: phoneNumber,
        image: image
    }
}


