import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'
import photo7 from './images/photo7.png'
import photo8 from './images/photo8.png'
import photo9 from './images/photo9.png'
import photo10 from './images/photo10.png'
import photo11 from './images/photo11.png'
import photo12 from './images/photo12.png'
import photo13 from './images/photo13.png'
import photo14 from './images/photo14.png'
import photo15 from './images/photo15.png'
import photo16 from './images/photo16.png'



const photos = [
{
  id: 1,
  photo: photo1,
  clicked: false
},
{
  id: 2,
  photo: photo2,
  clicked: false
},
{
  id: 3,
  photo: photo3,
  clicked: false
},
{
  id: 4,
  photo: photo4,
  clicked: false
},
{
  id: 5,
  photo: photo5,
  clicked: false
},
{
  id: 6,
  photo: photo6,
  clicked: false
},
{
  id: 7,
  photo: photo7,
  clicked: false
},
{
  id: 8,
  photo: photo8,
  clicked: false
},
{
  id: 9,
  photo: photo9,
  clicked: false
},
{
  id: 10,
  photo: photo10,
  clicked: false
},
{
  id: 11,
  photo: photo11,
  clicked: false
},
{
  id: 12,
  photo: photo12,
  clicked: false
},
{
  id: 13,
  photo: photo13,
  clicked: false
},
{
  id: 14,
  photo: photo14,
  clicked: false
},
{
  id: 15,
  photo: photo15,
  clicked: false
},
{
  id: 16,
  photo: photo16,
  clicked: false
},

];


class App extends Component {
 state = {
   photos: photos,
   message: 'Click Any Image to Begin',
   score: 0,
   HighScore: 0
 }


handlePhotosClick = (event) => {

  let id= Number(event.target.dataset.id)
  console.log(id);
  var clone = this.state.photos
  var lost = false 
  for (let i = 0; i < clone.length; i++){
      if(clone[i].id === id){
        if(clone[i].clicked === true){
         lost = true
      }

      if(clone[i].clicked === false){
        clone[i].clicked = true
        this.setState({
          massage: "Good job! Click another" ,
          score: this.state.score + 1
        })
      }
    }
   
   
  } 

  clone = clone.sort(() => Math.random() - 0.5);
  this.setState({
    photos: clone
  })

  if (lost === true){
    for (let i = 0; i < clone.length; i++) {
      clone[i].clicked = false
    }
    alert("Game over!")
    if(this.state.score > this.state.HighScore){
      this.setState({
        HighScore: this.state.score
      })
    }
    this.setState({
      message: "Game Over",
      photos: clone ,
      score:0
    })
    var that = this
    setTimeout (function(){
      that.setState({
        message: "Click Any Image to Begain"
      }) 
    }, 1000)
  }

}
render() {
let displayPhotos = this.state.photos.map(each => 
<img key={each.id} alt={each.id} data-id={each.id} src={each.photo} onClick={this.handlePhotosClick}></img> 
  )
return (
  <div className="App">

  <div id="header">
  <div>Click Game</div>
  <div>{this.state.message}</div>
<div>Score: {this.state.score} Top Score: {this.state.HighScore}</div>
</div>
<Container>
  <Row>
    <Col size="mid-6">
<div id="cute">

{displayPhotos}

</div>
</Col>
</Row>
</Container>
</div>
);

}
}
export default App;
