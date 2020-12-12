/* eslint-disable max-len */
module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('departments', [
      { 'name': 'Computer Engineering', 'email': 'cse@school.edu', 'building': 'E301 CSE Building' },
      { 'name': 'Electrical Engineering', 'email': 'eee@school.edu', 'building': '216 LARSEN HALL' },
      { 'name': 'Mechanical Engineering', 'email': 'me@school.edu', 'building': '307 Weil Hall' },
      { 'name': 'Civil Engineering', 'email': 'ce@school.edu', 'building': '365 Weil Hall' }
    ])
    await queryInterface.bulkInsert('faculty', [
      { 'name': 'Alric Bockh', 'departmentId': 4, 'email': 'Alric.Bockh@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Esther Szach', 'departmentId': 3, 'email': 'Esther.Szach@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Marcy Giraudat', 'departmentId': 4, 'email': 'Marcy.Giraudat@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Cortie Penburton', 'departmentId': 1, 'email': 'Cortie.Penburton@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Raviv McAtamney', 'departmentId': 3, 'email': 'Raviv.McAtamney@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Scott Challicum', 'departmentId': 4, 'email': 'Scott.Challicum@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Orren Morritt', 'departmentId': 2, 'email': 'Orren.Morritt@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Binny Ziemsen', 'departmentId': 4, 'email': 'Binny.Ziemsen@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Burgess Robak', 'departmentId': 1, 'email': 'Burgess.Robak@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Anastassia Grieger', 'departmentId': 1, 'email': 'Anastassia.Grieger@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Arleyne Brame', 'departmentId': 2, 'email': 'Arleyne.Brame@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Amity Gallahar', 'departmentId': 3, 'email': 'Amity.Gallahar@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Claude Jerzyk', 'departmentId': 4, 'email': 'Claude.Jerzyk@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Jenine Cullinane', 'departmentId': 1, 'email': 'Jenine.Cullinane@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Jaquith Flintoft', 'departmentId': 3, 'email': 'Jaquith.Flintoft@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Prince Schutt', 'departmentId': 1, 'email': 'Prince.Schutt@cse.school.edu', 'research_area': 'database' },
      { 'name': 'Janelle Tabrett', 'departmentId': 3, 'email': 'Janelle.Tabrett@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Muffin Stronghill', 'departmentId': 1, 'email': 'Muffin.Stronghill@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Mimi Kirsz', 'departmentId': 3, 'email': 'Mimi.Kirsz@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Thurstan Dybell', 'departmentId': 2, 'email': 'Thurstan.Dybell@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Gilberta Mithun', 'departmentId': 2, 'email': 'Gilberta.Mithun@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Sandye Glaister', 'departmentId': 1, 'email': 'Sandye.Glaister@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Sean Hounsome', 'departmentId': 2, 'email': 'Sean.Hounsome@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Darcee Crosfield', 'departmentId': 2, 'email': 'Darcee.Crosfield@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Jeannine Burrow', 'departmentId': 3, 'email': 'Jeannine.Burrow@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Major Giaomozzo', 'departmentId': 2, 'email': 'Major.Giaomozzo@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Penny McNab', 'departmentId': 1, 'email': 'Penny.McNab@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Ingemar Campanelli', 'departmentId': 4, 'email': 'Ingemar.Campanelli@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Randolph Teager', 'departmentId': 2, 'email': 'Randolph.Teager@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Phillipe Bussel', 'departmentId': 4, 'email': 'Phillipe.Bussel@ce.school.edu', 'research_area': 'structural dynamics' }
    ])

    return queryInterface.bulkInsert('students', [
      { 'name': 'Isidora Matteotti', 'departmentId': 4, 'email': 'Isidora.Matteotti@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Carmelina Itchingham', 'departmentId': 2, 'email': 'Carmelina.Itchingham@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Johnette Bytheway', 'departmentId': 2, 'email': 'Johnette.Bytheway@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Cairistiona Antczak', 'departmentId': 4, 'email': 'Cairistiona.Antczak@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Jaquenetta Hammerstone', 'departmentId': 3, 'email': 'Jaquenetta.Hammerstone@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Eileen Anselmi', 'departmentId': 2, 'email': 'Eileen.Anselmi@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Craggie Draisey', 'departmentId': 4, 'email': 'Craggie.Draisey@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Benedetta Keir', 'departmentId': 1, 'email': 'Benedetta.Keir@cse.school.edu', 'research_area': 'database' },
      { 'name': 'Hewie Gothup', 'departmentId': 3, 'email': 'Hewie.Gothup@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Nickola Ambler', 'departmentId': 2, 'email': 'Nickola.Ambler@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Lorraine Fitzackerley', 'departmentId': 1, 'email': 'Lorraine.Fitzackerley@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Jaye Eves', 'departmentId': 3, 'email': 'Jaye.Eves@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Petronia Bodman', 'departmentId': 4, 'email': 'Petronia.Bodman@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Bryna Briamo', 'departmentId': 2, 'email': 'Bryna.Briamo@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Flo Gurge', 'departmentId': 4, 'email': 'Flo.Gurge@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Ethel Bushnell', 'departmentId': 2, 'email': 'Ethel.Bushnell@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Rurik Eighteen', 'departmentId': 2, 'email': 'Rurik.Eighteen@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Wolfgang Helkin', 'departmentId': 2, 'email': 'Wolfgang.Helkin@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Linda Cater', 'departmentId': 2, 'email': 'Linda.Cater@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Coretta Lenin', 'departmentId': 4, 'email': 'Coretta.Lenin@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Ardyce Ankers', 'departmentId': 4, 'email': 'Ardyce.Ankers@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Mile Booley', 'departmentId': 2, 'email': 'Mile.Booley@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Carilyn Starzaker', 'departmentId': 4, 'email': 'Carilyn.Starzaker@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Ida Thring', 'departmentId': 1, 'email': 'Ida.Thring@cse.school.edu', 'research_area': 'database' },
      { 'name': 'Lucina Ornelas', 'departmentId': 2, 'email': 'Lucina.Ornelas@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Cazzie Gainor', 'departmentId': 4, 'email': 'Cazzie.Gainor@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Reggis Proughten', 'departmentId': 2, 'email': 'Reggis.Proughten@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Maurizia Bizley', 'departmentId': 1, 'email': 'Maurizia.Bizley@cse.school.edu', 'research_area': 'database' },
      { 'name': 'Maddy Callf', 'departmentId': 3, 'email': 'Maddy.Callf@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Gabriel Bagster', 'departmentId': 2, 'email': 'Gabriel.Bagster@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Fee Boaler', 'departmentId': 4, 'email': 'Fee.Boaler@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Sandy Hasard', 'departmentId': 3, 'email': 'Sandy.Hasard@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Maurie Edmonson', 'departmentId': 3, 'email': 'Maurie.Edmonson@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Benita Pickle', 'departmentId': 1, 'email': 'Benita.Pickle@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Krystal Hardwick', 'departmentId': 3, 'email': 'Krystal.Hardwick@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Morena Caton', 'departmentId': 3, 'email': 'Morena.Caton@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Kaleb Freddi', 'departmentId': 1, 'email': 'Kaleb.Freddi@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Allix Ravenshaw', 'departmentId': 4, 'email': 'Allix.Ravenshaw@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Salli Plaster', 'departmentId': 2, 'email': 'Salli.Plaster@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Kelsi Goadby', 'departmentId': 1, 'email': 'Kelsi.Goadby@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Simon Barrar', 'departmentId': 2, 'email': 'Simon.Barrar@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Bordie Dudeney', 'departmentId': 2, 'email': 'Bordie.Dudeney@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Cristobal Teck', 'departmentId': 1, 'email': 'Cristobal.Teck@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Francklyn MacNulty', 'departmentId': 4, 'email': 'Francklyn.MacNulty@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Kimberly Martinho', 'departmentId': 3, 'email': 'Kimberly.Martinho@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Nanine Hew', 'departmentId': 1, 'email': 'Nanine.Hew@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Rourke Ferre', 'departmentId': 4, 'email': 'Rourke.Ferre@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Merridie Brimelow', 'departmentId': 2, 'email': 'Merridie.Brimelow@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Brigida Docker', 'departmentId': 2, 'email': 'Brigida.Docker@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Guthry Slocom', 'departmentId': 1, 'email': 'Guthry.Slocom@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Leonore Lowell', 'departmentId': 3, 'email': 'Leonore.Lowell@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Jody Connop', 'departmentId': 1, 'email': 'Jody.Connop@cse.school.edu', 'research_area': 'machine learning' },
      { 'name': 'Jannel Corrane', 'departmentId': 3, 'email': 'Jannel.Corrane@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Yorgos Fidgin', 'departmentId': 2, 'email': 'Yorgos.Fidgin@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Thor Wornum', 'departmentId': 3, 'email': 'Thor.Wornum@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Shantee Crowche', 'departmentId': 3, 'email': 'Shantee.Crowche@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Edita Elsmor', 'departmentId': 1, 'email': 'Edita.Elsmor@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Dreddy Abramamovh', 'departmentId': 3, 'email': 'Dreddy.Abramamovh@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Boonie Corsor', 'departmentId': 3, 'email': 'Boonie.Corsor@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Tessi Ife', 'departmentId': 2, 'email': 'Tessi.Ife@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Taryn Jozwicki', 'departmentId': 1, 'email': 'Taryn.Jozwicki@cse.school.edu', 'research_area': 'database' },
      { 'name': 'Amara Soitoux', 'departmentId': 2, 'email': 'Amara.Soitoux@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Frank Baccup', 'departmentId': 3, 'email': 'Frank.Baccup@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Allyn Cuttell', 'departmentId': 4, 'email': 'Allyn.Cuttell@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Cordula Hruska', 'departmentId': 3, 'email': 'Cordula.Hruska@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Tammi Kornyakov', 'departmentId': 2, 'email': 'Tammi.Kornyakov@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Bella Niezen', 'departmentId': 3, 'email': 'Bella.Niezen@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Shellie Barsam', 'departmentId': 2, 'email': 'Shellie.Barsam@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Eleen Grinaway', 'departmentId': 4, 'email': 'Eleen.Grinaway@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Linell Maylam', 'departmentId': 1, 'email': 'Linell.Maylam@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Sloane Pannaman', 'departmentId': 2, 'email': 'Sloane.Pannaman@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Garth Liptrot', 'departmentId': 3, 'email': 'Garth.Liptrot@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Darice Gheeraert', 'departmentId': 3, 'email': 'Darice.Gheeraert@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Milty Chattock', 'departmentId': 2, 'email': 'Milty.Chattock@eee.school.edu', 'research_area': 'signals' },
      { 'name': 'Newton Streeter', 'departmentId': 2, 'email': 'Newton.Streeter@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Cinda Wilbud', 'departmentId': 2, 'email': 'Cinda.Wilbud@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Jordan Dorkin', 'departmentId': 4, 'email': 'Jordan.Dorkin@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Saxe Mitchel', 'departmentId': 1, 'email': 'Saxe.Mitchel@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Arlana Chaffyn', 'departmentId': 3, 'email': 'Arlana.Chaffyn@me.school.edu', 'research_area': 'solid mechanics' },
      { 'name': 'Sadye Noli', 'departmentId': 4, 'email': 'Sadye.Noli@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Beilul Lotterington', 'departmentId': 1, 'email': 'Beilul.Lotterington@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Shirlee MacKeague', 'departmentId': 3, 'email': 'Shirlee.MacKeague@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Wilhelmine Crus', 'departmentId': 1, 'email': 'Wilhelmine.Crus@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Charmain Keener', 'departmentId': 1, 'email': 'Charmain.Keener@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Manuel Andrivot', 'departmentId': 1, 'email': 'Manuel.Andrivot@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Chrisse Paschek', 'departmentId': 4, 'email': 'Chrisse.Paschek@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Leona Linkin', 'departmentId': 2, 'email': 'Leona.Linkin@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Clarisse Paulmann', 'departmentId': 4, 'email': 'Clarisse.Paulmann@ce.school.edu', 'research_area': 'traffic operations' },
      { 'name': 'Wallache McCallum', 'departmentId': 4, 'email': 'Wallache.McCallum@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Larry Scrivner', 'departmentId': 2, 'email': 'Larry.Scrivner@eee.school.edu', 'research_area': 'devices' },
      { 'name': 'Eugenia Stemson', 'departmentId': 3, 'email': 'Eugenia.Stemson@me.school.edu', 'research_area': 'fluid dynamics' },
      { 'name': 'Issiah Ellison', 'departmentId': 2, 'email': 'Issiah.Ellison@eee.school.edu', 'research_area': 'electronics' },
      { 'name': 'Martino Dupre', 'departmentId': 1, 'email': 'Martino.Dupre@cse.school.edu', 'research_area': 'networking' },
      { 'name': 'Yovonnda Goodbar', 'departmentId': 4, 'email': 'Yovonnda.Goodbar@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Missy Kidstoun', 'departmentId': 3, 'email': 'Missy.Kidstoun@me.school.edu', 'research_area': 'systems' },
      { 'name': 'Brockie Milsap', 'departmentId': 4, 'email': 'Brockie.Milsap@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Efren Crickmoor', 'departmentId': 4, 'email': 'Efren.Crickmoor@ce.school.edu', 'research_area': 'structural dynamics' },
      { 'name': 'Janey Swannell', 'departmentId': 4, 'email': 'Janey.Swannell@ce.school.edu', 'research_area': 'climate change' },
      { 'name': 'Wally McCrann', 'departmentId': 1, 'email': 'Wally.McCrann@cse.school.edu', 'research_area': 'graphics' },
      { 'name': 'Marcelline Videneev', 'departmentId': 3, 'email': 'Marcelline.Videneev@me.school.edu', 'research_area': 'systems' },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('students')
    await queryInterface.bulkDelete('faculty')

    return queryInterface.bulkDelete('departments')
  }
}
