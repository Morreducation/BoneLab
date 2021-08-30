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
				array_more_rightbar[0].textContent = "Add Inference";
			} else {
				array_more_rightbar[0].textContent = "Less";
			}
			array_text_reply_rightbar[0].classList.toggle("d-none");
			array_btn_reply_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_more_right_2":
			if (array_more_rightbar[1].textContent == "Less") {
				array_more_rightbar[1].textContent = "Add Inference";
			} else {
				array_more_rightbar[1].textContent = "Less";
			}
			array_text_reply_rightbar[1].classList.toggle("d-none");
			array_btn_reply_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_more_right_3":
			if (array_more_rightbar[2].textContent == "Less") {
				array_more_rightbar[2].textContent = "Add Inference";
			} else {
				array_more_rightbar[2].textContent = "Less";
			}
			array_text_reply_rightbar[2].classList.toggle("d-none");
			array_btn_reply_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_more_right_4":
			if (array_more_rightbar[3].textContent == "Less") {
				array_more_rightbar[3].textContent = "Add Inference";
			} else {
				array_more_rightbar[3].textContent = "Less";
			}
			array_text_reply_rightbar[3].classList.toggle("d-none");
			array_btn_reply_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_more_right_5":
			if (array_more_rightbar[4].textContent == "Less") {
				array_more_rightbar[4].textContent = "Add Inference";
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
		"https://docs.google.com/forms/d/e/1FAIpQLSfcRUR_OzAxM-NVxp2ti2Sm-fSCYz37DOPYCaEqocB330nRpw/viewform?usp=sf_link" +
		"entry.1409535817=" +
		String(data2[comment_index].metadata.version) +
		"&entry.1072182449=" +
		String(data2[comment_index].metadata.date) +
		"&entry.1725548152=" +
		String(data2[comment_index].metadata.timestamp) +
		"&entry.1913696123=" +
		String(data2[comment_index].user.username) +
		"&entry.2014689306=" +
		String(data2[comment_index].model.id) +
		"&entry.2053223320=" +
		String(data2[comment_index].model.name) +
		"&entry.1025077181=" +
		String(data2[comment_index].like) +
		"&entry.11568367=" +
		String(data2[comment_index].comment) +
		"&entry.1074142437=" +
		String(data2[comment_index].count) +
		"&entry.1915743138=" +
		String(data2[comment_index].replies) +
		"&entry.1177480505=" +
		String(Number.parseFloat(data2[comment_index].camera.x).toFixed(3)) +
		"&entry.2052551501=" +
		String(Number.parseFloat(data2[comment_index].camera.y).toFixed(3)) +
		"&entry.109941202=" +
		String(Number.parseFloat(data2[comment_index].camera.z).toFixed(3)) +
		"&entry.1084430691=" +
		String(Number.parseFloat(data2[comment_index].camera.distance).toFixed(3)) +
		"&entry.1168976928=" +
		String(data2[comment_index].euler.order) +
		"&entry.1554586814=" +
		String(Number.parseFloat(data2[comment_index].euler.x).toFixed(3)) +
		"&entry.231425692=" +
		String(Number.parseFloat(data2[comment_index].euler.y).toFixed(3)) +
		"&entry.2136569820=" +
		String(Number.parseFloat(data2[comment_index].euler.z).toFixed(3)) +
		"&entry.1813831831=" +
		String(Number.parseFloat(data2[comment_index].quaternion.x).toFixed(3)) +
		"&entry.518437360=" +
		String(Number.parseFloat(data2[comment_index].quaternion.y).toFixed(3)) +
		"&entry.1938452639=" +
		String(Number.parseFloat(data2[comment_index].quaternion.z).toFixed(3)) +
		"&entry.604071565=" +
		String(Number.parseFloat(data2[comment_index].quaternion.w).toFixed(3)) +
		"&entry.25051780=" +
		String(Number.parseFloat(data2[comment_index].position.x).toFixed(3)) +
		"&entry.795791771=" +
		String(Number.parseFloat(data2[comment_index].position.y).toFixed(3)) +
		"&entry.658719792=" +
		String(Number.parseFloat(data2[comment_index].position.z).toFixed(3)) +
		"&entry.1206060489=" +
		String(Number.parseFloat(data2[comment_index].scale.x).toFixed(3)) +
		"&entry.1617073745=" +
		String(Number.parseFloat(data2[comment_index].scale.y).toFixed(3)) +
		"&entry.1090087836=" +
		String(Number.parseFloat(data2[comment_index].scale.z).toFixed(3)) +
		"&entry.1702290923=" +
		String(data2[comment_index].label.prompt) +
		"&entry.162216373=" +
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

	var url_address =
		"https://docs.google.com/forms/d/e/1FAIpQLSfY6OOY0BKryeu9fOqmPP4ci63qAs_XfmIthmfcxDtYmJre3Q/viewform?usp=sf_link" +
		"entry.470344545=" +
		"BoneLabv1.0_testversion" +
		"&entry.1294322015=" +
		date_obj.toISOString() +
		"&entry.1157826453=" +
		String(Date.now()) +
		"&entry.1744694412=" +
		String(input_username.value) +
		"&entry.360754063=" +
		"a00001" +
		"&entry.303214871=" +
		"Mystery Fossil 1" +
		"&entry.890029254=" +
		String(Number.parseFloat(camera.position.x).toFixed(3)) +
		"&entry.1554695945=" +
		String(Number.parseFloat(camera.position.y).toFixed(3)) +
		"&entry.190253279=" +
		String(Number.parseFloat(camera.position.z).toFixed(3)) +
		"&entry.1837789668=" +
		String(Number.parseFloat(controls.target.distanceTo(controls.object.position)).toFixed(3)) +
		"&entry.1771268506=" +
		String(controls.object.rotation._order) +
		"&entry.755054853=" +
		String(Number.parseFloat(controls.object.rotation._x).toFixed(3)) +
		"&entry.958490955=" +
		String(Number.parseFloat(controls.object.rotation._y).toFixed(3)) +
		"&entry.673974138=" +
		String(Number.parseFloat(controls.object.rotation._z).toFixed(3)) +
		"&entry.1173930003=" +
		String(Number.parseFloat(controls.object.quaternion._x).toFixed(3)) +
		"&entry.1092578280=" +
		String(Number.parseFloat(controls.object.quaternion._y).toFixed(3)) +
		"&entry.1980005333=" +
		String(Number.parseFloat(controls.object.quaternion._z).toFixed(3)) +
		"&entry.1039671957=" +
		String(Number.parseFloat(controls.object.quaternion._w).toFixed(3)) +
		"&entry.2084708034=" +
		String(Number.parseFloat(controls.object.position.x).toFixed(3)) +
		"&entry.203426479=" +
		String(Number.parseFloat(controls.object.position.y).toFixed(3)) +
		"&entry.18051996=" +
		String(Number.parseFloat(controls.object.position.z).toFixed(3)) +
		"&entry.251099452=" +
		String(Number.parseFloat(controls.object.scale.x).toFixed(3)) +
		"&entry.447062968=" +
		String(Number.parseFloat(controls.object.scale.y).toFixed(3)) +
		"&entry.1869449332=" +
		String(Number.parseFloat(controls.object.scale.z).toFixed(3)) +
		"&entry.2069652828=" +
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