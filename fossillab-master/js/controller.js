function toggleModel(model_id) {
	switch (model_id) {
		case "btn_more_left_1":
			if (array_more_leftbar[0].textContent == "Less") {
				array_more_leftbar[0].textContent = "More";
			} else {
				array_more_leftbar[0].textContent = "Less";
			}
			array_descriptor_leftbar[0].classList.toggle("d-none");
			break;
		case "btn_more_left_2":
			if (array_more_leftbar[1].textContent == "Less") {
				array_more_leftbar[1].textContent = "More";
			} else {
				array_more_leftbar[1].textContent = "Less";
			}
			array_descriptor_leftbar[1].classList.toggle("d-none");
			break;
		case "btn_more_left_3":
			if (array_more_leftbar[2].textContent == "Less") {
				array_more_leftbar[2].textContent = "More";
			} else {
				array_more_leftbar[2].textContent = "Less";
			}
			array_descriptor_leftbar[2].classList.toggle("d-none");
			break;
		case "btn_more_left_4":
			if (array_more_leftbar[3].textContent == "Less") {
				array_more_leftbar[3].textContent = "More";
			} else {
				array_more_leftbar[3].textContent = "Less";
			}
			array_descriptor_leftbar[3].classList.toggle("d-none");
			break;
		case "btn_more_left_5":
			if (array_more_leftbar[4].textContent == "Less") {
				array_more_leftbar[4].textContent = "More";
			} else {
				array_more_leftbar[4].textContent = "Less";
			}
			array_descriptor_leftbar[4].classList.toggle("d-none");
			break;
	}
}

function loadModel(list_index) {
	btn_next.disabled = false;
	var counter = 0;
	for (var i = list_index * 5; i < list_index * 5 + 5; i++) {
		try {
			array_model_leftbar[counter].classList.remove("d-none");
			array_title_leftbar[counter].textContent = data[i].title;
			array_descriptor_leftbar[counter].textContent = data[i].descriptor;
		} catch {
			array_model_leftbar[counter].classList.add("d-none");
			btn_next.disabled = true;
		}
		counter = counter + 1;
	}
}

function openModel(model_id) {
	var url_address;
	switch (model_id) {
		case "btn_open_left_1":
			url_address = data[0].url;
			model = data[0].id;
			break;
		case "btn_open_left_2":
			url_address = data[1].url;
			model = data[1].id;
			break;
		case "btn_open_left_3":
			url_address = data[2].url;
			model = data[2].id;
			break;
		case "btn_open_left_4":
			url_address = data[3].url;
			model = data[3].id;
			break;
		case "btn_open_left_5":
			url_address = data[4].url;
			model = data[4].id;
			break;
	}
	console.log("Render the model from the following url address: " + url_address);
	renderModel(url_address);
}

function animateModel() {
	renderer.render(scene, camera);
	requestAnimationFrame(animateModel);
	// https://stackoverflow.com/questions/52944642/three-js-perspectivecamera-orbitcontrol-how-i-can-get-current-zoom-level
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;

	//console.log(x, z, y);
	//console.log(controls.object.rotation._x, controls.object.rotation._y, controls.object.rotation._z);
}

function renderModel(model_url) {
	// Define scene object and background color
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	// Define camera
	camera = new THREE.PerspectiveCamera(40, sec_dashboard.offsetWidth / sec_dashboard.offsetHeight, 1, 5000);
	camera.rotation.y = (45 / 180) * Math.PI;
	camera.position.x = 800;
	camera.position.y = 200;
	camera.position.z = 1000;
	// Define lighting conditions
	highlight = new THREE.AmbientLight(0x404040, 100);
	scene.add(highlight);
	directionalLight = new THREE.DirectionalLight(0xffffff, 2);
	directionalLight.position.set(0, 1, 0);
	//directionalLight.castShadow = true;
	scene.add(directionalLight);
	light = new THREE.PointLight(0xc4c4c4, 1.5);
	light.position.set(0, 300, 500);
	scene.add(light);
	light2 = new THREE.PointLight(0xc4c4c4, 1.5);
	light2.position.set(500, 100, 0);
	scene.add(light2);
	light3 = new THREE.PointLight(0xc4c4c4, 1.5);
	light3.position.set(0, 100, -500);
	scene.add(light3);
	light4 = new THREE.PointLight(0xc4c4c4, 1.5);
	light4.position.set(-500, 300, 500);
	scene.add(light4);
	light5 = new THREE.PointLight(0xc4c4c4, 1.5);
	light5.position.set(0, -500, 0);
	scene.add(light5);
	// Define renderer
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(sec_dashboard.offsetWidth, sec_dashboard.offsetHeight);
	console.log("Width set to:" + sec_dashboard.offsetWidth);
	try {
		sec_dashboard.getElementsByTagName("CANVAS")[0].remove();
	} catch {}
	sec_dashboard.appendChild(renderer.domElement);
	// Define controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener("change", renderer);
	// Define loader
	let loader = new THREE.GLTFLoader();
	loader.load(
		model_url,
		function (gltf) {
			fossil = gltf.scene;
			console.log(fossil);
			fossil.scale.set(3, 3, 3);
			scene.add(fossil);
			animateModel();
		},
		// called while loading is progressing
		function (xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		// called when loading has errors
		function (error) {
			console.log("An error happened");
		}
	);
}

function loadComment(comment_id) {
	console.log(comment_id);
	btn_next2.disabled = false;
	var comment_index = 0;
	for (var i = comment_id * 5; i < comment_id * 5 + 5; i++) {
		try {
			array_comment_rightbar[comment_index].classList.remove("d-none");
			array_text_rightbar[comment_index].textContent = data2[i].comment;
			array_text_reply_rightbar[comment_index].innerHTML = "";
			data2[i].replies.forEach((element) => (array_text_reply_rightbar[comment_index].innerHTML += element + "<br>"));
			//array_text_label_rightbar[comment_index].textContent = data2[i].label.comment;
			//array_text_label_likes[comment_index].textContent = data2[i].like;
			array_text_label_replies[comment_index].textContent = data2[i].replies.length;
			/*if (data2[i].label.comment == "Identify") {
				array_icon_label_rightbar[comment_index].innerHTML = "<i class='fas fa-info ml-2'></i>";
			} else {
				array_icon_label_rightbar[comment_index].innerHTML = "<i class='fas fa-search'></i>";
			}*/
		} catch {
			array_comment_rightbar[comment_index].classList.add("d-none");
			btn_next2.disabled = true;
		}
		comment_index = comment_index + 1;
	}
}

function toggleComment(comment_id) {
	switch (comment_id) {
		case "btn_more_right_1":
			if (array_more_rightbar[0].textContent == "Less") {
				array_more_rightbar[0].textContent = "More";
			} else {
				array_more_rightbar[0].textContent = "Less";
			}
			array_text_reply_rightbar[0].classList.toggle("d-none");
			array_btn_reply_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_more_right_2":
			if (array_more_rightbar[1].textContent == "Less") {
				array_more_rightbar[1].textContent = "More";
			} else {
				array_more_rightbar[1].textContent = "Less";
			}
			array_text_reply_rightbar[1].classList.toggle("d-none");
			array_btn_reply_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_more_right_3":
			if (array_more_rightbar[2].textContent == "Less") {
				array_more_rightbar[2].textContent = "More";
			} else {
				array_more_rightbar[2].textContent = "Less";
			}
			array_text_reply_rightbar[2].classList.toggle("d-none");
			array_btn_reply_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_more_right_4":
			if (array_more_rightbar[3].textContent == "Less") {
				array_more_rightbar[3].textContent = "More";
			} else {
				array_more_rightbar[3].textContent = "Less";
			}
			array_text_reply_rightbar[3].classList.toggle("d-none");
			array_btn_reply_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_more_right_5":
			if (array_more_rightbar[4].textContent == "Less") {
				array_more_rightbar[4].textContent = "More";
			} else {
				array_more_rightbar[4].textContent = "Less";
			}
			array_text_reply_rightbar[4].classList.toggle("d-none");
			array_btn_reply_rightbar[4].classList.toggle("d-none");
			break;
	}
}

function likeComment(comment_id) {
	var like_index;
	switch (comment_id) {
		case "btn_like_right_1":
			like_index = counter2 * 5;
			break;
		case "btn_like_right_2":
			like_index = counter2 * 5 + 1;
			break;
		case "btn_like_right_3":
			like_index = counter2 * 5 + 2;
			break;
		case "btn_like_right_4":
			like_index = counter2 * 5 + 3;
			break;
		case "btn_like_right_5":
			like_index = counter2 * 5 + 4;
			break;
	}
	data2[like_index].like = data2[like_index].like + 1;
	console.log(data2);
	loadComment(counter2);
}

function toggleReply(reply_id) {
	switch (reply_id) {
		case "btn_reply1":
			if (array_btn_reply_rightbar[0].textContent == "Add an Inference") {
				array_btn_reply_rightbar[0].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[0].textContent = "Add an Inference";
			}
			array_cont_reply_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_reply2":
			if (array_btn_reply_rightbar[1].textContent == "Add an Inference") {
				array_btn_reply_rightbar[1].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[1].textContent = "Add an Inference";
			}
			array_cont_reply_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_reply3":
			if (array_btn_reply_rightbar[2].textContent == "Add an Inference") {
				array_btn_reply_rightbar[2].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[2].textContent = "Add an Inference";
			}
			array_cont_reply_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_reply4":
			if (array_btn_reply_rightbar[3].textContent == "Add an Inference") {
				array_btn_reply_rightbar[3].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[3].textContent = "Add an Inference";
			}
			array_cont_reply_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_reply5":
			if (array_btn_reply_rightbar[4].textContent == "Add an Inference") {
				array_btn_reply_rightbar[4].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[4].textContent = "Add an Inference";
			}
			array_cont_reply_rightbar[4].classList.toggle("d-none");
			break;
	}
}

function addReply(reply_id) {
	var reply_index;
	switch (reply_id) {
		case "btn_add1":
			reply_index = counter2 * 5;
			data2[reply_index].replies.push(array_input_reply_rightbar[0].value);
			break;
		case "btn_add2":
			reply_index = counter2 * 5 + 1;
			data2[reply_index].replies.push(array_input_reply_rightbar[1].value);
			break;
		case "btn_add3":
			reply_index = counter2 * 5 + 2;
			data2[reply_index].replies.push(array_input_reply_rightbar[2].value);
			break;
		case "btn_add4":
			reply_index = counter2 * 5 + 3;
			data2[reply_index].replies.push(array_input_reply_rightbar[3].value);
			break;
		case "btn_add5":
			reply_index = counter2 * 5 + 4;
			data2[reply_index].replies.push(array_input_reply_rightbar[4].value);
			break;
	}
	console.log(data2);
	loadComment(counter2);
}

function updateAgent(prompt_id) {
	clearInterval(timer);
	if (counter3 >= agent.length) {
		text_agent.classList.add("d-none");
	} else {
		text_agent.classList.remove("d-none");
		text_agent.textContent = agent[prompt_id].prompt;
		counter3 = counter3 + 1;
		totalSeconds = 0;
		timer = setInterval(setTime, 1000);
	}
}

function setTime() {
	++totalSeconds;
	//console.log("Seconds: " + (totalSeconds % 60), "Minutes: " + parseInt(totalSeconds / 60));
	if (parseInt(totalSeconds / 60) > 5 || observation_count >= counter3) {
		updateAgent(counter3);
	}
	logInteractions();
}

function showInterfaceView(view) {
	switch (view) {
		case "landing":
			cont_navbar.classList.remove("d-none");
			cont_login.classList.remove("d-none");
			cont_toolbar.classList.add("d-none");
			cont_dashboard.classList.add("d-none");
			break;
		case "dashboard":
			cont_navbar.classList.add("d-none");
			cont_login.classList.add("d-none");
			cont_toolbar.classList.remove("d-none");
			cont_dashboard.classList.remove("d-none");
			break;
		default:
			cont_navbar.classList.remove("d-none");
			cont_login.classList.remove("d-none");
			cont_toolbar.classList.add("d-none");
			cont_dashboard.classList.add("d-none");
			break;
	}
}

function exportData() {
	var JSONdata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data2));
	btn_export.setAttribute("href", "data:" + JSONdata);
	btn_export.setAttribute("download", "MITutorLog" + Date.now() + ".json");
}

function viewModel(model_id) {
	// TODO: Add code to render the model using euler angles, position, and scale
	var index;
	switch (model_id) {
		case "btn_view_right_1":
			index = counter2 * 5;
			break;
		case "btn_view_right_2":
			index = counter2 * 5 + 1;
			break;
		case "btn_view_right_3":
			index = counter2 * 5 + 2;
			break;
		case "btn_view_right_4":
			index = counter2 * 5 + 3;
			break;
		case "btn_view_right_5":
			index = counter2 * 5 + 4;
			break;
	}
	camera.position.x = data2[index].position.x;
	camera.position.y = data2[index].position.y;
	camera.position.z = data2[index].position.z;
	camera.setRotationFromQuaternion(data2[index].quaternion);
	console.log(camera.position.x, camera.position.y, camera.position.z);
}

function logComment(comment_index) {
	var url_address =
		"https://docs.google.com/forms/d/e/1FAIpQLSdIRJlZV6xDutVMhLayJrkMKjIc5SfBmdQaOS8QJxv9qY5Png/formResponse?" +
		"entry.975134550=" +
		String(data2[comment_index].metadata.version) +
		"&entry.1659984093=" +
		String(data2[comment_index].metadata.date) +
		"&entry.577843415=" +
		String(data2[comment_index].metadata.timestamp) +
		"&entry.1968373221=" +
		String(data2[comment_index].user.username) +
		"&entry.964445780=" +
		String(data2[comment_index].user.age) +
		"&entry.278858602=" +
		String(data2[comment_index].user.degree) +
		"&entry.1275473730=" +
		String(data2[comment_index].user.university) +
		"&entry.2040944281=" +
		String(data2[comment_index].user.gpa) +
		"&entry.1660040951=" +
		String(data2[comment_index].user.gender) +
		"&entry.1957288026=" +
		String(data2[comment_index].model.id) +
		"&entry.383392807=" +
		String(data2[comment_index].model.name) +
		"&entry.209025962=" +
		String(data2[comment_index].like) +
		"&entry.1379608852=" +
		String(data2[comment_index].comment) +
		"&entry.1605513027=" +
		String(data2[comment_index].count) +
		"&entry.1545238347=" +
		String(data2[comment_index].replies) +
		"&entry.1683800135=" +
		String(Number.parseFloat(data2[comment_index].camera.x).toFixed(3)) +
		"&entry.2067013922=" +
		String(Number.parseFloat(data2[comment_index].camera.y).toFixed(3)) +
		"&entry.1698274138=" +
		String(Number.parseFloat(data2[comment_index].camera.z).toFixed(3)) +
		"&entry.1796404979=" +
		String(Number.parseFloat(data2[comment_index].camera.distance).toFixed(3)) +
		"&entry.306884857=" +
		String(data2[comment_index].euler.order) +
		"&entry.1019223054=" +
		String(Number.parseFloat(data2[comment_index].euler.x).toFixed(3)) +
		"&entry.1340949829=" +
		String(Number.parseFloat(data2[comment_index].euler.y).toFixed(3)) +
		"&entry.771459655=" +
		String(Number.parseFloat(data2[comment_index].euler.z).toFixed(3)) +
		"&entry.636073872=" +
		String(Number.parseFloat(data2[comment_index].quaternion.x).toFixed(3)) +
		"&entry.351593870=" +
		String(Number.parseFloat(data2[comment_index].quaternion.y).toFixed(3)) +
		"&entry.941385348=" +
		String(Number.parseFloat(data2[comment_index].quaternion.z).toFixed(3)) +
		"&entry.1265940654=" +
		String(Number.parseFloat(data2[comment_index].quaternion.w).toFixed(3)) +
		"&entry.1349539111=" +
		String(Number.parseFloat(data2[comment_index].position.x).toFixed(3)) +
		"&entry.533699116=" +
		String(Number.parseFloat(data2[comment_index].position.y).toFixed(3)) +
		"&entry.1318394407=" +
		String(Number.parseFloat(data2[comment_index].position.z).toFixed(3)) +
		"&entry.73501810=" +
		String(Number.parseFloat(data2[comment_index].scale.x).toFixed(3)) +
		"&entry.1962036313=" +
		String(Number.parseFloat(data2[comment_index].scale.y).toFixed(3)) +
		"&entry.1658539784=" +
		String(Number.parseFloat(data2[comment_index].scale.z).toFixed(3)) +
		"&entry.1557304386=" +
		String(data2[comment_index].label.prompt) +
		"&entry.1777979282=" +
		String(data2[comment_index].label.comment) +
		"&submit=Submit";
	console.log(url_address);
	fetch(url_address, {
			method: "post",
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => response.json())
		.then((data) => console.log("data is", data))
		.catch((error) => console.log("error is", error));
}

function logInteractions() {
	var date_obj = new Date();
	var gender;
	if (input_gender1.checked == true) {
		gender = input_gender1.value;
	} else if (input_gender2.checked == true) {
		gender = input_gender2.value;
	} else if (input_gender3.checked == true) {
		gender = input_gender3.value;
	} else {
		gender = input_gender4.value;
	}
	var url_address =
		"https://docs.google.com/forms/d/e/1FAIpQLSfUetyuPcVNNi2ohoX8zCQoT6ZJiyRyZDD-fZ-whma7E_Ou4Q/formResponse?" +
		"entry.1244428001=" +
		"FossilLabv1.0_testversion" +
		"&entry.1451520084=" +
		date_obj.toISOString() +
		"&entry.1810966418=" +
		String(Date.now()) +
		"&entry.950746221=" +
		String(input_username.value) +
		"&entry.2031201778=" +
		String(input_age.value) +
		"&entry.622857593=" +
		String(input_degree.value) +
		"&entry.370070751=" +
		String(input_university.value) +
		"&entry.69374522=" +
		String(input_gpa.value) +
		"&entry.1557537700=" +
		String(gender) +
		"&entry.1162289002=" +
		"a00001" +
		"&entry.1631159768=" +
		"Mystery Fossil 1" +
		"&entry.1536754686=" +
		String(Number.parseFloat(camera.position.x).toFixed(3)) +
		"&entry.1555527500=" +
		String(Number.parseFloat(camera.position.y).toFixed(3)) +
		"&entry.159180449=" +
		String(Number.parseFloat(camera.position.z).toFixed(3)) +
		"&entry.918641034=" +
		String(Number.parseFloat(controls.target.distanceTo(controls.object.position)).toFixed(3)) +
		"&entry.83940095=" +
		String(controls.object.rotation._order) +
		"&entry.21681198=" +
		String(Number.parseFloat(controls.object.rotation._x).toFixed(3)) +
		"&entry.517135656=" +
		String(Number.parseFloat(controls.object.rotation._y).toFixed(3)) +
		"&entry.513369721=" +
		String(Number.parseFloat(controls.object.rotation._z).toFixed(3)) +
		"&entry.1814766815=" +
		String(Number.parseFloat(controls.object.quaternion._x).toFixed(3)) +
		"&entry.1032418808=" +
		String(Number.parseFloat(controls.object.quaternion._y).toFixed(3)) +
		"&entry.1469890999=" +
		String(Number.parseFloat(controls.object.quaternion._z).toFixed(3)) +
		"&entry.1122474342=" +
		String(Number.parseFloat(controls.object.quaternion._w).toFixed(3)) +
		"&entry.1082115649=" +
		String(Number.parseFloat(controls.object.position.x).toFixed(3)) +
		"&entry.2026866226=" +
		String(Number.parseFloat(controls.object.position.y).toFixed(3)) +
		"&entry.317279221=" +
		String(Number.parseFloat(controls.object.position.z).toFixed(3)) +
		"&entry.1115204902=" +
		String(Number.parseFloat(controls.object.scale.x).toFixed(3)) +
		"&entry.904539292=" +
		String(Number.parseFloat(controls.object.scale.y).toFixed(3)) +
		"&entry.963523810=" +
		String(Number.parseFloat(controls.object.scale.z).toFixed(3)) +
		"&entry.2114766812=" +
		String(agent[counter3 - 1].label) +
		"&submit=Submit";
	console.log(url_address);
	fetch(url_address, {
			method: "post",
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => response.json())
		.then((data) => console.log("data is", data))
		.catch((error) => console.log("error is", error));
}