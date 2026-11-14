interface TestConfig{
    browser:string;
    headless:boolean;
    baseUrl:string;
    timeout?:number;
    retries?:number;
}

let localConfig: TestConfig={

    browser:"Chrome",
    headless:true,
    baseUrl:"https://staging.app.com"
};

let ciConfig:TestConfig={
    browser:"Firefox",
    headless:false,
    baseUrl:"https://localhost.com",
    timeout:1000,
    retries:3
};

console.log("CI",ciConfig.browser,"|timeout:",ciConfig.timeout)

console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);
