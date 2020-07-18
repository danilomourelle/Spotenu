```SQL
CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(15),
    is_active BOOLEAN DEFAULT 0
    );

CREATE TABLE Playlist (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    customer_id VARCHAR(255) NOT NULL,
    is_collaborative BOOLEAN DEFAULT 0,
    FOREIGN KEY (customer_id) REFERENCES Users (id)
    );
    
CREATE TABLE UserPlaylistRelation (
	user_creator_id VARCHAR(255) NOT NULL,
    playlist_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_creator_id) REFERENCES Users (id),
    FOREIGN KEY (playlist_id) REFERENCEs Playlist (id));  
    
CREATE TABLE Albums (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    band_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (band_id) REFERENCES Users (id)
    );
    
CREATE TABLE Genre (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
    );

CREATE TABLE AlbumGenreRelation (
	album_id VARCHAR(255) NOT NULL,
    genre_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (album_id) REFERENCES Albums (id),
    FOREIGN KEY (genre_id) REFERENCEs Genre (id)
    );
    
CREATE TABLE Musics (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    band_id VARCHAR(255) NOT NULL,
    album_id VARCHAR(255) NOT NULL,
    source_link VARCHAR(255),
    FOREIGN KEY (band_id) REFERENCES Users (id),
    FOREIGN KEY (album_id) REFERENCES Albums (id)
    );

CREATE TABLE MusicPlaylistRelation (
	music_id VARCHAR(255) NOT NULL,
    playlist_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (music_id) REFERENCES Musics (id),
    FOREIGN KEY (playlist_id) REFERENCEs Playlist (id)
    );
```