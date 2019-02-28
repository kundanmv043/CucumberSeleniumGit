$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:skeleton/login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "admin user enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "name": "admin user enters \u003cpassword\u003e as passsword",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cresult\u003e user",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "abc123",
        "valid"
      ]
    },
    {
      "cells": [
        "kunal@email.com",
        "123456",
        "valid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstpdef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters abc@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "loginstpdef.admin_user_enters_abc_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters abc123 as passsword",
  "keyword": "And "
});
formatter.match({
  "location": "loginstpdef.admin_user_enters_abc_as_passsword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstpdef.admin_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstpdef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters kunal@email.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "loginstpdef.admin_user_enters_abc_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters 123456 as passsword",
  "keyword": "And "
});
formatter.match({
  "location": "loginstpdef.admin_user_enters_abc_as_passsword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstpdef.admin_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});