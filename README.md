# W3bButton
[https://webwizart.github.io/w3bblocks/](https://webwizart.github.io/w3bblocks/)

<!-- vscode-markdown-toc -->
* 1. [General guidance](#Generalguidance)
* 2. [Variations](#Variations)
* 3. [Labels](#Labels)
* 4. [Icons](#Icons)
* 5. [Danger Button](#DangerButton)
* 6. [Properties](#Properties)
* 7. [Examples](#Examples)
* 8. [Getting Started](#GettingStarted)
	* 8.1. [Install dependencies](#Installdependencies)
	* 8.2. [Start](#Start)
	* 8.3. [Build](#Build)
	* 8.4. [Test](#Test)
	* 8.5. [Coverage](#Coverage)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Usage
##  1. <a name='Generalguidance'></a>General guidance
Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

Buttons are used primarily on action items. Some examples include Add, Save, Delete, and Sign up. Each page can have one or two primary buttons. Any remaining calls-to-action should be represented as secondary buttons.

Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.

##  2. <a name='Variations'></a>Variations
- Primary -	For the principal call to action on the page.
- Secondary -	For secondary actions on each page.
- Button with icon -	When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.
- Disabled button -	Use when the user cannot proceed until an input is collected.
- Danger button -	When an action has potentially destructive effects on the user’s data (delete, remove, etc).

##  3. <a name='Labels'></a>Labels
Button labels should clearly indicate the action of the button. Use active verbs, such as Add or Delete. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words for button labels.

For sets of buttons, use specific labels, such as Save or Discard, instead of using OK and Cancel. This is particularly helpful when the user is confirming an action.

##  4. <a name='Icons'></a>Icons
- Use icons (16px) within buttons.
- Wrap icons with `<W3bButton>`
- Icons should always appear to the right of the text.
- Icons used in buttons must be directly related to the action that the user is taking.
- Icons must be the same color value as the text within a button.

##  5. <a name='DangerButton'></a>Danger Button
Danger buttons have a different visual style to inform users of potentially destructive actions they are about to take. If using the danger button as a standalone, we recommend styling it as a secondary button. Within a set, the danger button should be styled as a primary button.

# Style 
|Class	                | Property	            | Color token
|-----------------------|-----------------------|-----------------------|
|.primary    	        | text color	        | $text-04              |
|.primary               | background-color	    | $interactive-01       |
|:hover	                | background-color	    | $hover-primary        |
|:active	            | background-color	    | $active-primary       |
|:focus	                | border           	    | $focus                |
|:disabled	            | background-color	    | $disabled-02          |
|:disabled              | text color	        | $disabled-03          |

# Code
##  6. <a name='Properties'></a>Properties
The **W3bButton** component extends from **React.HTMLAttributes<type>** and has most of the native properties. 
For more details on attributes check the full list at
[React HTML Attributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes).

Custom attributes will be prefixed with `w3b`,  **w3b-style, w3b-theme, w3b-size**

 - value - **string**: The text displayed on the button or button label
 - disabled - **boolean**: the component is inactive
 - theme - **string**: `primary/secondary`
 - size - **string**: `small/medium/large`
 - experiment - **object** een object with style rules to overwrite the default styling. Used for storybook
 - onClick - due to extendtion of HTMLAttributes this propertie is available and can be used.
 
##  7. <a name='Examples'></a>Examples
Make a new Default W3bButton
~~~ JavaScript
<W3bButton></W3bButton>
~~~

Make a new Configured W3bButton
~~~ JavaScript

<W3bButton 
    onClick={(event) => (handleClick(event))}
    theme="primary"  
    size="small" 
    experiment={{'color': 'yellow'}}
/>
<W3bButton 
    onClick={(event) => (handleClick(event))}
    theme="secondary"  
    size="large" 
    value="Next"
/>
<W3bButton 
    onClick={(event) => (handleClick(event))}
    theme="secondary"  
    size="large" 
    value="Next"
    disabled
/>

~~~

##  8. <a name='GettingStarted'></a>Getting Started

###  8.1. <a name='Installdependencies'></a>Install dependencies

```
$ npm install
```

###  8.2. <a name='Start'></a>Start

starts webpack and serves the code

```
$ npm run start
```

###  8.3. <a name='Build'></a>Build

gives you a build folder and a transpiled version of the butten with styling.
tests and coverage are triggered first before build

```
$ npm run build
```

###  8.4. <a name='Test'></a>Test

run tests via Jest & Enzyme

```
$ npm run test
```

###  8.5. <a name='Coverage'></a>Coverage

to get a coverage report in console and a website report

```
$ npm run coverage
```

|File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|---------------|----------|----------|----------|----------|-------------------|
|All files | 93.33 | 92.86 | 100 | 93.33 | |
|w3bButton.css | 100 | 100 | 100 | 100 | |
|w3bButton.js | 91.67 | 92.86 | 100 | 91.67 | 26 |

Test Suites: 1 passed, 1 total

Tests: 6 passed, 6 total

Snapshots: 0 total

Time: 1.588s, estimated 2s
