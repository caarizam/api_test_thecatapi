import { Before, BeforeAll, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import {setCurrentBreed, setCurrentVoteCreated, setLastResponse} from "../support/common";


BeforeAll(async function() {
    //console.log("Hooks:BeforeAll");
});

Before( async function(scenario) {
    console.log("Hooks:Before");
    setCurrentBreed(null);
    setLastResponse(null);
    setCurrentVoteCreated(null);
});

After( async function(scenario) {
    //console.log("Hooks:After");
});

AfterAll(async function() {
    //console.log("Hooks:AfterAll");
    //CucumberReportExtension.GenerateCucucumberReport(CucumberReportExtension.cucumberReporterOptions);
});
