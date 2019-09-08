function generator() {
	// word lists
	var list = ["Travel", "Banking", "Business Supplies and Equipment", "Chemicals", "Commercial Real Estate", "Computer Games", "Consumer Electronics", "Dairy", "Defense & Space", "Design", "Farming", "Higher Education", "Investment Banking", "Legal Services", "Market Research", "Media Production", "Mining & Metals", "Newspapers", "Pharmaceuticals", "Research", "Retail", "Think Tanks", "Utilities", "Writing and Editing"];
	var Time = ["Bring an offline behaviour online", "Make it a rental", "Make it cheaper", "Create a marketplace", "Create original or exclusive content", "Simplify a process", "Make it a service / on demand", "Make it mobile native", "Remove features to launch a simpler product", "Target specific segment", "Create a full stack offering", "Build a community", "Make it peer-to-peer", "Target an emerging market", "Make an intermediary layer", "Remove a middleman", "Apply blockchain", "Democratise something expensive", "Look at startups in other markets"];
	
	// [Math.floor(Math.random() * first.length)] returns a random integer from Travel to Writing and Editing
	var book = "The book is " + list[Math.floor(Math.random() * list.length)] + " and duration to read is " + time[Math.floor(Math.random() * time.length)] + " and see you when you finish this one!";

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