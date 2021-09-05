import React from "react";
import { ImWhatsapp } from "react-icons/im";
const Whatsapp = () => {
	return (
		<div className="zap">
			<div className="zap-content">
				<a href="https://api.whatsapp.com/send?phone=557999824006&text=Olá! Gostaria de mais informações sobre o atendimento da Drª Camylle Azevedo">
					<ImWhatsapp />
				</a>
			</div>
		</div>
	);
};

export default Whatsapp;