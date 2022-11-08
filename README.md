## RIP-OSS
This repo contains the source code of the fronted used to show the project proposals for the MR. RIP open source project.

This small website is built with React and it fetches data from [this](https://docs.google.com/spreadsheets/d/1pPzlbNZ_OLoghh_0lm9Gr5yB-Rq5S1mPXU1ipqG04ZQ/edit#gid=1315066609) spreadhseet using ["useGoogleSheets"](https://github.com/gglukmann/use-google-sheets)

**Note in order for this to run you need a Google Sheets API Key, you can obtain one from [here](https://console.cloud.google.com/marketplace/product/google/sheets.googleapis.com)**

[Link to the live version](https://rip-oss.herokuapp.com/)

### Installation
1. Install NodeJS
2. Clone this repo
    ``` git clone https://github.com/RIP-Comm/rip-oss.git ```


Once you cloned the repository you should get the 
following structure in your working directory

    -+
     |-- rip-oss

Starting from your working directory, you should now execute 
the following commands in order to get all the required dependencies:

    cd rip-oss
    npm install
    

### Run
For running the application execute the following command
in the rip-oss directory

    npm start

