let [price2, setPrice2] = useState("");

const handlePrice = (e) => {
    setPrice2(e.target.value);
  };

  let myArr = [price2]

  let price = myArr.toLocaleString();

  price = parseInt(price);


// ****************************************************

{origin.toLocaleString()}


// ****************************************************

npm install react-number format    => 이거하면 만들어둔 Input  컴포넌트 못쓸거같아서..

// ****************************************************

const Test = () => {
    const number = 123456789
    const number2 = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 
    return(
        <div>
            {number2} 원
        </div>
    )
}
 
어떻게 쓸지 모르겠어요..

// ****************************************************

const [enteredNum, setEnterdNum] = useState<string>("");

<input type="text" value={enteredNum} onChange={changeEnteredNum}></input>
const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue: number = Number(value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue.toLocaleString());
 };

이건 타입스크립트..

function toggleNumToString(num) {
    if (typeof 1 === typeof num) {
      return num.toLocaleString("ko-KR");
    } else if (typeof "str" === typeof num) {
      return parseInt(num.replace(",", ""));
    }
  }

// ****************************************************

  function getNumber(obj){
    
    var num01;
    var num02;
    num01 = obj.value;
    num02 = num01.replace(/\D/g,""); //숫자가 아닌것을 제거, 
                                     //즉 [0-9]를 제외한 문자 제거; /[^0-9]/g 와 같은 표현
    num01 = setComma(num02); //콤마 찍기
    obj.value =  num01;
  
  }
  function setComma(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
    n += '';                          // 숫자를 문자열로 변환         
    while (reg.test(n)) {
       n = n.replace(reg, '$1' + ',' + '$2');
    }         
    return n;
  }

  // import React, { useState } from "react";
// import Input from '../components/ui/Input'
// export default function App() {
//   const [num, setNum] = useState(0);

//   const inputPriceFormat = (str) => {
//     console.log("s", str);
//     const comma = (str) => {
//       str = String(str);
//       return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
//     };
//     const uncomma = (str) => {
//       str = String(str);
//       return str.replace(/[^\d]+/g, "");
//     };
//     return comma(uncomma(str));
//   };

//   return (
//     <div className="App">
//       <Input
//         type="text"
//         value={num}
//         onChange={(e) => setNum(inputPriceFormat(e.target.value))}
//       />
//       <button
//         onClick={(e) => {
//           // ,를 뺀 원본 숫자 데이터를 얻기 위함
//           console.log(num.split(",").reduce((curr, acc) => curr + acc, ""));
//         }}
//       >
//         test
//       </button>
//     </div>
//   );
// }