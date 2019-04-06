function generator() {
	// word lists
	var character = ["A decorator", "A film producer", "A sportsperson", "A hairdresser", "A barber", "An engineer", "A police officer", "A journalist", "An actor", "A nurse", "A singer" ,"An actor" ,"A shopkeeper", "A dancer", "A doctor", "A teacher","A housewife", "A child", "A construction worker", "A scientist", "A soldier", "A farmer", "An astronaut" , "An artist", "A janitor", "A business owner" , "A retired musician" , "A college professor", "A pilot"];
	var conflict = ["dialing. Ringing. Into voicemail again", "notices the wedding ring", "sits next to her. Neither one says a word", "sets the glass down on the end of the table", "packs stuff from the drawers and on shelves", "talking to themselves in the mirror as if participating in a TV interview", "pulls up on an old-looking brown house with ugly bars on the windows and doors", "leans at a big window, looking out over Nairobi", "hears the sound of a plane landing over at night", "hears sounds of winding movements on various timepieces, tick tock. The rhythm overwhelming", "pans across several empty tables", "can almost smell the odor of last nights beer", "lurches up the stairs two at a time", "breaks out of the crowd" ,"experiences a death in the family", "invents something amazing", "subconscious transferred into a robot", "has an imaginary friend", "moves to a new place", "meets a talking animal"];
	// generate name
	var story = character[Math.floor(Math.random() * character.length)] + " " + conflict[Math.floor(Math.random() * conflict.length)] + " " ;

	//alert(name);

	// remove name div if existing
	if (document.getElementById("story")) {
		document.getElementById("placeholder").removeChild(document.getElementById("story"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "story");
	element.appendChild(document.createTextNode(story));
	document.getElementById("placeholder").appendChild(element);
}