# Day 11: HTML, CSS & DOM Selectors Notebook

## Overview
Notes and selector experiments mapping out HTML structure, semantic elements, and CSS selector strategies used for UI test automation.

## Target Site 1: SauceDemo (https://www.saucedemo.com)
* **Username Input Field**: 
  * CSS ID Selector: `#user-name`
  * Attribute Selector: `[data-testid="username"]`
* **Password Input Field**: 
  * CSS ID Selector: `#password`
* **Login Button**: 
  * CSS ID Selector: `#login-button`
  * Class Selector: `.submit-button`

## Target Site 2: The Internet Herokuapp (https://the-internet.herokuapp.com/login)
* **Username Field**: 
  * CSS ID Selector: `#username`
* **Password Field**: 
  * CSS ID Selector: `#password`
* **Login Submit Button**: 
  * Child/Tag Selector: `button[type="submit"]`

## Target Site 3: Automation Exercise (https://automationexercise.com)
* **Signup/Login Nav Link**: 
  * Attribute/Href Selector: `a[href="/login"]`
* **Subscription Email Input**: 
  * ID Selector: `#susbscribe_email`
* **Subscribe Button**: 
  * ID Selector: `#subscribe`

## DevTools Console Shortcuts Learned
* `$('#element-id')` to find a single unique element.
* `$$('.class-name')` to find all matching elements as an array list.
