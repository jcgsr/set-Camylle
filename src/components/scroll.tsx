import { Link } from "gatsby";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const Scroll = () => {
	return (
		<div className="scroll">
			<div className="scroll-content">
			<Link to="#header">
					<FaArrowAltCircleUp />
      </Link>
			</div>
		</div>
	);
};

export default Scroll;