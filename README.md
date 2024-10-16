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

### Installation
Placeholder

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

### Make a Web Page when in Browser:
![Image of Output](https://github.com/newrogerns/lazmap-ns/preview/webpage-preview.PNG)

## Author
[newrogerns](https://github.com/newrogerns)

Otherwise known as [New Rogernomics](https://nationstates.net/nation=New_Rogernomics) on Nationstates

## Acknowledgments
Acknowledgments to [Microsoft Co Pilot](https://copilot.microsoft.com/), which was really useful in helping me troubleshoot
