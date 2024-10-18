        document.addEventListener("DOMContentLoaded", function() {
                // Change this google spreadsheet file url to your own:
            fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTXT_iOZlIetp7jw_IT70nmOO55vXqZfyuL7BfdV4pYfhexJzbFTN2-RWHpn5SDOzQqn5XiUqMQNKig/pubhtml')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const rows = doc.querySelectorAll("table tbody tr");
                    const svg = document.querySelector("svg");
                    rows.forEach((row, index) => {
                        if (index === 0) return; // Skip header row
                        const cells = row.querySelectorAll("td");
                        if (cells.length < 7) {
                            console.error(`Row ${index + 1} does not have enough data:`, row);
                            return;
                        }
                        const label = cells[0].innerHTML;
                        const url = cells[1].innerText;
                        const fillColor = cells[2].innerText;
                        const labelPosition = cells[3].innerText; // Added custom label position
                        const strokeColor = cells[4].innerText;
                        const strokeWidth = cells[5].innerText;
                        const pathData = cells[6].innerText;
                        console.log(`Processing row ${index + 1}:`, { label, url, fillColor, strokeColor, strokeWidth, pathData });
                        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        const link = document.createElementNS("http://www.w3.org/2000/svg", "a");
                        path.setAttribute("d", pathData);
                        path.setAttribute("fill", fillColor);
                        path.setAttribute("stroke", strokeColor);
                        path.setAttribute("stroke-width", strokeWidth);
                        link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
                        link.setAttributeNS("http://www.w3.org/1999/xlink", "target", "_blank");
                        link.appendChild(path);
                        svg.appendChild(link);

                        // Calculate label position within object bounds
                        const bbox = path.getBBox();
                        let [labelX, labelY] = labelPosition.split(',').map(Number);
                        if (isNaN(labelX) || isNaN(labelY)) {
                            labelX = bbox.x + bbox.width / 2;
                            labelY = bbox.y + bbox.height / 2;
                        } else {
                            labelX = Math.max(bbox.x, Math.min(bbox.x + bbox.width, bbox.x + labelX));
                            labelY = Math.max(bbox.y, Math.min(bbox.y + bbox.height, bbox.y + labelY));
                        }

                        text.setAttribute("x", labelX);
                        text.setAttribute("y", labelY);
                        text.setAttribute("fill", "black");
                        text.setAttribute("text-anchor", "middle");
                        text.setAttribute("dominant-baseline", "middle");
                        text.setAttribute("class", "label"); // Assign CSS class to text
                        text.innerHTML = label;
                        svg.appendChild(text);
                        console.log(`Added path and label for ${label}`);
                    });
                    console.log('All rows processed');
                })
                .catch(error => {
                    console.error('Error loading HTML:', error);
                });
        });
