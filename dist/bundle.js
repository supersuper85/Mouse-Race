/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Common/Constants/CanvasConstants.ts":
/*!*********************************************!*\
  !*** ./Common/Constants/CanvasConstants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CanvasConstants = void 0;\nvar CanvasConstants = exports.CanvasConstants = /** @class */ (function () {\n    function CanvasConstants() {\n    }\n    CanvasConstants.WIDTH = 400;\n    CanvasConstants.HEIGHT = 360;\n    return CanvasConstants;\n}());\n\n\n//# sourceURL=webpack://Assigment/./Common/Constants/CanvasConstants.ts?");

/***/ }),

/***/ "./Common/Constants/ElementsConstants.ts":
/*!***********************************************!*\
  !*** ./Common/Constants/ElementsConstants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ElementsConstants = void 0;\nvar ElementsConstants = exports.ElementsConstants = /** @class */ (function () {\n    function ElementsConstants() {\n    }\n    ElementsConstants.MIN_SIZE = 15;\n    ElementsConstants.MAX_SIZE = 25;\n    ElementsConstants.CHASE_COLOR = \"purple\";\n    ElementsConstants.RANDOM_COLOR = \"#c22958\";\n    ElementsConstants.ESCAPE_COLOR = \"orange\";\n    ElementsConstants.UNKNOWN_COLOR = \"black\";\n    ElementsConstants.SPAWN_TIME = 2000;\n    ElementsConstants.ESCAPE_POINTS = 5;\n    return ElementsConstants;\n}());\n\n\n//# sourceURL=webpack://Assigment/./Common/Constants/ElementsConstants.ts?");

/***/ }),

/***/ "./Common/GameComponents/Chase.ts":
/*!****************************************!*\
  !*** ./Common/GameComponents/Chase.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Chase = void 0;\nvar Element_1 = __webpack_require__(/*! ./Element */ \"./Common/GameComponents/Element.ts\");\nvar Transform_1 = __webpack_require__(/*! ../RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Player_1 = __webpack_require__(/*! ../Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ../RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar Vector2_1 = __webpack_require__(/*! ../RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar ElementsConstants_1 = __webpack_require__(/*! ../Constants/ElementsConstants */ \"./Common/Constants/ElementsConstants.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ../Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar UIManager_1 = __webpack_require__(/*! ../UIManager */ \"./Common/UIManager.ts\");\nvar Chase = exports.Chase = /** @class */ (function (_super) {\n    __extends(Chase, _super);\n    function Chase() {\n        var _this = _super.call(this) || this;\n        _this.Transform = new Transform_1.Transform();\n        _this.Player = new Player_1.Player();\n        _this.CanSpawn = false;\n        _this.MIN_SPEED = 0.2;\n        _this.MAX_SPEED = 0.4;\n        _this.Canvas = Canvas_1.Canvas.getInstance();\n        Chase.InstanceCount++;\n        _this.spawn();\n        setTimeout(function () {\n            _this.CanSpawn = true;\n            _this.Transform.setColor(ElementsConstants_1.ElementsConstants.CHASE_COLOR);\n        }, ElementsConstants_1.ElementsConstants.SPAWN_TIME);\n        return _this;\n    }\n    Chase.prototype.render = function () {\n        if (!this.CanSpawn) {\n            _super.prototype.draw.call(this);\n            return;\n        }\n        if (this.Transform.collide(this.Player.getTransform())) {\n            this.onCollision();\n        }\n        this.updateTransform();\n        this.draw();\n    };\n    Chase.prototype.onCollision = function () {\n        console.log(\"A collision with an chase element has occur.\");\n        var uiManager = UIManager_1.UIManager.getInstance();\n        uiManager.endState();\n    };\n    Chase.prototype.spawn = function () {\n        var randomSizeNumber = this.getRandomNumber(ElementsConstants_1.ElementsConstants.MIN_SIZE, ElementsConstants_1.ElementsConstants.MAX_SIZE);\n        var objSize = new Vector2_1.Vector2(randomSizeNumber, randomSizeNumber);\n        this.Transform.setSize(objSize);\n        var randomPosX = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.WIDTH - objSize.X);\n        var randomPosY = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y);\n        var objPosition = new Vector2_1.Vector2(randomPosX, randomPosY);\n        this.Transform.setPosition(objPosition);\n        var randomVelocityX = this.getRandomNumber(this.MIN_SPEED + (Chase.InstanceCount * 0.05), this.MAX_SPEED);\n        var randomVelocityY = this.getRandomNumber(this.MIN_SPEED + (Chase.InstanceCount * 0.05), this.MAX_SPEED);\n        var objVelocity = new Vector2_1.Vector2(randomVelocityX, randomVelocityY);\n        this.Transform.setVelocity(objVelocity);\n    };\n    Chase.prototype.draw = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objColor = this.Transform.getColor();\n        var renderingContext = this.Canvas.getCanvasRenderingContext();\n        renderingContext.fillStyle = objColor;\n        renderingContext.beginPath();\n        renderingContext.moveTo(objPos.X + objSize.X / 4, objPos.Y);\n        renderingContext.lineTo(objPos.X + 3 * objSize.X / 4, objPos.Y);\n        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y + objSize.Y / 4);\n        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y + 3 * objSize.Y / 4);\n        renderingContext.lineTo(objPos.X + 3 * objSize.X / 4, objPos.Y + objSize.Y);\n        renderingContext.lineTo(objPos.X + objSize.X / 4, objPos.Y + objSize.Y);\n        renderingContext.lineTo(objPos.X, objPos.Y + 3 * objSize.Y / 4);\n        renderingContext.lineTo(objPos.X, objPos.Y + objSize.Y / 4);\n        renderingContext.closePath();\n        renderingContext.fill();\n    };\n    Chase.prototype.updateTransform = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objVelocity = this.Transform.getVelocity();\n        var playerPos = this.Player.getTransform().getPosition();\n        var fixedVelocityX = 0;\n        if (objPos.X < playerPos.X) {\n            fixedVelocityX = Math.abs(objVelocity.X);\n        }\n        else {\n            fixedVelocityX = -Math.abs(objVelocity.X);\n        }\n        var fixedVelocityY = 0;\n        if (objPos.Y < playerPos.Y) {\n            fixedVelocityY = Math.abs(objVelocity.Y);\n        }\n        else {\n            fixedVelocityY = -Math.abs(objVelocity.Y);\n        }\n        var newVelocity = new Vector2_1.Vector2(fixedVelocityX, fixedVelocityY);\n        this.Transform.setVelocity(newVelocity);\n        var fixedPositionX = objPos.X + newVelocity.X;\n        if (fixedPositionX < 0) {\n            fixedPositionX = 0;\n        }\n        else if (fixedPositionX + objSize.X > CanvasConstants_1.CanvasConstants.WIDTH) {\n            fixedPositionX = CanvasConstants_1.CanvasConstants.WIDTH - objSize.X;\n        }\n        var fixedPositionY = objPos.Y + newVelocity.Y;\n        if (fixedPositionY < 0) {\n            fixedPositionY = 0;\n        }\n        else if (fixedPositionY + objSize.Y > CanvasConstants_1.CanvasConstants.HEIGHT) {\n            fixedPositionY = CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y;\n        }\n        var newPosition = new Vector2_1.Vector2(fixedPositionX, fixedPositionY);\n        this.Transform.setPosition(newPosition);\n    };\n    Chase.InstanceCount = 0;\n    return Chase;\n}(Element_1.Element));\n\n\n//# sourceURL=webpack://Assigment/./Common/GameComponents/Chase.ts?");

/***/ }),

/***/ "./Common/GameComponents/Element.ts":
/*!******************************************!*\
  !*** ./Common/GameComponents/Element.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Element = void 0;\nvar Transform_1 = __webpack_require__(/*! ../RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Player_1 = __webpack_require__(/*! ../Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ../RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar Vector2_1 = __webpack_require__(/*! ../RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar ElementsConstants_1 = __webpack_require__(/*! ../Constants/ElementsConstants */ \"./Common/Constants/ElementsConstants.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ../Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar Element = /** @class */ (function () {\n    function Element() {\n        this.Transform = new Transform_1.Transform();\n        this.Player = new Player_1.Player();\n        this.Transform.setColor(ElementsConstants_1.ElementsConstants.UNKNOWN_COLOR);\n    }\n    Element.prototype.render = function () {\n        this.Canvas = Canvas_1.Canvas.getInstance();\n        if (this.Transform.collide(this.Player.getTransform())) {\n            this.onCollision();\n        }\n        this.draw();\n    };\n    Element.prototype.onCollision = function () {\n        console.log(\"A collision with an element has occur.\");\n    };\n    Element.prototype.draw = function () {\n        var renderingContext = this.Canvas.getCanvasRenderingContext();\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objColor = this.Transform.getColor();\n        renderingContext.lineWidth = 2;\n        renderingContext.strokeStyle = objColor;\n        renderingContext.strokeRect(objPos.X, objPos.Y, objSize.X, objSize.Y);\n    };\n    Element.prototype.spawn = function () {\n        var randomSizeNumber = this.getRandomNumber(ElementsConstants_1.ElementsConstants.MIN_SIZE, ElementsConstants_1.ElementsConstants.MAX_SIZE);\n        var objSize = new Vector2_1.Vector2(randomSizeNumber, randomSizeNumber);\n        this.Transform.setSize(objSize);\n        var randomPosX = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.WIDTH - objSize.X);\n        var randomPosY = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y);\n        var objPosition = new Vector2_1.Vector2(randomPosX, randomPosY);\n        this.Transform.setPosition(objPosition);\n    };\n    Element.prototype.getRandomNumber = function (number1, number2) {\n        return (Math.floor(Math.random() * (number2 - number1)) + number1);\n    };\n    return Element;\n}());\nexports.Element = Element;\n\n\n//# sourceURL=webpack://Assigment/./Common/GameComponents/Element.ts?");

/***/ }),

/***/ "./Common/GameComponents/Escape.ts":
/*!*****************************************!*\
  !*** ./Common/GameComponents/Escape.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Escape = void 0;\nvar Element_1 = __webpack_require__(/*! ./Element */ \"./Common/GameComponents/Element.ts\");\nvar Transform_1 = __webpack_require__(/*! ../RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Player_1 = __webpack_require__(/*! ../Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ../RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar Vector2_1 = __webpack_require__(/*! ../RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar ElementsConstants_1 = __webpack_require__(/*! ../Constants/ElementsConstants */ \"./Common/Constants/ElementsConstants.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ../Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar UIManager_1 = __webpack_require__(/*! ../UIManager */ \"./Common/UIManager.ts\");\nvar Escape = /** @class */ (function (_super) {\n    __extends(Escape, _super);\n    function Escape() {\n        var _this = _super.call(this) || this;\n        _this.Transform = new Transform_1.Transform();\n        _this.Player = new Player_1.Player();\n        _this.CanSpawn = false;\n        _this.MIN_SPEED = 0.2;\n        _this.MAX_SPEED = 2;\n        _this.Canvas = Canvas_1.Canvas.getInstance();\n        _this.spawn();\n        setTimeout(function () {\n            _this.CanSpawn = true;\n            _this.Transform.setColor(ElementsConstants_1.ElementsConstants.ESCAPE_COLOR);\n        }, ElementsConstants_1.ElementsConstants.SPAWN_TIME);\n        return _this;\n    }\n    Escape.prototype.render = function () {\n        if (!this.CanSpawn) {\n            _super.prototype.draw.call(this);\n            return;\n        }\n        if (this.Transform.collide(this.Player.getTransform())) {\n            this.onCollision();\n        }\n        this.updateTransform();\n        this.draw();\n    };\n    Escape.prototype.onCollision = function () {\n        console.log(\"A collision with an escape element has occur.\");\n        var uiManager = UIManager_1.UIManager.getInstance();\n        uiManager.addScore(ElementsConstants_1.ElementsConstants.ESCAPE_POINTS);\n        this.spawn();\n    };\n    Escape.prototype.spawn = function () {\n        var randomSizeNumber = this.getRandomNumber(ElementsConstants_1.ElementsConstants.MIN_SIZE, ElementsConstants_1.ElementsConstants.MAX_SIZE);\n        var objSize = new Vector2_1.Vector2(randomSizeNumber, randomSizeNumber);\n        this.Transform.setSize(objSize);\n        var randomPosX = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.WIDTH - objSize.X);\n        var randomPosY = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y);\n        var objPosition = new Vector2_1.Vector2(randomPosX, randomPosY);\n        this.Transform.setPosition(objPosition);\n        var randomVelocityX = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED);\n        var randomVelocityY = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED);\n        var objVelocity = new Vector2_1.Vector2(randomVelocityX, randomVelocityY);\n        this.Transform.setVelocity(objVelocity);\n    };\n    Escape.prototype.draw = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objColor = this.Transform.getColor();\n        var renderingContext = this.Canvas.getCanvasRenderingContext();\n        renderingContext.fillStyle = objColor;\n        renderingContext.beginPath();\n        renderingContext.arc(objPos.X + objSize.X / 2, objPos.Y + objSize.Y / 2, objSize.X / 2, 0, 2 * Math.PI);\n        renderingContext.fill();\n    };\n    Escape.prototype.updateTransform = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objVelocity = this.Transform.getVelocity();\n        var playerPos = this.Player.getTransform().getPosition();\n        var fixedVelocityX = 0;\n        if (objPos.X < playerPos.X) {\n            fixedVelocityX = -Math.abs(objVelocity.X);\n        }\n        else {\n            fixedVelocityX = Math.abs(objVelocity.X);\n        }\n        var fixedVelocityY = 0;\n        if (objPos.Y < playerPos.Y) {\n            fixedVelocityY = -Math.abs(objVelocity.Y);\n        }\n        else {\n            fixedVelocityY = Math.abs(objVelocity.Y);\n        }\n        var newVelocity = new Vector2_1.Vector2(fixedVelocityX, fixedVelocityY);\n        this.Transform.setVelocity(newVelocity);\n        var fixedPositionX = objPos.X + newVelocity.X;\n        if (fixedPositionX < 0) {\n            fixedPositionX = 0;\n        }\n        else if (fixedPositionX + objSize.X > CanvasConstants_1.CanvasConstants.WIDTH) {\n            fixedPositionX = CanvasConstants_1.CanvasConstants.WIDTH - objSize.X;\n        }\n        var fixedPositionY = objPos.Y + newVelocity.Y;\n        if (fixedPositionY < 0) {\n            fixedPositionY = 0;\n        }\n        else if (fixedPositionY + objSize.Y > CanvasConstants_1.CanvasConstants.HEIGHT) {\n            fixedPositionY = CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y;\n        }\n        var newPosition = new Vector2_1.Vector2(fixedPositionX, fixedPositionY);\n        this.Transform.setPosition(newPosition);\n    };\n    return Escape;\n}(Element_1.Element));\nexports.Escape = Escape;\n\n\n//# sourceURL=webpack://Assigment/./Common/GameComponents/Escape.ts?");

/***/ }),

/***/ "./Common/GameComponents/Random.ts":
/*!*****************************************!*\
  !*** ./Common/GameComponents/Random.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Random = void 0;\nvar Element_1 = __webpack_require__(/*! ./Element */ \"./Common/GameComponents/Element.ts\");\nvar Transform_1 = __webpack_require__(/*! ../RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Player_1 = __webpack_require__(/*! ../Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ../RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar Vector2_1 = __webpack_require__(/*! ../RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar ElementsConstants_1 = __webpack_require__(/*! ../Constants/ElementsConstants */ \"./Common/Constants/ElementsConstants.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ../Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar UIManager_1 = __webpack_require__(/*! ../UIManager */ \"./Common/UIManager.ts\");\nvar Random = /** @class */ (function (_super) {\n    __extends(Random, _super);\n    function Random() {\n        var _this = _super.call(this) || this;\n        _this.Transform = new Transform_1.Transform();\n        _this.Player = new Player_1.Player();\n        _this.CanSpawn = false;\n        _this.MIN_SPEED = 0.2;\n        _this.MAX_SPEED = 2;\n        _this.Canvas = Canvas_1.Canvas.getInstance();\n        _this.spawn();\n        setTimeout(function () {\n            _this.CanSpawn = true;\n            _this.Transform.setColor(ElementsConstants_1.ElementsConstants.RANDOM_COLOR);\n        }, ElementsConstants_1.ElementsConstants.SPAWN_TIME);\n        return _this;\n    }\n    Random.prototype.render = function () {\n        if (!this.CanSpawn) {\n            _super.prototype.draw.call(this);\n            return;\n        }\n        if (this.Transform.collide(this.Player.getTransform())) {\n            this.onCollision();\n        }\n        this.updateTransform();\n        this.draw();\n    };\n    Random.prototype.onCollision = function () {\n        console.log(\"A collision with an random element has occur.\");\n        var uiManager = UIManager_1.UIManager.getInstance();\n        uiManager.endState();\n    };\n    Random.prototype.spawn = function () {\n        var randomSizeNumber = this.getRandomNumber(ElementsConstants_1.ElementsConstants.MIN_SIZE, ElementsConstants_1.ElementsConstants.MAX_SIZE);\n        var objSize = new Vector2_1.Vector2(randomSizeNumber, randomSizeNumber);\n        this.Transform.setSize(objSize);\n        var randomPosX = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.WIDTH - objSize.X);\n        var randomPosY = this.getRandomNumber(1, CanvasConstants_1.CanvasConstants.HEIGHT - objSize.Y);\n        var objPosition = new Vector2_1.Vector2(randomPosX, randomPosY);\n        this.Transform.setPosition(objPosition);\n        var randomVelocityX = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED) * this.getRandomNumber(0.1, 1);\n        var randomVelocityY = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED) * this.getRandomNumber(-1, -0.1);\n        var objVelocity = new Vector2_1.Vector2(randomVelocityX, randomVelocityY);\n        this.Transform.setVelocity(objVelocity);\n    };\n    Random.prototype.draw = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objColor = this.Transform.getColor();\n        var renderingContext = this.Canvas.getCanvasRenderingContext();\n        renderingContext.fillStyle = objColor;\n        renderingContext.beginPath();\n        renderingContext.moveTo(objPos.X, objPos.Y);\n        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y);\n        renderingContext.lineTo(objPos.X + (objSize.X / 2), objPos.Y + objSize.Y);\n        renderingContext.closePath();\n        renderingContext.fill();\n    };\n    Random.prototype.updateTransform = function () {\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objVelocity = this.Transform.getVelocity();\n        var fixedVelocityX = objVelocity.X;\n        if (objPos.X < 0) {\n            fixedVelocityX = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED);\n        }\n        else if (objPos.X + objSize.X > CanvasConstants_1.CanvasConstants.WIDTH) {\n            fixedVelocityX = (this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED)) * (-1);\n        }\n        var fixedVelocityY = objVelocity.Y;\n        if (objPos.Y < 0) {\n            fixedVelocityY = this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED);\n        }\n        else if (objPos.Y + objSize.Y > CanvasConstants_1.CanvasConstants.HEIGHT) {\n            fixedVelocityY = (this.getRandomNumber(this.MIN_SPEED, this.MAX_SPEED)) * (-1);\n        }\n        var newVelocity = new Vector2_1.Vector2(fixedVelocityX, fixedVelocityY);\n        this.Transform.setVelocity(newVelocity);\n        var newPosX = objPos.X + newVelocity.X;\n        var newPosY = objPos.Y + newVelocity.Y;\n        var newPosition = new Vector2_1.Vector2(newPosX, newPosY);\n        this.Transform.setPosition(newPosition);\n    };\n    return Random;\n}(Element_1.Element));\nexports.Random = Random;\n\n\n//# sourceURL=webpack://Assigment/./Common/GameComponents/Random.ts?");

/***/ }),

/***/ "./Common/GameManager.ts":
/*!*******************************!*\
  !*** ./Common/GameManager.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameManager = void 0;\nvar Random_1 = __webpack_require__(/*! ./GameComponents/Random */ \"./Common/GameComponents/Random.ts\");\nvar Player_1 = __webpack_require__(/*! ./Player */ \"./Common/Player.ts\");\nvar Canvas_1 = __webpack_require__(/*! ./RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar Escape_1 = __webpack_require__(/*! ./GameComponents/Escape */ \"./Common/GameComponents/Escape.ts\");\nvar Chase_1 = __webpack_require__(/*! ./GameComponents/Chase */ \"./Common/GameComponents/Chase.ts\");\nvar UIManager_1 = __webpack_require__(/*! ./UIManager */ \"./Common/UIManager.ts\");\nvar GameManager = /** @class */ (function () {\n    function GameManager() {\n        this.StartButton = document.querySelector(\".start_container\");\n        this.ReplayButton = document.querySelectorAll(\".end_generic_component\")[1];\n    }\n    GameManager.prototype.createSession = function () {\n        var _this = this;\n        this.StartButton.addEventListener(\"click\", function () {\n            _this.play();\n        });\n        this.ReplayButton.addEventListener(\"click\", function () {\n            _this.play();\n        });\n    };\n    GameManager.prototype.play = function () {\n        var _this = this;\n        if (this.IntervalId != null) {\n            clearInterval(this.IntervalId);\n        }\n        this.Renderables = [];\n        var player = new Player_1.Player();\n        this.Renderables.push(player);\n        for (var i = 0; i < 3; i++) {\n            var random = new Random_1.Random();\n            var escape_1 = new Escape_1.Escape();\n            var chase = new Chase_1.Chase();\n            this.Renderables.push(random);\n            this.Renderables.push(escape_1);\n            this.Renderables.push(chase);\n        }\n        var uiManager = UIManager_1.UIManager.getInstance();\n        uiManager.playState();\n        var canvas = Canvas_1.Canvas.getInstance();\n        this.IntervalId = setInterval(function () {\n            canvas.clear();\n            _this.Renderables.forEach(function (renderable) { return renderable.render(); });\n        }, 5);\n    };\n    return GameManager;\n}());\nexports.GameManager = GameManager;\n\n\n//# sourceURL=webpack://Assigment/./Common/GameManager.ts?");

/***/ }),

/***/ "./Common/Player.ts":
/*!**************************!*\
  !*** ./Common/Player.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nvar Transform_1 = __webpack_require__(/*! ./RenderComponents/Transform */ \"./Common/RenderComponents/Transform.ts\");\nvar Vector2_1 = __webpack_require__(/*! ./RenderComponents/Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar Canvas_1 = __webpack_require__(/*! ./RenderComponents/Canvas */ \"./Common/RenderComponents/Canvas.ts\");\nvar CanvasConstants_1 = __webpack_require__(/*! ./Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar Player = /** @class */ (function () {\n    function Player() {\n        this.Transform = new Transform_1.Transform();\n        this.PLAYER_XSIZE = 17;\n        this.PLAYER_YSIZE = 17;\n        this.PLAYER_COLOR = \"brown\";\n        this.Canvas = Canvas_1.Canvas.getInstance();\n        this.Transform.setSize(new Vector2_1.Vector2(this.PLAYER_XSIZE, this.PLAYER_YSIZE));\n        this.Transform.setColor(this.PLAYER_COLOR);\n        this.setMouseMoveEvent();\n    }\n    Player.prototype.render = function () {\n        var renderingContext = this.Canvas.getCanvasRenderingContext();\n        var objPos = this.Transform.getPosition();\n        var objSize = this.Transform.getSize();\n        var objColor = this.Transform.getColor();\n        renderingContext.fillStyle = objColor;\n        renderingContext.fillRect(objPos.X, objPos.Y, objSize.X, objSize.Y);\n    };\n    Player.prototype.getTransform = function () {\n        return this.Transform;\n    };\n    Player.prototype.setMouseMoveEvent = function () {\n        var _this = this;\n        window.addEventListener('mousemove', function (event) {\n            var playerSize = _this.Transform.getSize();\n            var canvasRect = _this.Canvas.getRectangle();\n            var mouseX = event.clientX - canvasRect.left;\n            var mouseY = event.clientY - canvasRect.top;\n            var posX = Math.min(Math.max(mouseX - playerSize.X / 2, 0), CanvasConstants_1.CanvasConstants.WIDTH - playerSize.X);\n            var posY = Math.min(Math.max(mouseY - playerSize.Y / 2, 0), CanvasConstants_1.CanvasConstants.HEIGHT - playerSize.Y);\n            var newPos = new Vector2_1.Vector2(posX, posY);\n            _this.Transform.setPosition(newPos);\n        });\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack://Assigment/./Common/Player.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Canvas.ts":
/*!*******************************************!*\
  !*** ./Common/RenderComponents/Canvas.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Canvas = void 0;\nvar CanvasConstants_1 = __webpack_require__(/*! ../Constants/CanvasConstants */ \"./Common/Constants/CanvasConstants.ts\");\nvar Canvas = /** @class */ (function () {\n    function Canvas() {\n        this.Canvas = document.querySelector('canvas');\n        this.Canvas.width = CanvasConstants_1.CanvasConstants.WIDTH;\n        this.Canvas.height = CanvasConstants_1.CanvasConstants.HEIGHT;\n    }\n    Canvas.getInstance = function () {\n        if (!Canvas.instance) {\n            Canvas.instance = new Canvas();\n        }\n        return Canvas.instance;\n    };\n    Canvas.prototype.clear = function () {\n        var ctx = this.Canvas.getContext('2d');\n        ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);\n    };\n    Canvas.prototype.getRectangle = function () {\n        var canvasRect = this.Canvas.getBoundingClientRect();\n        return canvasRect;\n    };\n    Canvas.prototype.getCanvasRenderingContext = function () {\n        return this.Canvas.getContext('2d');\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Canvas.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Transform.ts":
/*!**********************************************!*\
  !*** ./Common/RenderComponents/Transform.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Transform = void 0;\nvar Vector2_1 = __webpack_require__(/*! ./Vector2 */ \"./Common/RenderComponents/Vector2.ts\");\nvar Transform = /** @class */ (function () {\n    function Transform() {\n        this.Size = new Vector2_1.Vector2(0, 0);\n        this.Position = new Vector2_1.Vector2(0, 0);\n        this.Velocity = new Vector2_1.Vector2(0, 0);\n    }\n    Transform.prototype.getSize = function () {\n        return this.Size;\n    };\n    Transform.prototype.setSize = function (newSize) {\n        this.Size = newSize;\n    };\n    Transform.prototype.getPosition = function () {\n        return this.Position;\n    };\n    Transform.prototype.setPosition = function (newPos) {\n        this.Position = newPos;\n    };\n    Transform.prototype.getVelocity = function () {\n        return this.Velocity;\n    };\n    Transform.prototype.setVelocity = function (newVelocity) {\n        this.Velocity = newVelocity;\n    };\n    Transform.prototype.getColor = function () {\n        return this.Color;\n    };\n    Transform.prototype.setColor = function (newColor) {\n        this.Color = newColor;\n    };\n    Transform.prototype.collide = function (other) {\n        var thisPos = this.Position;\n        var thisSize = this.Size;\n        var otherPos = other.getPosition();\n        var otherSize = other.getSize();\n        return (thisPos.X < otherPos.X + otherSize.X &&\n            thisPos.X + thisSize.X > otherPos.X &&\n            thisPos.Y < otherPos.Y + otherSize.Y &&\n            thisPos.Y + thisSize.Y > otherPos.Y);\n    };\n    return Transform;\n}());\nexports.Transform = Transform;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Transform.ts?");

/***/ }),

/***/ "./Common/RenderComponents/Vector2.ts":
/*!********************************************!*\
  !*** ./Common/RenderComponents/Vector2.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vector2 = void 0;\nvar Vector2 = /** @class */ (function () {\n    function Vector2(x, y) {\n        this.X = x;\n        this.Y = y;\n    }\n    return Vector2;\n}());\nexports.Vector2 = Vector2;\n\n\n//# sourceURL=webpack://Assigment/./Common/RenderComponents/Vector2.ts?");

/***/ }),

/***/ "./Common/UIManager.ts":
/*!*****************************!*\
  !*** ./Common/UIManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UIManager = void 0;\nvar ElementsConstants_1 = __webpack_require__(/*! ./Constants/ElementsConstants */ \"./Common/Constants/ElementsConstants.ts\");\nvar UIManager = /** @class */ (function () {\n    function UIManager() {\n        this.Counter = 0;\n        this.StartComponent = document.querySelector(\".start_container\");\n        this.PlayComponent = document.querySelector(\".play_container\");\n        this.EndComponent = document.querySelector(\".end_container\");\n        this.PlayCounter = document.getElementById(\"score_counter\");\n        this.FinalScore = document.getElementById(\"score_final\");\n    }\n    UIManager.getInstance = function () {\n        if (!UIManager.instance) {\n            UIManager.instance = new UIManager();\n        }\n        return UIManager.instance;\n    };\n    UIManager.prototype.playState = function () {\n        var _this = this;\n        if (this.GameStarted) {\n            return;\n        }\n        this.Counter = 0;\n        this.PlayCounter.innerHTML = \"Score: \" + this.Counter;\n        this.GameStarted = true;\n        this.changeComponentStatus(false, this.StartComponent);\n        this.changeComponentStatus(true, this.PlayComponent);\n        this.changeComponentStatus(false, this.EndComponent);\n        setTimeout(function () {\n            _this.IntervalId = setInterval(function () {\n                _this.Counter++;\n                _this.PlayCounter.innerHTML = \"Score: \" + _this.Counter;\n            }, 1000);\n        }, ElementsConstants_1.ElementsConstants.SPAWN_TIME);\n    };\n    UIManager.prototype.endState = function () {\n        clearInterval(this.IntervalId);\n        this.FinalScore.innerHTML = this.Counter.toString();\n        this.changeComponentStatus(false, this.PlayComponent);\n        this.changeComponentStatus(true, this.EndComponent);\n        this.GameStarted = false;\n    };\n    UIManager.prototype.addScore = function (addValue) {\n        this.Counter += addValue;\n        this.PlayCounter.innerHTML = \"Score: \" + this.Counter;\n    };\n    UIManager.prototype.getScore = function () {\n        return this.Counter;\n    };\n    UIManager.prototype.changeComponentStatus = function (newStatus, component) {\n        if (newStatus) {\n            component.classList.add(\"active\");\n            component.classList.remove(\"inactive\");\n        }\n        else {\n            component.classList.add(\"inactive\");\n            component.classList.remove(\"active\");\n        }\n    };\n    return UIManager;\n}());\nexports.UIManager = UIManager;\n\n\n//# sourceURL=webpack://Assigment/./Common/UIManager.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar GameManager_1 = __webpack_require__(/*! ./Common/GameManager */ \"./Common/GameManager.ts\");\nvar gameManager = new GameManager_1.GameManager();\ngameManager.createSession();\n\n\n//# sourceURL=webpack://Assigment/./main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;