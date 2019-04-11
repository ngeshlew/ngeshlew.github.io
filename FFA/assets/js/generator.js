function generator() {
	// word lists
	var first = ["Travel", "Banking", "Business Supplies and Equipment", "Chemicals", "Commercial Real Estate", "Computer Games", "Consumer Electronics", "Dairy", "Defense & Space", "Design", "Farming", "Higher Education", "Investment Banking", "Legal Services", "Market Research", "Media Production", "Mining & Metals", "Newspapers", "Pharmaceuticals", "Research", "Retail", "Think Tanks", "Utilities", "Writing and Editing"];
	var second = ["Bring an offline behaviour online", "Make it a rental", "Make it cheaper", "Create a marketplace", "Create original or exclusive content", "Simplify a process", "Make it a service / on demand", "Make it mobile native", "Remove features to launch a simpler product", "Target specific segment", "Create a full stack offering", "Build a community", "Make it peer-to-peer", "Target an emerging market", "Make an intermediary layer", "Remove a middleman", "Apply blockchain", "Democratise something expensive", "Look at startups in other markets"];
	var third = ["Early exit strategy", "Pay-what-you-want", "Freemium model", "Commission-based model", "Auction model", "Advertisement model", "Affiliate fee", "Get-one-give-one model", "Franchise model", "Subscription model", "Pay-per-use model", "License fees", "Single purchase model", "Pay-as-you-go model", "Razor and blade model", "Crowdfunding", "Open source model", "No frills model"];
	
	// generate idea
	var idea = "Our new opportunity is disrupting the " + first[Math.floor(Math.random() * first.length)] + " industry when our solution will " + second[Math.floor(Math.random() * second.length)] + " and we will make money by using  " + third[Math.floor(Math.random() * third.length)] + " as a business model.";

	//alert(name);

	// remove name div if existing
	if (document.getElementById("idea")) {
		document.getElementById("placeholder").removeChild(document.getElementById("idea"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "idea");
	element.appendChild(document.createTextNode(idea));
	document.getElementById("placeholder").appendChild(element);
}