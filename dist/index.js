"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const helper = require('jeroentvb-helper');
const url = 'http://projects.knmi.nl/klimatologie/daggegevens/getdata_dag.cgi';
const requestBody = {};
async function init() {
    try {
        const res = await node_fetch_1.default(url, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'stns=249&vars=WIND&byear=2018&bmonth=1&bday=1&eyear=2019&emonth=8&eday=18'
        });
        const data = await res.text();
        console.log(data);
        helper.exportToFile('data', data);
    }
    catch (err) {
        console.error(err);
    }
}
init();
