import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollButton.css'

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 1600){
	setVisible(true)
	}
	else if (scrolled <= 1600){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='scroll-button' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
	<FaArrowCircleUp/>
	</button>
);
}

export default ScrollButton;
