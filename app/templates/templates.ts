const templates = [
	{
		title: "Andreas",
		price: "$50",
		image: "andreas.png",
		url: "andreas",
	},
	{
		title: "Assemble",
		price: "$50",
		image: "assemble.png",
		url: "assemble",
	},
	{
		title: "Biznus",
		price: "$50",
		image: "biznus.jpeg",
		url: "biznus",
	},
	{
		title: "Blurr",
		price: "$50",
		image: "blurr.jpeg",
		url: "blurr",
	},
	{
		title: "Business Starter",
		price: "$50",
		image: "business-starter.png",
		url: "business-starter",
	},
	{
		title: "Castifye",
		price: "$50",
		image: "castifye.jpeg",
		url: "castifye",
	},
	{
		title: "Chomp",
		price: "$50",
		image: "chomp.png",
		url: "chomp",
	},
	{
		title: "Cleaners",
		price: "$50",
		image: "cleaners.png",
		url: "cleaners",
	},
	{
		title: "CoffeeStyle",
		price: "$50",
		image: "coffee-style.png",
		url: "coffee-style",
	},
	{
		title: "CrestFund",
		price: "$50",
		image: "crest-fund.jpeg",
		url: "crestfund",
	},
	{
		title: "Dashdark X",
		price: "$50",
		image: "dashdark-x.png",
		url: "dashdark-x",
	},
	{
		title: "Dashflow X",
		price: "$50",
		image: "dashflow-x.png",
		url: "dashflow-x",
	},
	{
		title: "Denali",
		price: "$50",
		image: "denali.jpeg",
		url: "denali",
	},
	{
		title: "DEVTask",
		price: "$50",
		image: "dev-task.jpeg",
		url: "dev-task",
	},
	{
		title: "Digital Makers",
		price: "$50",
		image: "digital-makers.jpeg",
		url: "digital-makers",
	},
	{
		title: "Donerun",
		price: "$50",
		image: "donerun.jpeg",
		url: "donerun",
	},
	{
		title: "Elysian Tennis",
		price: "$50",
		image: "elysian-tennis.jpeg",
		url: "elysian-tennis",
	},
	{
		title: "iftech",
		price: "$50",
		image: "iftech.png",
		url: "iftech",
	},
	{
		title: "Fortress",
		price: "$50",
		image: "fortress.jpeg",
		url: "fortress",
	},
	{
		title: "Kayo",
		price: "$50",
		image: "kayo.jpeg",
		url: "kayo",
	},
	{
		title: "Scrollvibe",
		price: "$50",
		image: "scroll-vibe.jpeg",
		url: "scrollvibe",
	},
	{
		title: "Sprring",
		price: "$50",
		image: "sprring.jpeg",
		url: "sprring",
	},
	{
		title: "Sandbox",
		price: "$50",
		image: "sandbox.jpeg",
		url: "sandbox",
	},
	{
		title: "Lawx",
		price: "$50",
		image: "lawx.jpeg",
		url: "lawx",
	},
	{
		title: "ElectraX",
		price: "$50",
		image: "electra-x.jpeg",
		url: "electrax",
	},
	{
		title: "Homeifye",
		price: "$50",
		image: "homeifye.jpeg",
		url: "homeifye",
	},
	{
		title: "ShutterShopX",
		price: "$50",
		image: "shutter-shop-x.jpeg",
		url: "shutter-shop-x",
	},
	{
		title: "Enigma AI Studio",
		price: "$50",
		image: "enigma-ai-studio.jpeg",
		url: "enigma-ai-studio",
	},
	{
		title: "Torch",
		price: "$50",
		image: "torch.png",
		url: "torch",
	},
	{
		title: "LeStudio*",
		price: "$50",
		image: "le-studio.png",
		url: "lestudio",
	},
	{
		title: "Spacekit",
		price: "$50",
		image: "space-kit.jpeg",
		url: "spacekit",
	},
	{
		title: "Zeal Consult",
		price: "$50",
		image: "zeal-consult.jpeg",
		url: "zeal-consult",
	},
	{
		title: "Roon",
		price: "$50",
		image: "roon.jpeg",
		url: "roon",
	},
	{
		title: "Castifye",
		price: "$50",
		image: "castifye.jpeg",
		url: "castifye",
	},
	{
		title: "Evento X",
		price: "$50",
		image: "evento-x.jpeg",
		url: "evento-x",
	},
	{
		title: "Wealth Bento",
		price: "$50",
		image: "wealth-bento.png",
		url: "wealth-bento",
	},
	{
		title: "MindSpring Light",
		price: "$50",
		image: "mind-spring-light.jpeg",
		url: "mind-spring-light",
	},
	{
		title: "Zeal Taste",
		price: "$50",
		image: "zeal-taste.jpeg",
		url: "zeal-taste",
	},
	{
		title: "Elegant Union",
		price: "$50",
		image: "elegant-union.jpeg",
		url: "elegant-union",
	},
	{
		title: "iDesigner Lite",
		price: "$50",
		image: "i-designer-lite.png",
		url: "idesigner-lite",
	},
	{
		title: "memos",
		price: "$50",
		image: "memos.png",
		url: "memos",
	},
	{
		title: "Sunny Lake",
		price: "$50",
		image: "sunny-lake.jpeg",
		url: "sunny-lake",
	},
	{
		title: "Entropy",
		price: "$50",
		image: "entropy.jpeg",
		url: "entropy",
	},
	{
		title: "MODUS Light",
		price: "$50",
		image: "modus-light.jpeg",
		url: "modus-light",
	},
	{
		title: "Tunnel Studio",
		price: "$50",
		image: "tunnel-studio.jpeg",
		url: "tunnel-studio",
	},
	{
		title: "FlowUp Team",
		price: "$50",
		image: "flow-up-team.png",
		url: "flowup-team",
	},
	// {
	// 	title: "HireUp",
	// 	price: "$50",
	// 	// image: "hire-up.jpeg",
	// 	url: "hireup",
	// },
	{
		title: "Memberbase",
		price: "$50",
		image: "member-base.jpeg",
		url: "memberbase",
	},
	{
		title: "Escape",
		price: "$50",
		image: "escape.jpeg",
		url: "escape",
	},
	{
		title: "Evermore",
		price: "$50",
		image: "ever-more.jpeg",
		url: "evermore",
	},
	{
		title: "Educare",
		price: "$50",
		image: "edu-care.jpeg",
		url: "edu-care",
	},
	{
		title: "Fitnesso",
		price: "$50",
		image: "fitnesso.png",
		url: "fitnesso",
	},
	{
		title: "Fre",
		price: "$50",
		image: "fre.jpeg",
		url: "fre",
	},
	{
		title: "Florence",
		price: "$50",
		image: "florance.jpeg",
		url: "florence",
	},
	{
		title: "Gallio",
		price: "$50",
		image: "gallio.jpeg",
		url: "gallio",
	},
	{
		title: "Incredible",
		price: "$50",
		image: "incredible.jpeg",
		url: "incredible",
	},
	{
		title: "Lamar",
		price: "$50",
		image: "lamar.jpeg",
		url: "lamar",
	},
	{
		title: "Mariela",
		price: "$50",
		image: "mariela.jpeg",
		url: "marielas",
	},
	{
		title: "Magnetic",
		price: "$50",
		image: "magnetic.jpeg",
		url: "magnetic",
	},
	{
		title: "Metric",
		price: "$50",
		image: "metric.jpeg",
		url: "metric",
	},
	{
		title: "Method",
		price: "$50",
		image: "method.jpeg",
		url: "method",
	},
	{
		title: "Minimal",
		price: "$50",
		image: "minimal.jpeg",
		url: "minimal",
	},
	{
		title: "Milton",
		price: "$50",
		image: "milton.jpeg",
		url: "milton",
	},
	{
		title: "Moon",
		price: "$50",
		image: "moon.jpeg",
		url: "moon",
	},
	{
		title: "Momentum",
		price: "$50",
		image: "momentum.jpeg",
		url: "momentum",
	},
	{
		title: "Newport",
		price: "$50",
		image: "newport.jpeg",
		url: "newport",
	},
	{
		title: "Notable",
		price: "$50",
		image: "notable.jpeg",
		url: "notable",
	},
	{
		title: "pixly",
		price: "$50",
		image: "pixly.jpeg",
		url: "pixly",
	},
	// {
	// 	title: "Pompeo",
	// 	price: "$50",
	// 	image: "pompeo.jpeg",
	// 	url: "pompeo",
	// },
	{
		title: "Propel",
		price: "$50",
		image: "propel.jpeg",
		url: "propel",
	},
	{
		title: "proof",
		price: "$50",
		image: "proof.jpeg",
		url: "proof",
	},
	{
		title: "Portfolio Starter",
		price: "$50",
		image: "portfolio-starter.png",
		url: "portfolio-starter",
	},
	{
		title: "Smith",
		price: "$50",
		image: "smith.jpeg",
		url: "smith",
	},
	{
		title: "Starter Templates",
		price: "$50",
		image: "starter.jpeg",
		url: "starter-templates",
	},
	{
		title: "Space",
		price: "$50",
		image: "space.jpeg",
		url: "space",
	},
	{
		title: "Startup",
		price: "$50",
		image: "startup.jpeg",
		url: "startup",
	},
	{
		title: "Store Starter",
		price: "$50",
		image: "store-starter.png",
		url: "store-starter",
	},
	{
		title: "Stone",
		price: "$50",
		image: "stone.jpeg",
		url: "stone",
	},
	{
		title: "TileDesign",
		price: "$50",
		image: "tile-design.jpeg",
		url: "tile-design",
	},
	{
		title: "Terminal",
		price: "$50",
		image: "terminal.jpeg",
		url: "terminal",
	},
	{
		title: "Toystore",
		price: "$50",
		image: "toy-store.jpeg",
		url: "toystore",
	},
	{
		title: "Tokyo",
		price: "$50",
		image: "tokyo.jpeg",
		url: "tokyo",
	},
	{
		title: "Uncommon",
		price: "$50",
		image: "uncommon.jpeg",
		url: "uncommon",
	},
	{
		title: "Versus",
		price: "$50",
		image: "versus.jpeg",
		url: "versus",
	},
	{
		title: "Velocity",
		price: "$50",
		image: "velocity.jpeg",
		url: "velocity",
	},
	{
		title: "Writeology X",
		price: "$50",
		image: "writeology-x.png",
		url: "writeology-x",
	},
]

export default templates