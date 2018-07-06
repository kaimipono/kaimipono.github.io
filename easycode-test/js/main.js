

window.onload = function() {

	var tableUsers = document.getElementById('table-users');
	//tableUsers.style.display = "none";

	function Person(name, email, role) {
		this.name = name;
		this.email = email;
		this.role = role;
	}

	Person.prototype.showUsers = function() {
		createTable(this.name, this.email, this.role);
	}

	function Admin(name, email) {
		Person.apply(this, arguments);
		this.role = 'admin';
	}

	function User(name, email) {
		Person.apply(this, arguments);
		this.role = 'user';
	}

	function Guest(name, email) {
		Person.apply(this, arguments);
		this.role = 'guest';
	}

	Admin.prototype = Object.create(Person.prototype);
	Admin.prototype.constructor = Admin;

	User.prototype = Object.create(Person.prototype);
	User.prototype.constructor = User;

	Guest.prototype = Object.create(Person.prototype);
	Guest.prototype.constructor = Guest;


	function createTable(name, email, role) {
		var table = document.getElementById('users');
		
		var new_row = document.createElement('tr');

		var col_name = document.createElement('td');
		col_name.innerText = name;


		var col_email = document.createElement('td');
		col_email.innerText = email;

		var col_role = document.createElement('td');
		col_role.innerText = role;


		new_row.appendChild(col_name);
		new_row.appendChild(col_email);
		new_row.appendChild(col_role);

		table.appendChild(new_row);

		if (tableUsers.style.display == "none") {
			tableUsers.style.display = "block";
		}
	}

	
	if (localStorage) {
		for (var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var tempObj = JSON.parse(localStorage.getItem(key));
			var savedPerson = new Person(tempObj.name,
				tempObj.email,
				tempObj.role);
			savedPerson.showUsers();
		}
	}
	

	
	document.getElementById('add').onclick = function() {
	
		var newPerson;
		var user_name = document.getElementById('user-name').value,
			user_email = document.getElementById('user-email').value,
			selectedInd = document.getElementById('select').options.selectedIndex,
			user_role = document.getElementById('select').options[selectedInd].value;

		if ((!user_name) || (!user_email)) {
			return;
		}

		switch (user_role) {
		case 'admin':
			newPerson = new Admin(user_name, user_email, user_role);
			break;
		case 'user':
			newPerson = new User(user_name, user_email, user_role);
			break;
		case 'guest':
			newPerson = new Guest(user_name, user_email, user_role);
			break;
		}

		document.getElementById('user-name').value = '';
		document.getElementById('user-email').value = '';

		var countKey = -1;
		var serialPerson = JSON.stringify(newPerson);
		countKey++;
		var keyPerson = '' + countKey;
		localStorage.setItem(keyPerson, serialPerson);

		newPerson.showUsers();

	}

	document.getElementById('clear').onclick = function() {
		localStorage.clear();
		countKey = -1;
	//	tableUsers.style.display = "none";

		var tableChilds = document.getElementById('users').children;		

		for (var j = 2; j < tableChilds.length; j++) {
			document.getElementById('users').removeChild(tableChilds[j]);
			j--;
		}
	}
}




	


