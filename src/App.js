// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Great from './components/Greet';
import Welcome from './components/Welcome';
import Footer from './components/Footer'
import Mainconteant from './components/Mainconteant'
import Header from './components/Header'
import ConatactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import Data from "./components/JokeDate"
import Product from "./components/product";
import Products from "./components/ProductsData"
import NewState from "./components/NewState"
import randomcolor from "randomcolor"
import Conditional from "./components/conditonal-loading"
import Todo from "./components/Todo"
import Api from "./lip/api"
import Form from "./lip/form"
import FormExtra from "./lip/FormExtra"
import Hooks from "./lip/hooks";
class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: "",
      isLoading: true,
      isLoggedIn: false

  }
    this.increment = this.increment.bind(this)
    this.handleClick = this.handleClick.bind(this)

}
handleClick() {
  this.setState(prevState => {
      return {
          isLoggedIn: !prevState.isLoggedIn
      }
  })
}
increment() {
    this.setState(prevState => {
        return {
            count: prevState.count + 1,
            color:randomcolor()
           
        }
    })
}

  componentDidMount() {
    console.log("Mounted")
}

// componentDidUpdate(prevState,prevProps) {
   
//     const colors = ['#558','#454101',"#ff4752","44aaaa","#475144"]
// const newColor = colors[Math.floor(Math.random() * colors.length)]


//   if(prevState.count !== this.state.count) {
    
  
//     this.setState({color: newColor})
//     // console.log("Did Update")
// }
// }
componentDidMount() {
  setTimeout(() => {
      this.setState({
          isLoading: false
      })
  }, 1500)
}

  render(){          
    console.log("Render")
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"

    const products = Products.map(product=><Product Key={product.id} product={product}/>)
    const datajoke = Data.map(joke=><Joke question={joke.question} answer={joke.answer}/>)
    
    return (

    <div className="App0">
<Hooks/>
                  <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
      <FormExtra/>
      {products}
      <Form/>
      <Great />
      <Welcome/>
      <Api/>
<Todo/>
      {datajoke}
      <Joke
          answer="i dont know"
        />
      <Joke
          question ="what is the favorit color"
          answer="red"
        /> 
        <NewState />
      <Joke
        question ="what is the favorit animal"
        answer= "cat"
      />
      <ConatactCard
          name="cat"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFv4jeGfGTCFUSCJdmTwlosQWS3saCH4jtQ&usqp=CAU"
          phone="(457) 457 574"
          Email="cat@yahoo.com"
      />
      <ConatactCard
          name="dog"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IyRZzjnoteIUjII5LVW-v8ystJ1plLjGZA&usqp=CAU"
          phone="(457) 577 014"
          Email="dog@yahoo.com"
      />
      <ConatactCard
          name="fish"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplSvR9idfKGX8zyimN0c9yDH3pobFGYnNKw&usqp=CAU"
          phone="(147) 217 014"
          Email="fish@yahoo.com"
      />

      <ConatactCard/>

      <Header className="Header"/>
      <Mainconteant className="Mainconteant"/>
    <Footer className="Footer"/> 
    <div>
                <h1 style={{color:this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
    </div>
  );
}}

export default App;
