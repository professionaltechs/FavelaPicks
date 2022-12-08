
// import { parse } from 'rss-to-json';
// import { useEffect, useState } from 'react';
// /**
//  * Returns the text from a HTML string
//  *
//  * @param {html} String The html string
//  */
// function stripImgHtml(html) {
//   // Create a new div element
//   var temporalDivElement = document.createElement("div");
//   // Set the HTML content with the providen
//   temporalDivElement.innerHTML = html;
//   console.log(temporalDivElement.getElementsByTagName("img")[0])
//   return temporalDivElement.getElementsByTagName("img")[0].src
// }
// function stripHtml(html) {
//   // Create a new div element
//   var temporalDivElement = document.createElement("div");
//   // Set the HTML content with the providen
//   temporalDivElement.innerHTML = html;
//   // Retrieve the text property of the element (cross-browser support)
//   return temporalDivElement.textContent || temporalDivElement.innerText || "";
// }
// function Delete() {
//   const [items, setItems] = useState(null);
//   const getData = async () => {
//     let rss = await parse('https://rss.app/feeds/tws8VcDCf1Mkp5or.xml');
//     let items = rss.items;
//     setItems(items);
//   }
//   useEffect(() => {
//     getData();
//   }, [])
//   const newItems = items?.map((element => {
//     // const desObject = {
//     //   img: stripImgHtml(element?.description),
//     //   text: stripHtml(element?.description)
//     // }
//     return {
//       ...element,
//       // description: desObject
//     }
//   }))
//   console.log("New DATA", newItems)
//   return (
//     <div>
//       {newItems ? newItems.map((item, index) => {
//         return (
//           <div key={index}>
//             <a href='#'>
//               <div> <img src={item.description.img} />
//                 <h5>{item.description.text}</h5></div>
//             </a>
//           </div>
//         )
//       }) : null}
//     </div>
//   )
// }
// export default Delete;




























import { useState } from 'react'
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from '../../auth/firebase';
function Delete() {
  const googleSignUp = ()=>{
    var provider = new GoogleAuthProvider();
    console.log("Clicked")
    signInWithPopup(auth,provider).then((result)=>{
      // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    const user = result.user;
    }).catch((err)=>{console.log(err)})
  }
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={googleSignUp}>Google SignUp</button>
    </div>
  )
}
export default Delete