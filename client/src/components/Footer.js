import React from 'react'
import '../styles/Footer.css'


const Footer = () => (
	<footer>
		<div className="container">
			<div className="row footer">
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className="copyright">
						<p>Copyright © 2017, All Rights Reserverd SkylabCoders</p>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className="github">
						<a  href="https://github.com/emiliovillu">Emilio Villuendas <i className="fa fa-github" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer