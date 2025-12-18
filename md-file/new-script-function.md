# New Script Function

**Handlebars · Functions**

## Overview

The `new_script_function` allows you to inject custom JavaScript code into the `<head>` section of your page. This is useful for:

- Initializing third-party analytics or tracking scripts
- Setting up global variables or configuration
- Running custom initialization code
- Adding event listeners that need to run early

The scripts are injected as raw JavaScript and executed in the order they appear in the array. Each script in the array is placed within a single `<script>` tag.

## HTML Structure

The script function injects a `<script>` tag with the ID `user-extra-script` into the `<head>` section. Each item in the `new_script_function` array is concatenated and executed.

```handlebars
<!-- Custom Script Function -->
<script id="user-extra-script">
  {{#each new_script_function}} {{{this}}}
  {{/each}}
</script>
```

## JavaScript Injection

The scripts are injected directly into the document head. They execute immediately when the page loads, before the DOM is fully ready. If you need to wait for the DOM, wrap your code in a `DOMContentLoaded` event listener.

```javascript
// Scripts are injected directly into the <head> section
// Each item in the new_script_function array is executed as raw JavaScript

// Example: The scripts are placed in a <script> tag with id="user-extra-script"
// Multiple scripts can be provided in the array
```

## JSON Structure

The `new_script_function` is an array of strings, where each string contains JavaScript code. The code is executed as-is, so make sure it's valid JavaScript.

```json
{
  "new_script_function": [
    "console.log('Welcome to our website!');",
    "window.myCustomFunction = function() { console.log('Custom function loaded'); };"
  ]
}
```

## Usage Examples

Here are some common use cases for the script function:

```json
// Example 1: Simple console log
{
  "new_script_function": [
    "console.log('Page loaded successfully');"
  ]
}

// Example 2: Initialize a third-party library
{
  "new_script_function": [
    "if (typeof gtag !== 'undefined') { gtag('config', 'GA_MEASUREMENT_ID'); }"
  ]
}

// Example 3: Custom initialization
{
  "new_script_function": [
    "(function() { window.myApp = { init: function() { console.log('App initialized'); } }; })();"
  ]
}

// Example 4: Multiple scripts
{
  "new_script_function": [
    "console.log('Script 1 loaded');",
    "console.log('Script 2 loaded');",
    "window.customVar = 'value';"
  ]
}
```

> **WARNING**  
> Be careful when injecting scripts. Always validate and sanitize any user-provided code to prevent XSS attacks. Only use trusted sources for script content.



