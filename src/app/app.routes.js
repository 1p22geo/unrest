"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var login_component_1 = require("./pages/login/login.component");
var signup_component_1 = require("./pages/signup/signup.component");
var landing_component_1 = require("./pages/landing/landing.component");
exports.routes = [
    { "path": "", component: landing_component_1.LandingComponent },
    { "path": "login", component: login_component_1.LoginComponent },
    { "path": "signup", component: signup_component_1.SignupComponent }
];
