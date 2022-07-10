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