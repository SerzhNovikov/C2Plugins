﻿function GetBehaviorSettings()
{
	return {
		"name":			"Cursor",
		"id":			"Cursor",
		"description":	"Move Sprite to cursor of mouse",
		"author":		"Rex.Rainbow",
		"help url":		"",
		"category":		"Movements",
		"flags":		0
	};
};

//////////////////////////////////////////////////////////////
// Actions
AddComboParamOption("No");
AddComboParamOption("Yes");
AddComboParam("Activated", "Enable the rotation behavior.",1);
AddAction(0, 0, "Set activated", "", "Set {my} activated to <i>{0}</i>", "Enable the object's rotation behavior.", "SetActivated");


//////////////////////////////////////////////////////////////
// Conditions
AddCondition(0,	cf_trigger, "On moving", "", "On moving", "Triggered when moving.", "OnMoving");             
AddCondition(1,	0, "Is moving", "", "Is moving", "Is cursor moved.", "IsMoving");             


//////////////////////////////////////////////////////////////
// Expressions
AddExpression(0, ef_return_number | ef_variadic_parameters, "Mouse X position", "Position", "X", "Get the mouse cursor X co-ordinate in the layout.");
AddExpression(1, ef_return_number | ef_variadic_parameters, "Mouse Y position", "Position", "Y", "Get the mouse cursor Y co-ordinate in the layout.");
AddExpression(2, ef_return_number, "Absolute mouse X", "Position", "AbsoluteX", "Get the mouse cursor X co-ordinate on the canvas.");
AddExpression(3, ef_return_number, "Absolute mouse Y", "Position", "AbsoluteY", "Get the mouse cursor Y co-ordinate on the canvas.");
AddExpression(4, ef_return_number, "Get activated", "", "Activated", "The activated setting, 1 is activated.");

ACESDone();

// Property grid properties for this plugin
var property_list = [
	new cr.Property(ept_combo, "Activated", "Yes", "Enable if you wish this to begin at the start of the layout.", "No|Yes"),
	];
	
// Called by IDE when a new behavior type is to be created
function CreateIDEBehaviorType()
{
	return new IDEBehaviorType();
}

// Class representing a behavior type in the IDE
function IDEBehaviorType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new behavior instance of this type is to be created
IDEBehaviorType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
