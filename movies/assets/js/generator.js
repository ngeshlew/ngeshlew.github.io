function generator() {
	// word lists
	var list = ["Hannibal Lecter Trilogy: The Silence of the Lambs (1991) | Hannibal (2001) | Red Dragon (2002)", 
				"Mission: Impossible: Mission: Impossible (1996) | Mission: Impossible II (2000) | Mission: Impossible III (2006)" , 
				"The Mariachi Trilogy: El Mariachi (1992) | Desperado (1995) | Once Upon A Time In Mexico (2003)", 
				"Terminator: The Terminator (1985) | Terminator 2: Judgment Day (1991) | Terminator 3: Rise of the Machines (2003)", 
				"X-Men: X-Men (2000) | X-Men 2 (2003) | X-Men: The Last Stand (2006)", 
				"The Spider-Man Trilogy: Spider-Man (2002) | Spider-Man 2 (2004) | Spider-Man 3 (2007)", 
				"Pirates of the Caribbean: Pirates of the Caribbean: The Curse of the Black Pearl (2003) | Pirates of the Caribbean: Dead Man's Chest (2006) | Pirates of the Caribbean: At World's End (2007)", 
				"The Matrix Trilogy: The Matrix (1999) | The Matrix Reloaded (2003) | The Matrix Revolutions (2003) ",
				"The Bourne Trilogy: The Bourne Identity (2002) | The Bourne Supremacy (2004) | The Bourne Ultimatum (2007)", 
				"The Godfather Trilogy: The Godfather (1972) | The Godfather: Part II (1974) | The Godfather: Part III (1990)", 
				"Toy Story: Toy Story (1995) | Toy Story 2 (1999) | Toy Story 3 (2010) | Toy Story 4 (2019)", 
				"The Lord of the Rings: The Lord of the Rings: The Fellowship of the Ring (2001) | The Lord of the Rings: The Two Towers (2002) | The Lord of the Rings: The Return of the King (2003)", 
				"12 Rounds: 12 Rounds (2009) | 12 Rounds 2: Reloaded (2013) | 12 Rounds 3: Lockdown (2015)",
				"2012: 2012: Doomsday (2008) | 2012: Supernova (2009) | 2012: Ice Age (2011)",
				"Disney's Aladdin: Aladdin (1992) | The Return of Jafar (1994) | Aladdin and the King of Thieves (1996) ",
				"The Chronicles of Narnia: The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) | The Chronicles of Narnia: Prince Caspian (2008) | The Chronicles of Narnia: The Voyage of the Dawn Treader (2010)",
				"Charlie's Angels: Charlie's Angels (2000) | Charlie's Angels: Full Throttle (2003) | Charlie's Angels (2019)",
				"The Chronicles of Riddick: Pitch Black (2000) | The Chronicles of Riddick (2004) | Riddick (2013)",
				"The Dark Knight Trilogy: Batman Begins (2005) | The Dark Knight (2008) | The Dark Knight Rises (2012)",
				"The Divergent Series: Divergent (2014) | The Divergent Series: Insurgent (2015) | The Divergent Series: Allegiant (2016)",
				"Dumb and Dumber: Dumb and Dumber (1994) | Dumb and Dumberer: When Harry Met Lloyd (2003) | Dumb and Dumber To (2014)",
				"Escape Plan: Escape Plan (2013) | Escape Plan 2: Hades (2018) | Escape Plan: The Extractors (2019)",
				"The Expendables: The Expendables (2010) | The Expendables 2 (2012) | The Expendables 3 (2014)",
				"Fifty Shades: Fifty Shades of Grey (2015) | Fifty Shades Darker (2017) | Fifty Shades Freed (2018)",
				"Ghostbusters: Ghostbusters (1984) | Ghostbusters II (1989) | Ghostbusters 2020 (2020)",
				"G.I. Joe: G.I. Joe: The Movie (1987) | G.I. Joe: Spy Troops (2003) | G.I. Joe: Valor vs. Venom (2004)",
				"God's Not Dead: God's Not Dead (2014) | God's Not Dead 2 (2016) | God's Not Dead: A Light in Darkness (2018)",
				"Gone in 60 Seconds: Gone in 60 Seconds (1974) | The Junkman (1982) | Deadline Auto Theft (1983)",
				"The Hangover (film series): The Hangover (2009) | The Hangover Part II (2011) | The Hangover Part III (2013)",
				"Harold & Kumar: Harold & Kumar Go to White Castle (2004) | HHarold & Kumar Escape from Guantanamo Bay (2008) | A Very Harold & Kumar 3D Christmas (2011)",
				"Has Fallen: Olympus Has Fallen (2013) | London Has Fallen (2016) | Angel Has Fallen (2019)",
				"Hotel Transylvania: Hotel Transylvania (2012) | Hotel Transylvania 2 (2015) | Hotel Transylvania 3: Summer Vacation (2018)",
				"How to Train Your Dragon: How to Train Your Dragon (2010) | How to Train Your Dragon 2 (2014) | How to Train Your Dragon: The Hidden World (2019)",
				"I Know What You Did Last Summer: I Know What You Did Last Summer (1997) | I Still Know What You Did Last Summer (1998) | I'll Always Know What You Did Last Summer (2006)",
				"John Wick: John Wick (2014) | John Wick: Chapter 2 (2017) | John Wick: Chapter 3 – Parabellum (2019)",
				"Johnny English: Johnny English (2003) | Johnny English Reborn (2011) | Johnny English Strikes Again (2018)",
				"Kung Fu Panda: Kung Fu Panda (2008) | Kung Fu Panda 2 (2011) | Kung Fu Panda 3 (2016)",
				"Maze Runner: The Maze Runner (2014) | Maze Runner: The Scorch Trials (2015) | Maze Runner: The Death Cure (2018)",
				"Millennium series: The Girl With The Dragon Tattoo (2009) | The Girl Who Played With Fire (2009) | The Girl Who Kicked The Hornets' Nest (2009)",
				"Pitch Perfect: Pitch Perfect (2012) | Pitch Perfect 2 (2015) | Pitch Perfect 3 (2017)",
				"Robert Langdon: The Da Vinci Code (2006) | Angels & Demons (2009) | Inferno (2016)",
				"RoboCop: RoboCop (1987) | RoboCop 2 (1990) | RoboCop 3 (1993)",
				"Rush Hour: Rush Hour (1998) | Rush Hour 2 (2001) | Rush Hour 3 (2007)",
				"S.W.A.T.: S.W.A.T. (2003) | S.W.A.T.: Firefight (2011) | S.W.A.T.: Under Siege (2017)",
				"Taken: Taken (2008) | Taken 2 (2012) | Taken 3 (2014)",
				"The Transformers: The Transformers: The Movie (1986) | The Transformers: Five Faces of Darkness (1986) | The Transformers: The Return of Optimus Prime (1987)",
				"The Untouchables: The Scarface Mob (1959) | The Revenge of Al Capone (1989) | The Return of Eliot Ness (1991)",
				"Unbreakable: Unbreakable (2000) | Split (2016) | Glass (2019)",
				"The Wizard of Oz: The Wizard of Oz (1939) | Return to Oz (1985) | Oz the Great and Powerful (2013) ",
				"XXX: XXX (2002) | XXX: State of the Union (2005) | XXX: Return of Xander Cage (2017)",
				"Walking Tall: Walking Tall (2004) | Walking Tall: The Payback (2007) | Walking Tall: Lone Justice (2007) ",
				"You Got Served: You Got Served (2004) | You Got Served: Beat the World (2011) | You Got Served 2 (2019)",
				"The Cornetto Trilogy: Shaun of the Dead (2004) | Hot Fuzz (2007) | At World’s End (2013)",
				"The Before Trilogy: Before Sunrise (1995) | Before Sunset (2004) | Before Midnight (2013)",
				"Death Race: Death Race (2008) | Death Race 2 (2011) | Death Race 3: Inferno (2013) | Death Race: Beyond Anarchy (2018)",
				"The Hunger Games: The Hunger Games (2012) | The Hunger Games: Catching Fire (2013) | The Hunger Games: Mockingjay – Part 1 (2014) | The Hunger Games: Mockingjay – Part 2 (2015)",
				"The Lion King: The Lion King (1994) | The Lion King II: Simba's Pride (1998) | The Lion King 1½ (2004) | The Lion Guard: Return of the Roar (2015)",
				"Madagascar: Madagascar (2005) | Madagascar: Escape 2 Africa (2008) | Madagascar 3: Europe's Most Wanted (2012) | Penguins of Madagascar (2014)",
				"Men in Black: Men in Black (1997) | Men in Black II (2002) | Men in Black 3 (2012) | Men in Black: International (2019)",
				"Ocean's: Ocean's Eleven (2001) | Ocean's Twelve (2004) | Ocean's Thirteen (2007) | Ocean's 8 (2018)",
				"The Purge: The Purge (2013) | The Purge: Anarchy (2014) | The Purge: Election Year (2016) | The First Purge (2018)",
				"Transporter: The Transporter (2002) | Transporter 2 (2005) | Transporter 3 (2008) | The Transporter Refueled (2015)",
				"Undisputed: Undisputed (2002) | Undisputed II: Last Man Standing (2007) | Undisputed III: Redemption (2010) | Boyka: Undisputed (2017)"
				];
	
	var movie = list[Math.floor(Math.random() * list.length)];

	// getElementById returns the element that has the ID attribute with the specified value.
	// remove name div if existing
	if (document.getElementById("movie")) {
		document.getElementById("placeholder").removeChild(document.getElementById("movie"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "movie");
	element.appendChild(document.createTextNode(movie));
	document.getElementById("placeholder").appendChild(element);
}



