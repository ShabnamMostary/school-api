CREATE DATABASE school;
CREATE USER 'admin77'@'localhost' IDENTIFIED WITH mysql_native_password BY 'school77';
GRANT ALL ON school.* TO 'admin77'@'localhost';
USE school;
CREATE TABLE departments (
 id INT auto_increment,
 name VARCHAR(255),
 email VARCHAR(320),
 building VARCHAR(255),
 createdAt DATETIME DEFAULT NOW(),
 updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
 deletedAt DATETIME,
 PRIMARY KEY(id)
);
CREATE TABLE faculty (
 id INT auto_increment,
 name VARCHAR(255),
 departmentId INT,
 email VARCHAR(320),
 research_area VARCHAR(255),
 createdAt DATETIME DEFAULT NOW(),
 updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
 deletedAt DATETIME,
 PRIMARY KEY(id),
 FOREIGN KEY(departmentId) REFERENCES departments(id)
);
CREATE TABLE students (
 id INT auto_increment,
 name VARCHAR(255),
 departmentId INT,
 email VARCHAR(320),
 research_area VARCHAR(255),
 createdAt DATETIME DEFAULT NOW(),
 updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
 deletedAt DATETIME,
 PRIMARY KEY(id),
 FOREIGN KEY(departmentId) REFERENCES departments(id)
);
INSERT INTO departments (name,email,building)
Values ('Computer Engineering','cse@school.edu','E301 CSE Building'),
('Electrical Engineering','eee@school.edu','216 LARSEN HALL'),
('Mechanical Engineering','me@school.edu','307 Weil Hall'),
('Civil Engineering','ce@school.edu','365 Weil Hall');

INSERT INTO faculty (name, departmentId, email, research_area) values ('Alric Bockh', 4, 'Alric.Bockh@ce.school.edu', 'structural dynamics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Esther Szach', 3, 'Esther.Szach@me.school.edu', 'fluid dynamics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Marcy Giraudat', 4, 'Marcy.Giraudat@ce.school.edu', 'traffic operations');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Cortie Penburton', 1, 'Cortie.Penburton@cse.school.edu', 'machine learning');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Raviv McAtamney', 3, 'Raviv.McAtamney@me.school.edu', 'fluid dynamics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Scott Challicum', 4, 'Scott.Challicum@ce.school.edu', 'traffic operations');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Orren Morritt', 2, 'Orren.Morritt@eee.school.edu', 'devices');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Binny Ziemsen', 4, 'Binny.Ziemsen@ce.school.edu', 'climate change');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Burgess Robak', 1, 'Burgess.Robak@cse.school.edu', 'graphics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Anastassia Grieger', 1, 'Anastassia.Grieger@cse.school.edu', 'networking');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Arleyne Brame', 2, 'Arleyne.Brame@eee.school.edu', 'electronics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Amity Gallahar', 3, 'Amity.Gallahar@me.school.edu', 'solid mechanics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Claude Jerzyk', 4, 'Claude.Jerzyk@ce.school.edu', 'traffic operations');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Jenine Cullinane', 1, 'Jenine.Cullinane@cse.school.edu', 'machine learning');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Jaquith Flintoft', 3, 'Jaquith.Flintoft@me.school.edu', 'systems');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Prince Schutt', 1, 'Prince.Schutt@cse.school.edu', 'database');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Janelle Tabrett', 3, 'Janelle.Tabrett@me.school.edu', 'systems');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Muffin Stronghill', 1, 'Muffin.Stronghill@cse.school.edu', 'machine learning');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Mimi Kirsz', 3, 'Mimi.Kirsz@me.school.edu', 'solid mechanics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Thurstan Dybell', 2, 'Thurstan.Dybell@eee.school.edu', 'devices');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Gilberta Mithun', 2, 'Gilberta.Mithun@eee.school.edu', 'devices');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Sandye Glaister', 1, 'Sandye.Glaister@cse.school.edu', 'graphics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Sean Hounsome', 2, 'Sean.Hounsome@eee.school.edu', 'devices');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Darcee Crosfield', 2, 'Darcee.Crosfield@eee.school.edu', 'signals');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Jeannine Burrow', 3, 'Jeannine.Burrow@me.school.edu', 'systems');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Major Giaomozzo', 2, 'Major.Giaomozzo@eee.school.edu', 'electronics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Penny McNab', 1, 'Penny.McNab@cse.school.edu', 'graphics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Ingemar Campanelli', 4, 'Ingemar.Campanelli@ce.school.edu', 'structural dynamics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Randolph Teager', 2, 'Randolph.Teager@eee.school.edu', 'electronics');
INSERT INTO faculty (name, departmentId, email, research_area) values ('Phillipe Bussel', 4, 'Phillipe.Bussel@ce.school.edu', 'structural dynamics');

INSERT INTO students (name, departmentId, email, research_area) values ('Isidora Matteotti', 4, 'Isidora.Matteotti@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Carmelina Itchingham', 2, 'Carmelina.Itchingham@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Johnette Bytheway', 2, 'Johnette.Bytheway@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Cairistiona Antczak', 4, 'Cairistiona.Antczak@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Jaquenetta Hammerstone', 3, 'Jaquenetta.Hammerstone@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Eileen Anselmi', 2, 'Eileen.Anselmi@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Craggie Draisey', 4, 'Craggie.Draisey@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Benedetta Keir', 1, 'Benedetta.Keir@cse.school.edu', 'database');
INSERT INTO students (name, departmentId, email, research_area) values ('Hewie Gothup', 3, 'Hewie.Gothup@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Nickola Ambler', 2, 'Nickola.Ambler@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Lorraine Fitzackerley', 1, 'Lorraine.Fitzackerley@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Jaye Eves', 3, 'Jaye.Eves@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Petronia Bodman', 4, 'Petronia.Bodman@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Bryna Briamo', 2, 'Bryna.Briamo@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Flo Gurge', 4, 'Flo.Gurge@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Ethel Bushnell', 2, 'Ethel.Bushnell@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Rurik Eighteen', 2, 'Rurik.Eighteen@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Wolfgang Helkin', 2, 'Wolfgang.Helkin@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Linda Cater', 2, 'Linda.Cater@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Coretta Lenin', 4, 'Coretta.Lenin@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Ardyce Ankers', 4, 'Ardyce.Ankers@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Mile Booley', 2, 'Mile.Booley@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Carilyn Starzaker', 4, 'Carilyn.Starzaker@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Ida Thring', 1, 'Ida.Thring@cse.school.edu', 'database');
INSERT INTO students (name, departmentId, email, research_area) values ('Lucina Ornelas', 2, 'Lucina.Ornelas@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Cazzie Gainor', 4, 'Cazzie.Gainor@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Reggis Proughten', 2, 'Reggis.Proughten@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Maurizia Bizley', 1, 'Maurizia.Bizley@cse.school.edu', 'database');
INSERT INTO students (name, departmentId, email, research_area) values ('Maddy Callf', 3, 'Maddy.Callf@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Gabriel Bagster', 2, 'Gabriel.Bagster@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Fee Boaler', 4, 'Fee.Boaler@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Sandy Hasard', 3, 'Sandy.Hasard@me.school.edu', 'solid mechanics');
INSERT INTO students (name, departmentId, email, research_area) values ('Maurie Edmonson', 3, 'Maurie.Edmonson@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Benita Pickle', 1, 'Benita.Pickle@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Krystal Hardwick', 3, 'Krystal.Hardwick@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Morena Caton', 3, 'Morena.Caton@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Kaleb Freddi', 1, 'Kaleb.Freddi@cse.school.edu', 'machine learning');
INSERT INTO students (name, departmentId, email, research_area) values ('Allix Ravenshaw', 4, 'Allix.Ravenshaw@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Salli Plaster', 2, 'Salli.Plaster@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Kelsi Goadby', 1, 'Kelsi.Goadby@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Simon Barrar', 2, 'Simon.Barrar@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Bordie Dudeney', 2, 'Bordie.Dudeney@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Cristobal Teck', 1, 'Cristobal.Teck@cse.school.edu', 'machine learning');
INSERT INTO students (name, departmentId, email, research_area) values ('Francklyn MacNulty', 4, 'Francklyn.MacNulty@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Kimberly Martinho', 3, 'Kimberly.Martinho@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Nanine Hew', 1, 'Nanine.Hew@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Rourke Ferre', 4, 'Rourke.Ferre@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Merridie Brimelow', 2, 'Merridie.Brimelow@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Brigida Docker', 2, 'Brigida.Docker@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Guthry Slocom', 1, 'Guthry.Slocom@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Leonore Lowell', 3, 'Leonore.Lowell@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Jody Connop', 1, 'Jody.Connop@cse.school.edu', 'machine learning');
INSERT INTO students (name, departmentId, email, research_area) values ('Jannel Corrane', 3, 'Jannel.Corrane@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Yorgos Fidgin', 2, 'Yorgos.Fidgin@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Thor Wornum', 3, 'Thor.Wornum@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Shantee Crowche', 3, 'Shantee.Crowche@me.school.edu', 'solid mechanics');
INSERT INTO students (name, departmentId, email, research_area) values ('Edita Elsmor', 1, 'Edita.Elsmor@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Dreddy Abramamovh', 3, 'Dreddy.Abramamovh@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Boonie Corsor', 3, 'Boonie.Corsor@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Tessi Ife', 2, 'Tessi.Ife@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Taryn Jozwicki', 1, 'Taryn.Jozwicki@cse.school.edu', 'database');
INSERT INTO students (name, departmentId, email, research_area) values ('Amara Soitoux', 2, 'Amara.Soitoux@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Frank Baccup', 3, 'Frank.Baccup@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Allyn Cuttell', 4, 'Allyn.Cuttell@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Cordula Hruska', 3, 'Cordula.Hruska@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Tammi Kornyakov', 2, 'Tammi.Kornyakov@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Bella Niezen', 3, 'Bella.Niezen@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Shellie Barsam', 2, 'Shellie.Barsam@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Eleen Grinaway', 4, 'Eleen.Grinaway@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Linell Maylam', 1, 'Linell.Maylam@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Sloane Pannaman', 2, 'Sloane.Pannaman@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Garth Liptrot', 3, 'Garth.Liptrot@me.school.edu', 'solid mechanics');
INSERT INTO students (name, departmentId, email, research_area) values ('Darice Gheeraert', 3, 'Darice.Gheeraert@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Milty Chattock', 2, 'Milty.Chattock@eee.school.edu', 'signals');
INSERT INTO students (name, departmentId, email, research_area) values ('Newton Streeter', 2, 'Newton.Streeter@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Cinda Wilbud', 2, 'Cinda.Wilbud@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Jordan Dorkin', 4, 'Jordan.Dorkin@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Saxe Mitchel', 1, 'Saxe.Mitchel@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Arlana Chaffyn', 3, 'Arlana.Chaffyn@me.school.edu', 'solid mechanics');
INSERT INTO students (name, departmentId, email, research_area) values ('Sadye Noli', 4, 'Sadye.Noli@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Beilul Lotterington', 1, 'Beilul.Lotterington@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Shirlee MacKeague', 3, 'Shirlee.MacKeague@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Wilhelmine Crus', 1, 'Wilhelmine.Crus@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Charmain Keener', 1, 'Charmain.Keener@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Manuel Andrivot', 1, 'Manuel.Andrivot@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Chrisse Paschek', 4, 'Chrisse.Paschek@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Leona Linkin', 2, 'Leona.Linkin@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Clarisse Paulmann', 4, 'Clarisse.Paulmann@ce.school.edu', 'traffic operations');
INSERT INTO students (name, departmentId, email, research_area) values ('Wallache McCallum', 4, 'Wallache.McCallum@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Larry Scrivner', 2, 'Larry.Scrivner@eee.school.edu', 'devices');
INSERT INTO students (name, departmentId, email, research_area) values ('Eugenia Stemson', 3, 'Eugenia.Stemson@me.school.edu', 'fluid dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Issiah Ellison', 2, 'Issiah.Ellison@eee.school.edu', 'electronics');
INSERT INTO students (name, departmentId, email, research_area) values ('Martino Dupre', 1, 'Martino.Dupre@cse.school.edu', 'networking');
INSERT INTO students (name, departmentId, email, research_area) values ('Yovonnda Goodbar', 4, 'Yovonnda.Goodbar@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Missy Kidstoun', 3, 'Missy.Kidstoun@me.school.edu', 'systems');
INSERT INTO students (name, departmentId, email, research_area) values ('Brockie Milsap', 4, 'Brockie.Milsap@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Efren Crickmoor', 4, 'Efren.Crickmoor@ce.school.edu', 'structural dynamics');
INSERT INTO students (name, departmentId, email, research_area) values ('Janey Swannell', 4, 'Janey.Swannell@ce.school.edu', 'climate change');
INSERT INTO students (name, departmentId, email, research_area) values ('Wally McCrann', 1, 'Wally.McCrann@cse.school.edu', 'graphics');
INSERT INTO students (name, departmentId, email, research_area) values ('Marcelline Videneev', 3, 'Marcelline.Videneev@me.school.edu', 'systems');

