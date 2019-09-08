function generator() {
	// word lists
	var list = ["&#x265F;&#xFE0F; Behavioral Economics: The Bank's Secret Weapon | 32 pages", 
				"&#x1F3A8; UX Design For Startups | 127 pages", 
				"&#x1F3A8; Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation | 272 pages | 6 hours 49 minutes to read", 
				"&#x1F3A8; Creative Confidence: Unleashing the Creative Potential Within Us All | 288 pages | 6 hours 23 minutes to read", 
				"&#x1F3A8; Lean Analytics: Use Data to Build a Better Startup Faster | 440 pages | 11 hours 19 minutes to read", 
				"&#x265F;&#xFE0F; Predictably Irrational: The Hidden Forces That Shape Our Decisions | 400 pages | 6 hours 36 minutes to read.", 
				"&#x1F3A8; Just Enough Research | 154 pages | 3 hours 58 minutes to read", 
				"&#x1F3A8; The User Experience Team of One: A Research and Design Survival Guide | 264 pages | 6 hours 47 minutes to read.", 
				"&#x265F;&#xFE0F; The Design of Everyday Things | 240 pages | 9 hours 32 minutes to read", 
				"&#x1F3A8; Intercom on Onboarding | 108 pages | 3 hours 5 minutes to read.", 
				"&#x1F3A8; Homo Deus: A History of Tomorrow | 450 pages | 13 hours 20 minutes to read", 
				"&#x1F3A8; The Making of a Manager: What to Do When Everyone Looks to You | 288 pages | 6 hours 45 minutes to read", 
				"&#x1F3A8; Mere Christianity | 227 pages | 5 hours 14 minutes to read"];
	
	var book = list[Math.floor(Math.random() * list.length)];

	// getElementById returns the element that has the ID attribute with the specified value.
	// remove name div if existing
	if (document.getElementById("book")) {
		document.getElementById("placeholder").removeChild(document.getElementById("book"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "book");
	element.appendChild(document.createTextNode(book));
	document.getElementById("placeholder").appendChild(element);
}



