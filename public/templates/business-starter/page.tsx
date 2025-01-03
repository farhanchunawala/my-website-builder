import React from "react";
// import "./App.css"; // Add your CSS files as needed
import "./css/normalize.css";
import "./css/webflow.css";
import "./css/farhans-groovy-site-bd9cbc.webflow.css";

const App = () => {
	return (
		<div>
			{/* Header Section */}
			<header className="header">
				<div className="container">
					<a href="index.html" className="logo-link">
						<img
							src="images/logo.png"
							alt="Logo"
							className="logo"
						/>
					</a>
					<nav className="nav-menu">
						<a href="about.html" className="nav-link">
							About
						</a>
						<a href="work.html" className="nav-link">
							Work
						</a>
						<a href="team.html" className="nav-link">
							Team
						</a>
						<a href="blog.html" className="nav-link">
							Blog
						</a>
						<a
							href="contact.html"
							className="nav-link button"
						>
							Contact Us
						</a>
					</nav>
				</div>
			</header>

			{/* Intro Section */}
			<section className="intro-section">
				<div className="container">
					<h1 className="heading">Grow your business</h1>
				</div>
			</section>

			{/* Motto Section */}
			<section className="motto-section">
				<div className="container">
					<h2 className="subheading">
						The perfect solution for your business.
					</h2>
					<p className="description">
						We work with forward-thinking clients who
						appreciate the value of design, marketing, and
						strategy.
					</p>
				</div>
			</section>

			{/* About Section */}
			<section className="about-section">
				<div className="container">
					<p className="about-text">
						We help clients succeed by creating
						identities, digital experiences, and print
						materials that communicate clearly, achieve
						marketing goals, and look fantastic.
					</p>
					<a href="about.html" className="button">
						Learn More
					</a>
				</div>
			</section>

			{/* Blog Section */}
			<section className="blog-section">
				<div className="container">
					<h2 className="section-heading">From the Blog</h2>
					<p className="no-items">No items found.</p>
				</div>
			</section>

			{/* Call-to-Action Section */}
			<section className="cta-section">
				<div className="container">
					<h2 className="cta-heading">
						Grow your business.
					</h2>
					<a href="contact.html" className="button">
						Start Now
					</a>
				</div>
			</section>

			{/* Footer Section */}
			<footer className="footer">
				<div className="container">
					<p className="footer-text">Powered by Webflow</p>
				</div>
			</footer>
		</div>
	);
};

export default App;
