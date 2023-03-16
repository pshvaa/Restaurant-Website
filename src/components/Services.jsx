import React from 'react'
import './Services.css'
import servImg from '../images/intro-images/restaurant_1.jpeg'

const Services = () => {
  return (
    <div className="services wrapper">
  <h1>Parallax Flipping Cards</h1>
  <div className="cols">
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Rendann</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Reflupper</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style="background-image: url(https://unsplash.it/506/506/)">
						<div className="inner">
							<p>Acirassi</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" style={{backgroundImage: `url(${servImg})`}}>
						<div className="inner">
							<p>Sohanidd</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
  )
}

export default Services