/* @flow */

// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

type HeadContent = {
  title: string;
  titleTemplate: string;
  meta: {name: string, content: string}[];
}

type Logger = {
  pretty: boolean;
  level: string;
}

type EnvConfig = {
  head: HeadContent;
  logger: Logger;
  httpClient?: Object;
  proxies?: Array<{
    path: string;
    destination: string;
    options?: Object;
    filter?: Function;
  }>
}

type Config = {
  development: EnvConfig;
  production: EnvConfig;
}

const headContent = {
  title: "True Grit Communication, LLC",
  titleTemplate: "True Grit Communication, LLC",
  meta: [
    {name: "description", content: "Fiber-Optic Solutions. Specializing In: Safe Work Practices, Fiber-Optic Splicing, Connections & Terminations, Outside Plant & Inside Plant, CAT-5/6 Installations & Terminations, Rack & Electronic Equipment Installations, Training & Education, FTTH Splicing & Terminations, Specialized Fiber-Optic Testing, Excellent Service & Problem Solving, Turbines, MET Towers, Sub-Stations & O&M Facilities & Office."}
  ]
};

const config: Config = {
  development: {
    head: headContent,
    logger: {
      pretty: true,
      level: "info"
    }
  },
  production: {
    head: headContent,
    logger: {
      pretty: false,
      level: "warn"
    }
  }
};

export default config[process.env.NODE_ENV === "production" ? "production" : "development"];
