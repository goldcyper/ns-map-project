# Make a Map for Nationstates
Regional Map - HTML & JS SVG Map

This project was created to allow for easy editing of a HTML SVG map without creating a full on web application.

Live Preview Link: Placeholder

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
  <li>Create a new github account and use it to specifically host a forked project such as: https://github.com/github_account_name/regional_map</li>
  <li>Self host on your own web host such as: https://www.example_page.com/regional_map</li>
</ul>

2. Once you have decided where you plan to host it, then you need to decide whether to host the csv file, which I'd highly recommend be through a google sheet or equivalent.

### Hosting on Github

This will go through the process of hosting the 

1. It is easier to just fork this repository on your github account and rename it, but you could create a new repository manually too, up to you.

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

This is an example fetch from github:

fetch('CSV.csv')

If you are using a google sheet or a web page it would look something like this:

<ul>
  <li>(https://docs.google.com/spreadsheets/d/e/2PACX-1vTXT_iOZlIetp7jw_IT70nmOO55vXqZfyuL7BfdV4pYfhexJzbFTN2-RWHpn5SDOzQqn5XiUqMQNKig/pubhtml)</li>
  <li>(https://docs.google.com/spreadsheets/d/e/2PACX-1vTXT_iOZlIetp7jw_IT70nmOO55vXqZfyuL7BfdV4pYfhexJzbFTN2-RWHpn5SDOzQqn5XiUqMQNKig/pub?output=csv)</li>
  <li>https://www.mywebsite.com/CSV.csv</li>
</ul>

### Running the Project
Placeholder

### Editing the CSV or Data File

The CSV or Data file is something you will edit often unless you keep the map the same

1. Maintain the format of the first row being the header row:

Row 1: Label  | URL | Fill Color | Label (X,Y) Position | Stroke Color | Stroke Width | SVG Path   |

Row 2: Nation | URL | #BFBFBF    |  (Optional)          | #fff         |  .97482px    | m1744[...] |

[...]

### Editing the HTML page

This is something that really only needs to have edits to the style sheet portion, but the style sheet could be hosted as a seperate file.

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
        }
    </style>

2. Follow the steps discussed in Installation for editing the file again.

### Output in Browser:
![Image of Output](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/map-example.png)

## Author
[newrogerns](https://github.com/newrogerns)

Otherwise known as [New Rogernomics](https://nationstates.net/nation=New_Rogernomics) on Nationstates

## Acknowledgments
Acknowledgments to [Microsoft Co Pilot](https://copilot.microsoft.com/), which was really useful in helping me troubleshoot
