import React from "react";
import "./bubbleChat.css";

const Bubble = () => {
	return (
		<>
			<div style={{ justifyContent: "center" }}>
				<a
					// href="https://api.whatsapp.com/send?phone=081285169575&text=Halo%20saya%20ingin%20bertanya"
					target="__blank"
					href="https://wa.me/6281210220182?text=Assalamu'alaikum%20saya%20ingin%20bertanya%20terkait%20pengobatan%20thibbun%20nabawi"
					// href="https://wa.me/081285169575&text=Halo%20saya%20ingin%20bertanya"
					className="whatsapp-bubble">
					<i className="fa fa-whatsapp"></i>
					<img src="/whatsapp.png" width="60px" height="60px" alt="" />
				</a>
			</div>
			{/* <div className="scroll-to-top">
				<Link
					// activeClass="active"
					to="hero"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<i class="fa fa-whatsapp"></i>
					{/* <img src={WA} width="55px" height="55px" alt="" /> 
					Up
				</Link>
			</div> */}
		</>
	);
};

export default Bubble;
