 // fetch('http://headers.jsontest.com/')
 //        .then((response) => response.json())
 //        .then((data) => console.log(Object.keys(data)));
 //


// const array1 = ['a', 'b', 'c'];
//
// array1.forEach(e => console.log(e));

// const urlApi = `http://headers.jsontest.com/`;
//
// async function headers() {
//     const response = await fetch(urlApi);
//     const data = await response.text();
//
//     let text = Object(response.data);
//     document.getElementById('headers').innerHTMl = text;
// }
//
// headers();

 // fetch('http://headers.jsontest.com/')
 //     .then((response) => {
 //         return response.text();
 //     })
 //
 //     .then((httpHeaders) => {
 //         for (const key in httpHeaders) {
 //             if (httpHeaders.hasOwnProperty(key)) {
 //                 console.log(`${key}: ${httpHeaders[key]}`)
 //             }
 //         }
 //         document.getElementById('headers').innerHTML = httpHeaders;
 //         // for (const key in httpHeaders) {
 //         //     if (httpHeaders.hasOwnProperty(key)) {
 //         //         console.log(`${key}: ${httpHeaders[key]}`)
 //         //     }
 //         // }
 //         console.log(httpHeaders);
 //
 //     })
 //     .catch(error => {
 //         throw Error(error)
 //
 //     })

 ///Last iteration of my code



// fetch('http://headers.jsontest.com/')
//      .then((response) => {
//          return response.text();
//      })
//
//      .then((httpHeaders) => {
//          document.getElementById('headers').innerHTML = httpHeaders;
//          console.log(httpHeaders);
//          const httpKeys = Object.keys(httpHeaders);
//          console.log(httpKeys);
//
//          httpKeys.forEach((key, index) => {
//              console.log(`${key}: ${httpHeaders[key]}`)
//          })
//      })
//      .catch(error => {
//          throw Error(error)
//
//      })

 fetch('http://headers.jsontest.com/')
     .then((response) => {
         return response.json();
     })

     .then((httpHeaders) => {
       for (const entry in Object.entries(httpHeaders)) {
             console.log(`${entry[0]} : ${entry[1]}`)
         }
         document.getElementById('headers').innerHTML = `${httpHeaders}`;
         console.log(httpHeaders);

     })
     .catch(error => {
         throw Error(error)

     })