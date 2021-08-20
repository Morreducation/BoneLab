var cont_navbar = document.getElementById("cont_navbar");
var cont_login = document.getElementById("cont_login");
var cont_toolbar = document.getElementById("cont_toolbar");
var cont_dashboard = document.getElementById("cont_dashboard");
// Inputs
var input_username = document.getElementById("input_username");

// Buttons
var btn_export = document.getElementById("btn_export");
var btn_start = document.getElementById("btn_start");

var btn_assets = document.getElementById("btn_assets");
var btn_annotation = document.getElementById("btn_annotation");
var btn_controls = document.getElementById("btn_controls");
var btn_agent = document.getElementById("btn_agent");
var sec_leftbar = document.getElementById("sec_leftbar");
var sec_dashboard = document.getElementById("sec_dashboard");
var tool_nav = document.querySelector(".tool_nav");
var tool_agent = document.querySelector(".tool_agent");
var sec_rightbar = document.getElementById("sec_rightbar");
var array_model_leftbar = document.querySelectorAll(".cont_model");
var array_more_leftbar = document.querySelectorAll(".btn_more_leftbar");
var array_open_leftbar = document.querySelectorAll(".btn_open_leftbar");
var array_descriptor_leftbar = document.querySelectorAll(".text_descriptor_leftbar");
var array_title_leftbar = document.querySelectorAll(".text_title_leftbar");
var array_text_label_rightbar = document.querySelectorAll(".text_label_right");
var array_icon_label_rightbar = document.querySelectorAll(".icon_label_right");
var array_text_label_likes = document.querySelectorAll(".text_label_likes");
var array_text_label_replies = document.querySelectorAll(".text_label_replies");
var btn_prev = document.getElementById("btn_prev");
var btn_next = document.getElementById("btn_next");
var btn_nav_left = document.querySelector(".btn_nav_left");
var btn_nav_up = document.querySelector(".btn_nav_up");
var btn_nav_right = document.querySelector(".btn_nav_right");
var btn_nav_down = document.querySelector(".btn_nav_down");
var btn_nav_in = document.querySelector(".btn_nav_in");
var btn_nav_out = document.querySelector(".btn_nav_out");
var btn_comment = document.getElementById("btn_comment");
var btn_comment_obs = document.getElementById("btn_comment_obs");
var btn_comment_ide = document.getElementById("btn_comment_ide");
var text_comment_help = document.getElementById("text_comment_help");

var text_agent = document.getElementById("text_agent");
var input_comment = document.getElementById("input_comment");
var btn_add = document.getElementById("btn_add");
var array_comment_rightbar = document.querySelectorAll(".cont_comment");
/*var array_like_rightbar = document.querySelectorAll(".btn_like_rightbar");*/
var array_more_rightbar = document.querySelectorAll(".btn_more_rightbar");
var array_text_rightbar = document.querySelectorAll(".text_comment");
var array_text_reply_rightbar = document.querySelectorAll(".text_reply");
var array_btn_reply_rightbar = document.querySelectorAll(".btn_reply");
var array_cont_reply_rightbar = document.querySelectorAll(".cont_reply");
var array_input_reply_rightbar = document.querySelectorAll(".input_reply");
var array_btn_add_rightbar = document.querySelectorAll(".btn_add");
var array_btn_view_rightbar = document.querySelectorAll(".btn_view_rightbar");

var btn_prev2 = document.getElementById("btn_prev2");
var btn_next2 = document.getElementById("btn_next2");
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var totalSeconds = 0;
var observation_count = 0;
var timer;
var fossil;
let scene, camera, renderer, model;

/* Fall 2020 - New variables */
var list_prompts = document.querySelectorAll(".dropdown-item");