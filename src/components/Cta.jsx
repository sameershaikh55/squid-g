import React from "react";

const Cta = ({ rp, home }) => {
	return (
		<div className="cta_container mt-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto d-flex flex-column justify-content-center align-items-center">
							<h4 className="f24 text-center text-white mb-3">
								You will find our Squid Game Collection in Solanart
							</h4>
							{(home && (
								<button
									id={(rp && "roadmap") || "team"}
									className="themeBtn2 fw700"
								>
									Go to Solanart
								</button>
							)) || <button className="themeBtn2 fw700">Go to Solanart</button>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cta;
