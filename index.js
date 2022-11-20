const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");

    for(b of browsers){
        if(!b in ['chromium', 'webkit', 'firefox']){
            return;
        }
        if (!fs.existsSync(`./results/E1`)){
            fs.mkdirSync(`./results/E1`, { recursive: true });
        }
        runScenario("createAccount", 5, datetime, b, resultInfo);
        runScenario("login", 5, datetime, b, resultInfo);

    }

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }


(async ()=>console.log(await executeTest()))();


// RUN FEATURED SCENARY
async function runScenario(feature, scenarios, datetime, b, resultInfo) {
  for (var i = 1; i <= scenarios; i++) {
    if (!fs.existsSync(`./results/${feature}/E${i}`)) {
      fs.mkdirSync(`./results/${feature}/E${i}`, { recursive: true });
    }
    const data = await compareImages(
      fs.readFileSync(`./cypress/screenshots/${feature}5.spec.cy.js/${feature}/V5E${i}.png`),
      fs.readFileSync(`./cypress/screenshots/${feature}3.spec.cy.js/${feature}/V3E${i}.png`),
      options
    );
    resultInfo[b] = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };
    fs.writeFileSync(
      `./results/${feature}/E${i}/compare-${b}.png`,
      data.getBuffer()
    );
    // ADJUNTAR AL REPORTE

    fs.writeFileSync(
      `./results/${feature}/E${i}/report.html`,
      createReport(feature, i, datetime, resultInfo)
    );
    fs.copyFileSync("./index.css", `./results/${feature}/E${i}/index.css`);
  }
}



// GENERAR REPORTE
function browser(feature, scenario, b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../../cypress/screenshots/${feature}5.spec.cy.js/${feature}/V5E${scenario}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../../cypress/screenshots/${feature}3.spec.cy.js/${feature}/V3E${scenario}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(feature, scenario, datetime, resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map((b) =>
                  browser(feature, scenario, b, resInfo[b])
                )}
            </div>
        </body>
    </html>`;
}

