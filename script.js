const episodes = [
  //episodio 005
	{
		name: "#005 - Previsioni che si sono avverate subito ft. Lorenzo",
		
		description: "Episodio con Lorenzo registrato a febbraio",
		
		date: "26 feb 2022",
		
		// length in minutes
		length: 45,
		
		spotifyLink: "https://open.spotify.com/episode/6xEydQPulBxqQeKpFZGI7Zgo=1&sp_cid=45dc991a95447926fd5b01bffc8df363&t=1&utm_source=embed_player_p&utm_medium=desktop&nd=1",	
		
		cover: "../cover/005.jpg",
		
		pageLink: "../ep/005/ep005.html"
	},
  
  //episodio 004
  {
		name: "#004 - Scimmie infinite e risposte a tutte le domande del mondo",
		
		description: "Library of Babel",
		
		date: "13 feb 2022",
		
		// length in minutes
		length: 20,
		
		spotifyLink: 
"https://open.spotify.com/episode/64ArWnIbVUiGAGkUOx5ZG1?  si=9364165586764ada",	
		
		cover: "../cover/005.jpg",
		
		pageLink: "../ep/004/ep004.html"
	},
  
  //episodio 003
  {
		name: "#003 - Joe Rogan, cannibalismo, Russia, razzi stampati in 3d e criceti",
		
		description: "Library of Babel",
		
		date: "26 gen 2022",
		
		// length in minutes
		length: 25,
		
		spotifyLink: 
"https://open.spotify.com/episode/0VKXewXMeOA1SvABoXjfkg?si=64c10c2bbaaf4eb0",	
		
		cover: "../cover/005.jpg",
		
		pageLink: "../ep/003/ep003.html"
	},
  
  //episodio 002
  {
		name: "#002 - Civiltà perdute, teologi alla NASA, alieni asteroidi e Metaverso",
		
		description: "Library of Babel",
		
		date: "27 dic 2021",
		
		// length in minutes
		length: 34,
		
		spotifyLink: 
"https://open.spotify.com/episode/4raHbALZUTTCTAZS2XUwCY?si=f222aa65f9c04f3e",	
		
		cover: "../cover/005.jpg",
		
		pageLink: "../ep/002/ep002.html"
	},
  
  //episodio 001
  {
		name: "#001 - Scuola Italiana e Canada con Edoardo Taddia",
		
		description: "Library of Babel",
		
		date: "21 nov 2021",
		
		// length in minutes
		length: 38,
		
		spotifyLink: 
"https://open.spotify.com/episode/40Cx62u2sbg3UiiFVGP7tE?si=8af8ce2352514d0f",	
		
		cover: "../cover/005.jpg",
		
		pageLink: "../ep/001/ep001.html"
	} 

]

const episodeList = document.getElementById("episode-list")

function renderEpisodes(){
		let episodesDOM = ""
		for (let i = 0; i < episodes.length; i++){

				episodesDOM += `
				<div class = "preview">
					<div class ="post-cover">
						<a href =${episodes[i].pageLink}><img class ="cover-img" src = ${episodes[i].cover}></a>
					</div>
					<div class ="post-text">
						<div class = "post-title">
							<a href =${episodes[i].pageLink}><h2>${episodes[i].name}</h2></a>
					  </div>
						<div class = "post-description">
							<p class = "description-text">${episodes[i].description}</p>
							<div class = "play-date-dur">
								<div class = "icon-wrapper">
									<a href =${episodes[i].spotifyLink}><img src = "play-button.png" class ="icon"></a>
								</div>
								<div class ="date-dur-wrapper">
									<p class ="date">${episodes[i].date} · ${episodes[i].length} min</p>
								</div>
							</div>
						</div>
					</div>
				</div>

`
		episodeList.innerHTML = episodesDOM
		}
}
renderEpisodes()