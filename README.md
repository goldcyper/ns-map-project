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

The final directory path would look something like this if you want to host it on github:
<ul>
  <li>your_account_name/ns-map-project/index.html</li>
  <li>your_account_name/ns-map-project/css/style.css</li>
  <li>your_account_name/ns-map-project/js/map-script.js</li>
</ul>

Alternatively you could just use the self-contained html example shown further below.

### Hosting on web hosting

There are two options here, to either put it all in a single html file that links to a csv file, or to use the web design format.

Web design format

1. On your hosting account create the directory as follows:

<ul>
  <li>yourhosting/public_html/regional_map/</li>
  <li>yourhosting/public_html/regional_map/css</li>
  <li>yourhosting/public_html/regional_map/js</li>
</ul>

2. Upload the regional map html file in the regional_map folder, and call it whatever you wish such as index.html

3. Upload the style.css file to the css folder, but if you rename this, you must also rename it in the html file.

4. Upload the map-script.js file to the scripts folder

The final directory path would look something like this:
<ul>
  <li>yourhosting/public_html/regional_map/index.html</li>
  <li>yourhosting/public_html/regional_ma/css/style.css</li>
  <li>yourhosting/public_html/regional_map/js/map-script.js</li>
</ul>

Alternatively you could just use the self-contained html example shown further below.

Editing the javascript file

The fetch in the javascript file refers to taking the data from the csv file to use for your map.

This is an example fetch from a google spreadsheet:

<ul>
  <li>fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTXT_iOZlIetp7jw_IT70nmOO55vXqZfyuL7BfdV4pYfhexJzbFTN2-RWHpn5SDOzQqn5XiUqMQNKig/pubhtml')</li>
</ul>

### Running the Project

1. If you are using github to run the project you just need to have the files hosted 

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

![Share CSV](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/Share%20CSV.png)

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

### Preparing SVG File

It is reccomended to open the file in Inkscape and then save it first, as Inkscape will make it a lot nicer to view.

You need to extract the path data from the svg image:

 <path
   d="m 1744.6756,471.13573 1.0116,-1.64571 0.5057,-0.41143 h 5.0577 l 2.5289,4.52571 3.0346,0.82285 0.5058,2.88 4.5519,2.87999 v 0.41143 l 1.5173,3.70285 3.0347,1.64572 1.0115,-0.41143 5.0577,2.46857 h 0.5058 l 5.0577,1.64571 0.5058,2.87999 -2.0231,2.88 1.5173,3.29142 -1.0115,2.88 1.0115,1.23428 1.5173,1.64572 2.5289,0.41142 4.5519,3.29143 v 0.41143 l -0.5058,3.29142 1.0116,2.05714 -0.5058,4.11428 1.0116,1.23428 2.023,0.82286 h 5.0578 l 3.0346,1.23428 -2.5289,4.93714 -3.0346,1.23428 -1.5173,-0.41142 -4.0462,0.82285 -1.5173,-0.41143 -3.0346,0.82286 -3.5404,3.70285 v 0.41143 l -1.0116,4.52571 -5.0577,0.82285 -3.5404,-4.93713 -2.0231,-0.41143 -4.0461,2.05714 -2.5289,-0.82286 -7.5865,2.05714 -3.0347,-1.64571 -7.5865,4.11428 v 0.82286 l -6.5751,4.93713 -4.5519,-3.29142 -2.0231,0.82286 -6.0692,-2.05714 -0.5058,-2.88 1.0115,-1.64571 v -2.88 l 0.5058,-0.82285 -0.5058,-3.70286 2.0231,-2.05714 -0.5057,-4.5257 4.0461,-1.23429 3.5404,0.82286 1.5173,-0.41143 1.0116,-3.29142 -4.0462,-2.88 1.0115,-1.23428 -1.0115,-4.11428 -1.0115,-0.82286 6.575,-3.29142 -2.5289,-5.34857 h -0.5057 v -0.41143 l -2.5289,-3.29142 0.5058,-3.29142 4.0461,-2.46857 1.0116,-3.29143 -1.0116,-0.41142 v -4.11428 l 0.5058,-0.82286 -1.5173,-3.29142 6.0693,-2.46857 v -1.64571 l 4.0461,-2.46857"
   style="fill:#b9b9b9;stroke:#ffffff;stroke-width:0.971636px"
   id="path1" />

This is an example of what you might see, but this is deisgned to work only needing the path

If you open Notepad++, Visual Studio Code, and most editors, there will be a find and replace feature under the file menu:

![Image of Find and Replace ALL](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/Find%20and%20Replace.png)

Find and Replace the <path d=" with nothing.

Then you delete the rest, delete the space between the m, and copy/paste it into a notepad or other file.

When done it should look something like this:

m767.35528,816.0285 3.51528,8.0842 2.34352,1.61684 -15.23288,11.31788 2.34352,5.65894 23.4352,2.42526 3.51528,-2.42526 18.74816,7.27578 1.17176,10.50946 24.60696,0.80842 5.8588,-4.0421 -19.91992,-13.74314 11.7176,-12.93472 -9.37408,-4.0421 -2.34352,-16.97682 h -1.17176 l -11.7176,3.23368 -11.7176,-2.42526 -2.34352,-2.42526 

This is just my preference to make it easy to copy/paste, and there are other ways to do this.

### Copying the Path Data

You can either copy/paste each path painstackingly by hand or use a text file to csv converter.

Example of a txt to csv converter is here: https://convertio.co/txt-csv/

Then once you have the CSV File you can copy/paste all the paths into a google spreadsheet.

When you are done it would look something like this in the google spreadsheet: https://github.com/goldcyper/ns-map-project/blob/main/CSV.csv

### Self-Contained HTML Example:

This is a self-contained html file that links to a google spreadsheet: https://github.com/goldcyper/ns-map-project/blob/main/regional-map.html

This might be easier to use if you just want to edit a single html file and not have to host multiple files.

### CSV HTML File Example:

This is an example CSV file used in the self-contained file: https://docs.google.com/spreadsheets/d/1WqdPXvlTyvYHbhkGmvTaLwvhkRyNrFhbTB3W8JJuSHE/edit?usp=sharing

You can use this to copy your own google spreadsheet file.

### Editing in Inkscape

If you want a tutorial for editing in Inkscape read my disaptch here: https://www.nationstates.net/page=dispatch/id=1433615#Editing

### Output in Browser:
![Image of Output](https://raw.githubusercontent.com/goldcyper/ns-map-project/refs/heads/main/map-example.png)

## Author
[newrogerns](https://github.com/newrogerns)

Otherwise known as [New Rogernomics](https://nationstates.net/nation=New_Rogernomics) on Nationstates

## Acknowledgments
Acknowledgments to [Microsoft Co Pilot](https://copilot.microsoft.com/), which was really useful in helping me troubleshoot
