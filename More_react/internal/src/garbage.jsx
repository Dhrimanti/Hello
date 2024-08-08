// it is important and can rerender somethingn
// const [inputValue, setInputValue] = useState('');
//   const [displayValue, setDisplayValue] = useState('');

  
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

  
//   const handleButtonClick = () => {
//     setDisplayValue(inputValue);
//   };

//   return (
//     <>
//     <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter some value"
//           style={{ padding: '10px', margin: '10px', border: '1px solid black' }}
//         />
//         <button onClick={handleButtonClick}>Update Value</button>
//       </div>
//       <div>
//         <h2>Displayed Value:</h2>
//         <p>{displayValue}</p>
//       </div>



      
//     </>











// rendering something


// function App() {
//     const [title, setTitle] = useState('badmos');
//     function badmos(){
//       setTitle("hello")
//     }
//     function Header({title}){
//       return <div>
//         {title}
//       </div>
//     }
    
  
    
  
//     return (
//       <>
//       <button onClick={badmos}>Update the title</button>
//       <Header title={title}></Header>
      
//       </>
//     )
//   }