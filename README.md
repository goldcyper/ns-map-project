# Make a Map for Nationstates
Regional Map - HTML & JS SVG Map

This project was created to allow for easy editing of a HTML SVG map without creating a full on web application.

Live Preview Link: https://goldcyper.github.io/ns-map-project/

# Set Up Instructions
Follow these instructions to set up a regional svg map on github or your own hosting

### Prerequisite Resources
* Web Browser such as Chrome, Edge, Firefox, or Safari
* Inkscape or an equivalent SVG image Editor for SVG files
* Github itself or an Editor that can edit html files such as Notepad++, Sublime Text, or Visual Studio Code
* Some knowledge of HTML and CSS (to edit the HTML file)
* Google Spreadsheet or equivalent service for hosting the CSV file
* Github account or hosting provider for the HTML file

### Hosting Options

1. There are multiple ways you could host this map:

<ul>
  <li>Create a new github account and use it to specifically host a forked project such as: https://github_account_name.github.io/ns-map-project/</li>
  <li>Self host on your own web host such as: https://www.example_page.com/regional_map</li>
</ul>

2. Once you have decided where you plan to host it, then you need to decide whether to host the csv file, which I'd highly recommend be through a google sheet or equivalent.

### Hosting on Github

This will go through the process of hosting on gitub.

1. It is easier to just fork this repository on your github account and rename it and modify files, but you could create a new repository manually as well. 

### Hosting on web hosting

There are two options here, to either put it all in a single html file that links to a csv file, or to use the web design format.

Web design format

1. On your hosting account create the directory as follows:

<ul>
  <li>yourhosting\public_html\regional_map\</li>
  <li>yourhosting\public_html\regional_map\css</li>
  <li>yourhosting\public_html\regional_map\js</li>
</ul>

2. Upload the regional map html file in the regional_map folder, and call it whatever you wish such as index.html

3. Upload the style.css file to the css folder, but if you rename this, you must also rename it in the html file.

4. Upload the map-script.js file to the scripts folder

Editing the javascript file

The fetch in the javascript file refers to taking the data from the csv file to use for your map.

This is an example fetch from a google spreadsheet:

<ul>
  <li>fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTXT_iOZlIetp7jw_IT70nmOO55vXqZfyuL7BfdV4pYfhexJzbFTN2-RWHpn5SDOzQqn5XiUqMQNKig/pubhtml')</li>
</ul>

### Running the Project
Placeholder

### Editing the CSV or Data File

The CSV or Data file is something you will edit often unless you keep the map the same

1. Maintain the format of the first row being the header row:

Row 1: Label  | URL | Fill Color | Label (X,Y) Position | Stroke Color | Stroke Width | SVG Path   |

Row 2: Nation | URL | #BFBFBF    |  (Optional)          | #fff         |  .97482px    | m1744[...] |

[...]

2. Add your data such as the nation names, nation urls, fill colors for each nation, label positions (optional), and so on

3. Publish the google spreadsheet to the web:

![File Share](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/Map%20CSV%20Step%201.png)

![Publish to Web](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/Map%20CSV%20Step%202.png)

You might also want to share this file so others can view it:

![Share CSV](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/Map%20CSV%20Step%201.png)

### Editing the HTML page and CSS

The style sheet could be hosted as a seperate file, or kept together in a Self-Contained HTML file as shown in the example below. 

1. Open/Edit the HTML page in your chosen Editor or Github.

Look for the following:

    <title>Interactive SVG Map</title>
    <style>
        svg {
            width: 100%;
            height: auto;
            background-color: lightgray;
        }
        .label {
            font-size: 12px;
            font-weight: bold;
            color: black;
        }
    </style>

Breaking this down into two parts, SVG and Label.

SVG and general map:
  <ul>
  <li><title>Interactive SVG Map</title> sets the title of the map</li>
  <li>width and height is best left alone as this exists to make the map responsive</li>
  <li>background-color: lightgray is setting the map background to lightgray, but you might want this as lightblue, white, or another hex color</li>
</ul>

Label in map:
  <ul>
  <li>font-size: 12px; sets the size of the text to 12px</li>
  <li>font-weight: bold; sets the font-weight to bold, but it could be any other weight</li>
  <li>color: black; sets the color of the labels to black, or another hex color</li>
</ul>

If you want understand more how to edit css text and css colors, you are advised to visit: https://www.w3schools.com/css/css_text.asp

### Self-Contained HTML Example:

This is a self-contained html file that links to a google spreadsheet: https://github.com/goldcyper/ns-map-project/blob/main/regional-map.html

This might be easier to use if you just want to edit a single html file and not have to host multiple files.

### CSV HTML File Example:

This is an example CSV file used in the self-contained file: https://docs.google.com/spreadsheets/d/1WqdPXvlTyvYHbhkGmvTaLwvhkRyNrFhbTB3W8JJuSHE/edit?usp=sharing

You can use this to copy your own google spreedsheet file.

### Output in Browser:
![Image of Output](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/map-example.png)

## Author
[newrogerns](https://github.com/newrogerns)

Otherwise known as [New Rogernomics](https://nationstates.net/nation=New_Rogernomics) on Nationstates

## Acknowledgments
Acknowledgments to [Microsoft Co Pilot](https://copilot.microsoft.com/), which was really useful in helping me troubleshoot
